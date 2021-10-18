import { PrismaClient } from '@prisma/client'
import { RequestWithUser } from '../../interfaces/request'
import express from 'express'

const prisma = new PrismaClient()

export const get = async (req: RequestWithUser, res: express.Response) => {
  try {
    const work = await prisma.work.findMany()
    res.status(200).send(work)
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
}

export const post = async (req: RequestWithUser, res: express.Response) => {
  try {
    const work = await prisma.work.create({
      data: { ...req.body }
    })
    res.status(200).send(work)
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
    const work = await prisma.work.update({
      where: { id: id },
      data: { ...req.body }
    })
    res.status(200).send(work)
  } catch (e) {
    res.status(500).send()
  }
}

export const delete_ = async (req: RequestWithUser, res: express.Response) => {
  const id = Number(req.query.id)

  if (!id) {
    return res.status(401).send('Invalid parameter')
  }

  try {
    const work = await prisma.work.delete({
      where: { id: id }
    })
    res.status(200).send(work)
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
}
