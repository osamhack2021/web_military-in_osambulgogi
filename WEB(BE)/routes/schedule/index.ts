import * as schedule from './schedule'
import * as user from './user'
import * as group from './group'
import { authMiddleware } from '../../middleware/auth'
import { Router } from 'express'

const router = Router()

router.post('/', schedule.post)
router.patch('/', schedule.patch)
router.delete('/', schedule.delete_)
router.get('/user', user.get)
router.get('/group', group.get)

export default router
