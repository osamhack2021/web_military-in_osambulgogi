import { PrismaClient } from '@prisma/client'
import { RequestWithUser } from '../../interfaces/request'
import express from 'express'

const prisma = new PrismaClient()

export const post = async (req: RequestWithUser, res: express.Response) => {
  try {
    const schedule = await prisma.schedule.create({
      data: { ...req.body }
    })
    res.status(200).send(schedule)
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
}

export const patch = async (req: RequestWithUser, res: express.Response) => {
  const id = Number(req.query.id)

  if (!id) {
    return res.status(401).send('Invalid Parameter')
  }

  try {
    const schedule = await prisma.schedule.update({
      where: { id: id },
      data: { ...req.body }
    })
    res.status(200).send(schedule)
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
    const schedule = await prisma.schedule.delete({
      where: { id: id }
    })
    res.status(200).send(schedule)
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
}
