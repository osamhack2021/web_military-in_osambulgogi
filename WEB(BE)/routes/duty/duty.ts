import { PrismaClient } from '@prisma/client'
import { RequestWithUser } from '../../interfaces/request'
import express from 'express'

const prisma = new PrismaClient()

export const get = async (req: RequestWithUser, res: express.Response) => {
  const group_id = Number(req.query.group_id)
  const user_id = Number(req.query.user_id)

  if (!group_id) {
    return res.status(401).send('Invalid parameter')
  }

  try {
    const duty = await prisma.duty.findMany({
      where: user_id
        ? {
            user_id: user_id
          }
        : {
            user: {
              group_id: group_id
            }
          }
    })
    res.status(200).send(duty)
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
}

export const post = async (req: RequestWithUser, res: express.Response) => {
  try {
    const duty = await prisma.duty.create({
      data: { ...req.body }
    })
    res.status(200).send(duty)
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
}

export const patch = async (req: RequestWithUser, res: express.Response) => {
  const id = Number(req.query.id)

  if (!id) {
    return res.status(401).send('Invalid parameter')
  }

  try {
    const duty = await prisma.duty.update({
      where: { id: id },
      data: { ...req.body }
    })
    res.status(200).send(duty)
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
}

export const delete_ = async (req: RequestWithUser, res: express.Response) => {
  const id = Number(req.query.id)

  if (!id) {
    return res.status(401).send('Invalid parameter')
  }

  try {
    const duty = await prisma.duty.delete({
      where: { id: id }
    })
    res.status(200).send(duty)
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
}
