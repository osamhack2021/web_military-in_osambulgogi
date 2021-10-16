import { PrismaClient } from '.prisma/client'
import { RequestWithUser } from '../../interfaces/request'
import express from 'express'

const prisma = new PrismaClient()

export const get = async (req: RequestWithUser, res: express.Response) => {
  const user_id = Number(req.query.user_id)
  const facility_id = Number(req.query.facility_id)

  if (!user_id) {
    return res.status(401).send('Invalid parameter')
  }

  try {
    const reservation = await prisma.reservation.findMany({
      where: {
        user_id: user_id,
        ...(facility_id && { facility_id: facility_id })
      }
    })
    res.status(200).send(reservation)
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
}
