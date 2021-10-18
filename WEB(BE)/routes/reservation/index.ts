import * as reservation from './reservation'
import * as user from './user'
import * as facility from './facility'
import { authMiddleware } from '../../middleware/auth'
import { Router } from 'express'

const router = Router()

router.post('/', authMiddleware, reservation.post)
router.delete('/', authMiddleware, reservation.delete_)
router.get('/user', authMiddleware, user.get)
router.get('/facility', authMiddleware, facility.get)
router.post('/facility', authMiddleware, facility.post)
router.patch('/facility', authMiddleware, facility.patch)
router.delete('/facility', authMiddleware, facility.delete_)

export default router
