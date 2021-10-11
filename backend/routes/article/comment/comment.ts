import { RequestWithUser } from '../../../interfaces/request'
import { PrismaClient, UserType } from '@prisma/client'
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

export const patch = async (req: RequestWithUser, res: express.Response) => {
  const id = Number(req.query.id)
  const content = req.body.content

  if (!id || !content) {
    return res.status(400).send('Wrong parameter')
  }

  try {
    const comment_info = await prisma.comment.findFirst({
      where: {
        id: id
      },
      select: {
        writer_id: true
      }
    })

    if (
      req.user!.id !== comment_info?.writer_id &&
      req.user!.user_type === UserType.NONE
    ) {
      return res.status(401).send('No access authority')
    }

    const comment = await prisma.comment.update({
      where: {
        id: id
      },
      data: {
        content: content
      }
    })
    res.status(200).send(comment)
  } catch (e) {
    res.status(500).send()
  }
}

export const delete_ = async (req: RequestWithUser, res: express.Response) => {
  const id = Number(req.query.id)

  if (!id) {
    return res.status(400).send('Wrong parameter')
  }

  try {
    const comment_info = await prisma.comment.findFirst({
      where: {
        id: id
      },
      select: {
        writer_id: true
      }
    })

    if (
      req.user!.id !== comment_info?.writer_id &&
      req.user!.user_type === UserType.NONE
    ) {
      return res.status(401).send('No access authority')
    }

    const comment = await prisma.comment.delete({
      where: {
        id: id
      }
    })
    res.status(200).send(comment)
  } catch (e) {
    res.status(500).send()
  }
}
