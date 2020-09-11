import express from 'express'
import { getSound } from '../db/mongoose'

export const router = express.Router({
  strict: true
})

router.get('/songs/:id', getSound)
