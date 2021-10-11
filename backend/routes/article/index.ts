import * as article from './article'
import * as vote from './vote'
import comment from './comment'
import { authMiddleware } from '../../middleware/auth'
import { Router } from 'express'

const router = Router()

router.get('/', authMiddleware, article.get)
router.post('/', authMiddleware, article.post)
router.patch('/', authMiddleware, article.patch)
router.delete('/', authMiddleware, article.delete_)
router.put('/vote', authMiddleware, vote.put)
router.use('/comment', comment)

export default router
