import * as duty from './duty'
import { authMiddleware } from '../../middleware/auth'
import { Router } from 'express'

const router = Router()

router.get('/', duty.get)
router.post('/', duty.post)
router.patch('/', duty.patch)
router.delete('/', duty.delete_)

export default router
