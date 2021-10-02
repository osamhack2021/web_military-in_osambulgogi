import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import express from 'express'

const prisma = new PrismaClient()

export const post = async (req: express.Request, res: express.Response) => {
  try {
    if (!req.body.username) {
      return res.status(400).send({ error: 'Username required' })
    }
    if (!req.body.password) {
      return res.status(400).send({ error: 'Password required' })
    }

    const user = await prisma.user.findUnique({
      where: {
        username: req.body.username
      }
    })

    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      throw new Error('Unable to login')
    }

    const token = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET || 'secret_key',
      {
        expiresIn: '12h'
      }
    )

    const userinfo = await prisma.user.update({
      where: { username: req.body.username },
      data: { token: token },
      select: {
        id: true,
        group_id: true,
        username: true,
        token: true
      }
    })

    res.status(200).send(userinfo)
  } catch (e) {
    res.status(401).send((e as Error).message)
  }
}
