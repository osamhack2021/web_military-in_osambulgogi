import { RequestWithUser } from '../../interfaces/request'
import { VoteCountedArticle } from '../../interfaces/article'
import { PrismaClient } from '.prisma/client'
import express from 'express'

const prisma = new PrismaClient()

export const get = async (req: RequestWithUser, res: express.Response) => {
  const board_id = Number(req.query.board_id)
  const id = Number(req.query.id)

  if (!board_id || !id) {
    return res.status(400).send({ error: 'Invalid query string' })
  }

  try {
    const board = await prisma.board.findFirst({
      where: {
        id: board_id
      },
      select: {
        is_annonymous: true
      }
    })

    const article: VoteCountedArticle | null = await prisma.article.findFirst({
      where: {
        id: id,
        board_id: board_id
      },
      include: {
        comment: true,
        vote: {
          select: {
            is_upvote: true
          }
        }
      }
    })

    if (!article) {
      return res.status(404).send('Article does not exist.')
    }

    article.upvote = article.vote!.filter((vote) => {
      vote.is_upvote
    }).length
    article.downvote = article.vote!.length - article.upvote

    const my_vote = await prisma.vote.findFirst({
      where: {
        article: {
          id: id,
          board_id: board_id
        }
      },
      select: {
        is_upvote: true
      }
    })

    article.my_vote = my_vote ? (my_vote.is_upvote ? 1 : -1) : 0

    delete article.vote

    res.status(200).send(article)
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
}
