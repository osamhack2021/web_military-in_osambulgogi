import * as work from './work'
import * as worksheet from './worksheet'
import { authMiddleware } from '../../middleware/auth'
import { Router } from 'express'

const router = Router()

router.get('/', work.get)
router.post('/', work.post)
router.patch('/', work.patch)
router.delete('/', work.delete_)
router.get('/worksheet', worksheet.get)
router.post('/worksheet', worksheet.post)
router.patch('/worksheet', worksheet.patch)
router.delete('/worksheet', worksheet.delete_)

export default router
