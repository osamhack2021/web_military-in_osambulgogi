import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()

export const post = async (req: express.Request, res: express.Response) => {
  const username = req.body.username

  if (!username) {
    return res.status(400).send('Username required')
  }

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        username: username
      }
    })

    if (existingUser) {
      return res.status(400).send('Given username already exists')
    }

    const user = await prisma.user.create({
      data: {
        ...req.body
      }
    })

    res.status(200).send(user)
  } catch (e) {
    res.status(400).send()
  }
}
