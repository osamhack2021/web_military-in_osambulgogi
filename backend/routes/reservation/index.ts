import * as reservation from './reservation'
import * as user from './user'
import { authMiddleware } from '../../middleware/auth'
import { Router } from 'express'

const router = Router()

router.post('/', authMiddleware, reservation.post)
router.delete('/', authMiddleware, reservation.delete_)
router.get('/user', authMiddleware, user.get)

export default router
