import * as login from './login'
import * as logout from './logout'
import { authMiddleware } from '../../middleware/auth'
import express from 'express'

const router = express.Router()

router.post('/login', login.post)
router.get('/logout', authMiddleware, logout.get)

export default router
