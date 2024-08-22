const express = require('express')
const app = express()

const { PORT } = require('./util/config')
const { connectToDatabase } = require('./util/db')

const productsRouter = require('./controllers/products')
const productsInfoRouter = require('./controllers/productsInfo')
const contactRouter = require('./controllers/contact')
const newsletterRouter = require('./controllers/newsletter')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const userLikesRouter = require('./controllers/userLikes')
const userCartRouter = require('./controllers/userCart')

const middleware = require('./util/middleware')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/products', productsRouter)
app.use('/api/productsInfo', productsInfoRouter)
app.use('/api/contact', contactRouter)
app.use('/api/newsletter', newsletterRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/userLikes', userLikesRouter)
app.use('/api/userCart', userCartRouter)

app.use(express.static(__dirname + '/public'));

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()