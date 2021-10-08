import { PrismaClient } from '@prisma/client'
import express from 'express'
import { RequestWithUser } from '../../interfaces/request'

const prisma = new PrismaClient()

export const get = async (req: RequestWithUser, res: express.Response) => {
  if (!req.user?.token) {
    return res.status(401).send({ error: 'User token cannot be empty' })
  }

  try {
    await prisma.user.update({
      where: { token: req.user.token! },
      data: { token: null }
    })
    res.status(204).send()
  } catch (e) {
    console.error(e)
    res.status(401).send()
  }
}
