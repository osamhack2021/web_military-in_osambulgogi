import express from 'express'
import user from './user'
import board from './board'
import article from './article'
import schedule from './schedule'

const routes = express.Router()

routes.use((req, res, next) => {
  console.log(`Resource requested: ${req.method} ${req.originalUrl}`)
  next()
})

routes.use('/user', user)
routes.use('/board', board)
routes.use('/article', article)
routes.use('/schedule', schedule)

export default routes
