import express from 'express'
import { RequestWithUser } from '../../interfaces/request'

export const get = async (req: RequestWithUser, res: express.Response) => {
  res.status(200).send(req.user)
}
