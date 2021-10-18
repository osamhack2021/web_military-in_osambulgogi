import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'
import express from 'express'
import { RequestWithUser } from '../interfaces/request'
import { AuthPayload } from '../interfaces/payload'

const prisma = new PrismaClient()

export const authMiddleware = async (
  req: RequestWithUser,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const token = req.header('Authorization')
    if (!token) throw new Error('Authorization header required.')
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'secret_key'
    ) as AuthPayload

    const user = await prisma.user.findFirst({
      where: {
        username: decoded.username,
        token: token
      }
    })

    if (!user) {
      throw new Error('User not found')
    }

    req.user = user
    next()
  } catch (e) {
    console.error(e)
    res.status(401).send({ error: 'Please authenticate' })
  }
}
