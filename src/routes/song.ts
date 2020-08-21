import express from 'express'
import { allSongs, getSong, updateSong, getFavoriteSong } from './controller'

export const router = express.Router({
  strict: true
})

router.get('/songs', allSongs)

router.post('/song', getSong)

router.post('/favorites', getFavoriteSong)

router.patch('/song:id', updateSong)
