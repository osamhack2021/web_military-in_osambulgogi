import { RequestWithUser } from '../../interfaces/request'
import { PrismaClient } from '.prisma/client'
import express from 'express'

const prisma = new PrismaClient()

export const put = async (req: RequestWithUser, res: express.Response) => {
  const board_id = Number(req.query.board_id)
  const id = Number(req.query.id)
  const is_upvote = Boolean(req.query.is_upvote)

  if (!id || !board_id) {
    return res.status(400).send('Wrong parameter')
  }

  const vote = await prisma.vote.findFirst({
    where: {
      article: {
        board_id: board_id,
        id: id
      },
      user_id: req.user!.id
    }
  })

  if (vote) {
    if (vote.is_upvote !== is_upvote) {
      return res.status(400).send('This vote cannot be canceled')
    }

    await prisma.vote.delete({
      where: {
        id: vote.id
      }
    })
  } else {
    await prisma.vote.create({
      data: {
        user_id: req.user!.id,
        article_id: id,
        is_upvote: is_upvote
      }
    })
  }

  const votes = await prisma.vote.findMany({
    where: {
      article_id: id
    }
  })

  const upvote = votes.filter((vote) => vote.is_upvote).length
  const downvote = votes.length - upvote

  res.status(200).send({
    upvote: upvote,
    downvote: downvote,
    added: !vote
  })
}
