import * as reservation from './reservation'
import * as user from './user'
import * as facility from './facility'
import { authMiddleware } from '../../middleware/auth'
import { Router } from 'express'

const router = Router()

router.post('/', reservation.post)
router.delete('/', reservation.delete_)
router.get('/user', user.get)
router.get('/facility', facility.get)
router.post('/facility', facility.post)
router.patch('/facility', facility.patch)
router.delete('/facility', facility.delete_)

export default router
