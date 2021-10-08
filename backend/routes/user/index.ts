import * as login from './login'
import * as logout from './logout'
import * as profile from './profile'
import { authMiddleware } from '../../middleware/auth'
import express from 'express'

const router = express.Router()

router.post('/login', login.post)
router.get('/logout', authMiddleware, logout.get)
router.get('/profile', authMiddleware, profile.get)
router.put('/profile', authMiddleware, profile.put)

export default router
