import * as comment from './comment'
import { authMiddleware } from '../../../middleware/auth'
import { Router } from 'express'

const router = Router()

router.post('/', authMiddleware, comment.post)

export default router
