import express from 'express'
import { allSongs, getSong, updateSong } from './controller'

export const router = express.Router({
  strict: true
})

router.get('/songs', allSongs)

router.get('/song:id', getSong)

router.patch('/song:id', updateSong)
