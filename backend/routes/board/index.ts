import { authMiddleware } from '../../middleware/auth'
import { RequestWithUser } from '../../interfaces/request'
import { Router, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

router.get('/', authMiddleware, async (req: RequestWithUser, res: Response) => {
  const board = Number(req.query.id)
  const cursor = Number(req.query.cursor)

  if (!board) {
    return res.status(400).send({ error: 'Invalid query string' })
  }

  if (!cursor) {
    const articles = await prisma.article.findMany({
      take: 30,
      orderBy: {
        id: 'desc'
      }
    })

    const newCursor = articles[articles.length - 1].id
    return res.status(200).send({ articles: articles, cursor: newCursor })
  }

  const articles = await prisma.article.findMany({
    take: 30,
    skip: 1,
    cursor: {
      id: cursor
    },
    orderBy: {
      id: 'desc'
    }
  })

  const newCursor = articles[articles.length - 1].id
  res.status(200).send({ articles: articles, cursor: newCursor })
})

export default router
