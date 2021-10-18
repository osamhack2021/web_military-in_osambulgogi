import { RequestWithUser } from '../../interfaces/request'
import { VoteCountedArticle } from '../../interfaces/article'
import { PrismaClient, UserType } from '.prisma/client'
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

export const post = async (req: RequestWithUser, res: express.Response) => {
  const board_id = Number(req.query.board_id)
  const title = req.body.title
  const is_notice = Boolean(req.body.is_notice)
  const content = req.body.content

  if (!board_id || !title || !content) {
    return res.status(400).send('Wrong parameter')
  }

  try {
    const article = await prisma.article.create({
      data: {
        board_id: board_id,
        writer_id: req.user!.id,
        title: title,
        is_notice: is_notice,
        content: content
      }
    })
    res.status(200).send(article)
  } catch (e) {
    res.status(500).send()
  }
}

export const patch = async (req: RequestWithUser, res: express.Response) => {
  const id = Number(req.query.id)

  if (!id) {
    return res.status(400).send('Wrong parameter')
  }

  const user_info = await prisma.article.findFirst({
    where: { id: id },
    select: { writer_id: true }
  })

  if (
    req.user!.id !== user_info?.writer_id &&
    req.user!.user_type === UserType.NONE
  ) {
    return res.status(401).send('No access authority')
  }

  try {
    const article = await prisma.article.update({
      where: {
        id: id
      },
      data: {
        ...req.body
      }
    })
    res.status(200).send(article)
  } catch (e) {
    res.status(500).send()
  }
}

export const delete_ = async (req: RequestWithUser, res: express.Response) => {
  const id = Number(req.query.id)

  if (!id) {
    return res.status(400).send('Wrong parameter')
  }

  const user_info = await prisma.article.findFirst({
    where: { id: id },
    select: { writer_id: true }
  })

  if (
    req.user!.id !== user_info?.writer_id &&
    req.user!.user_type === UserType.NONE
  ) {
    return res.status(401).send('No access authority')
  }

  try {
    const article = await prisma.article.delete({
      where: {
        id: id
      }
    })
    res.status(200).send(article)
  } catch (e) {
    res.status(500).send()
  }
}
