import * as duty from './duty'
import { authMiddleware } from '../../middleware/auth'
import { Router } from 'express'

const router = Router()

router.get('/', authMiddleware, duty.get)
router.post('/', authMiddleware, duty.post)
router.patch('/', authMiddleware, duty.patch)
router.delete('/', authMiddleware, duty.delete_)

export default router
