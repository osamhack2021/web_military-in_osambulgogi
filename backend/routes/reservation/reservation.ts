import { PrismaClient } from '.prisma/client'
import { RequestWithUser } from '../../interfaces/request'
import express from 'express'

const prisma = new PrismaClient()

export const post = async (req: RequestWithUser, res: express.Response) => {
  try {
    const reservation = await prisma.reservation.create({
      data: { ...req.body }
    })
    res.status(200).send(reservation)
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
    const reservation = await prisma.reservation.delete({
      where: { id: id }
    })
    res.status(200).send(reservation)
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
}
