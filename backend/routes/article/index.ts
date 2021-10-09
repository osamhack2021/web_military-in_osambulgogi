import * as article from './article'
import { authMiddleware } from '../../middleware/auth'
import { Router } from 'express'

const router = Router()

router.get('/', authMiddleware, article.get)

export default router
