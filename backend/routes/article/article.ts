import { RequestWithUser } from '../../interfaces/request'
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

    const article = board!.is_annonymous
      ? await prisma.article.findFirst({
          where: {
            id: id,
            board_id: board_id
          },
          include: {
            comment: true
          }
        })
      : await prisma.article.findFirst({
          where: {
            id: id,
            board_id: board_id
          },
          include: {
            writer: {
              select: {
                nickname: true
              }
            },
            comment: true
          }
        })

    if (!article) {
      return res.status(404).send('Article does not exist.')
    }

    res.status(200).send(article)
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
}
