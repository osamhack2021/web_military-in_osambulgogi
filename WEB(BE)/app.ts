import express from 'express'
import routes from './routes'

const app = express()

app.use(express.json())

app.use('/api', routes)

app.listen(4000, () =>
  console.log(`
🚀 Server ready at: http://localhost:4000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
)
