import * as article from './article'
import * as vote from './vote'
import comment from './comment'
import { authMiddleware } from '../../middleware/auth'
import { Router } from 'express'

const router = Router()

router.get('/', article.get)
router.post('/', article.post)
router.patch('/', article.patch)
router.delete('/', article.delete_)
router.put('/vote', vote.put)
router.use('/comment', comment)

export default router
