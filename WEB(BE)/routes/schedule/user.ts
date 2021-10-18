import { PrismaClient } from '@prisma/client'
import { RequestWithUser } from '../../interfaces/request'
import express from 'express'

const prisma = new PrismaClient()

export const get = async (req: RequestWithUser, res: express.Response) => {
  const user_id = Number(req.query.user_id)

  if (!user_id) {
    return res.status(401).send('Invalid parameter')
  }

  try {
    const schedule = await prisma.schedule.findMany({
      where: {
        user_id: user_id
      }
    })

    res.send(200).send(schedule)
  } catch (e) {
    console.error(e)
    res.send(500).send()
  }
}
