import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()

export const post = async (req: express.Request, res: express.Response) => {
  const username = req.body.username

  if (!username) {
    return res.status(400).send('아이디가 필요합니다.')
  }

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        username: username
      }
    })

    if (existingUser) {
      return res.status(400).send('이미 존재하는 아이디입니다.')
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
