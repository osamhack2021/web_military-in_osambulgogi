import * as schedule from './schedule'
import * as user from './user'
import * as group from './group'
import { authMiddleware } from '../../middleware/auth'
import { Router } from 'express'

const router = Router()

router.post('/', authMiddleware, schedule.post)
router.patch('/', authMiddleware, schedule.patch)
router.delete('/', authMiddleware, schedule.delete_)
router.get('/user', authMiddleware, user.get)
router.get('/group', authMiddleware, group.get)

export default router
