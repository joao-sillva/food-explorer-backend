require('express-async-errors')
require('dotenv/config')

const migrationsRun = require('./database/sqlite/migrations')
const AppError = require('./utils/AppError')
const uploadConfig = require('./configs/upload')

const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()
migrationsRun()

app.use(express.json())
app.use(cors())
app.use(routes)
app.use('/files', express.static(uploadConfig.UPLOADS_FOLDER))

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    })
  }

  console.error(error);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
})

app.listen(3333, () => {
  console.log('Server is running on port 3333')
}) 