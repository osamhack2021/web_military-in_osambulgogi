import * as article from './article'
import * as vote from './vote'
import { authMiddleware } from '../../middleware/auth'
import { Router } from 'express'

const router = Router()

router.get('/', authMiddleware, article.get)
router.put('/vote', authMiddleware, vote.put)

export default router
