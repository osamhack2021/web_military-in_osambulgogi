import { PrismaClient } from '@prisma/client'
import { RequestWithUser } from '../../interfaces/request'
import express from 'express'

const prisma = new PrismaClient()

export const get = async (req: RequestWithUser, res: express.Response) => {
  const id = Number(req.query.id)

  if (id) {
    try {
      const reservation = await prisma.reservation.findMany({
        where: { facility_id: id }
      })
      res.status(200).send(reservation)
    } catch (e) {
      console.error(e)
      res.status(500).send()
    }
  } else {
    try {
      const facility = await prisma.facility.findMany()
      res.status(200).send(facility)
    } catch (e) {
      console.error(e)
      res.status(500).send()
    }
  }
}

export const post = async (req: RequestWithUser, res: express.Response) => {
  try {
    const facility = await prisma.facility.create({
      data: { ...req.body }
    })
    res.status(200).send(facility)
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
}

export const patch = async (req: RequestWithUser, res: express.Response) => {
  const id = Number(req.query.id)

  if (!id) {
    return res.status(401).send('Invalid paramter')
  }

  try {
    const facility = await prisma.facility.update({
      where: { id: id },
      data: { ...req.body }
    })
    res.status(200).send(facility)
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
    const facility = await prisma.facility.delete({
      where: { id: id }
    })
    res.status(200).send(facility)
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
}
