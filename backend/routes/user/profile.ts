import express from 'express'
import { PrismaClient } from '@prisma/client'
import { RequestWithUser } from '../../interfaces/request'
import { ProfileKey } from '../../interfaces/profile'

const prisma = new PrismaClient()

export const get = async (req: RequestWithUser, res: express.Response) => {
  res.status(200).send(req.user)
}

export const put = async (req: RequestWithUser, res: express.Response) => {
  const keys = Object.keys(req.body) as [ProfileKey]
  const updatable = ['nickname', 'class', 'phone', 'email']

  if (!keys.every((key) => updatable.includes(key))) {
    return res.status(400).send({ error: 'Invalid parameter' })
  }

  try {
    keys.forEach((key) => {
      req.user![key] = req.body[key]
    })

    await prisma.user.update({
      where: { token: req.user!.token! },
      data: { ...req.user }
    })

    res.status(200).send(req.user)
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
}
