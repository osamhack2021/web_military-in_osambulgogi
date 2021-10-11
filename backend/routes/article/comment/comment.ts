import { RequestWithUser } from '../../../interfaces/request'
import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()

export const post = async (req: RequestWithUser, res: express.Response) => {
  const id = Number(req.query.id)
  const board_id = Number(req.query.board_id)
  const parent_comment = Number(req.query.parent_comment) || undefined
  const content = req.body.content

  if (!id || !board_id || !content) {
    res.status(400).send('Invalid parameter')
  }

  const comment = await prisma.comment.create({
    data: {
      article: {
        connect: {
          id: id
        }
      },
      writer: {
        connect: {
          username: req.user!.username
        }
      },
      parent_comment: {
        connect: {
          id: parent_comment
        }
      },
      content: content
    }
  })

  return res.status(200).send(comment)
}
