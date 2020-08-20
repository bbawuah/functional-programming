import { Request, Response } from 'express'
import { Song } from '../db/mongoose'

interface Match {
  favorite?: boolean
}

interface Song {
  _id: string
  number: string
  title: string
  twi: string
  english: string
  favorite: boolean
  __v: number
}

export const allSongs = async (req: Request, res: Response): Promise<void> => {
  const match: Match = {}

  if (req.query.favorite) {
    match.favorite = req.query.favorite === 'true'
  }

  try {
    const song = await Song.find(match)
    res.send(song)
  } catch (e) {
    res.status(500).send(e)
  }
}

export const getSong = async (req: Request, res: Response): Promise<void> => {
  const hymnNumber = req.body.number

  try {
    const song = await Song.findOne({ number: hymnNumber })

    if (!song) {
      res.send('No hymnal found..')
      return
    }
    res.send(song)
  } catch (e) {
    res.status(500).send(e)
  }
}

export const updateSong = async (
  req: Request,
  res: Response
): Promise<void> => {
  const hymnNumber = req.body.number
  const favoriteValue = req.body.favorite

  try {
    const song = await Song.findOneAndUpdate(
      { number: hymnNumber },
      { $set: { favorite: favoriteValue } }
    )

    if (!song) {
      res.send('No hymnal found..')
      return
    }

    res.send(song)
  } catch (e) {
    res.status(500).send(e)
  }
}
