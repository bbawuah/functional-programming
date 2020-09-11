import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { PORT } from './config/constants'
import bodyParser from 'body-parser'
import { getSound } from './db/mongoose'

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/songs/:id', getSound)
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
