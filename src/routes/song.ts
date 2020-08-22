import express from 'express'
import {
  allSongs,
  getSong,
  updateSong,
  getFavoriteSong,
  getSearchQuery
} from './controller'

export const router = express.Router({
  strict: true
})

router.get('/songs', allSongs)

router.post('/song', getSong)

router.post('/favorites', getFavoriteSong)

router.get('/search:term', getSearchQuery)

router.patch('/song:id', updateSong)
