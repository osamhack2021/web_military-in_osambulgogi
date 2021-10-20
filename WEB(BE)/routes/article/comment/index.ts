import * as comment from './comment'
import { authMiddleware } from '../../../middleware/auth'
import { Router } from 'express'

const router = Router()

router.post('/', comment.post)
router.patch('/', comment.patch)
router.delete('/', comment.delete_)

export default router
