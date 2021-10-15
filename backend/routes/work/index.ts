import * as work from './work'
import * as worksheet from './worksheet'
import { authMiddleware } from '../../middleware/auth'
import { Router } from 'express'

const router = Router()

router.get('/', authMiddleware, work.get)
router.post('/', authMiddleware, work.post)
router.patch('/', authMiddleware, work.patch)
router.delete('/', authMiddleware, work.delete_)
router.get('/worksheet', authMiddleware, worksheet.get)
router.post('/worksheet', authMiddleware, worksheet.post)
router.patch('/worksheet', authMiddleware, worksheet.patch)
router.delete('/worksheet', authMiddleware, worksheet.delete_)

export default router
