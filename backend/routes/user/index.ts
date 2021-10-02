import * as login from './login'
import express from 'express'

const router = express.Router()

router.post('/login', login.post)

export default router
