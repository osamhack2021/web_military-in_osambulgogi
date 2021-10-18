import * as comment from './comment'
import { authMiddleware } from '../../../middleware/auth'
import { Router } from 'express'

const router = Router()

router.post('/', authMiddleware, comment.post)
router.patch('/', authMiddleware, comment.patch)
router.delete('/', authMiddleware, comment.delete_)

export default router
