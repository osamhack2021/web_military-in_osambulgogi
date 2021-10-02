import express from 'express'
import user from './user'

const routes = express.Router()

routes.use((req, res, next) => {
  console.log(`Resource requested: ${req.method} ${req.originalUrl}`)
  next()
})

routes.use('/user', user)

export default routes
