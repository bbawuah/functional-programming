import mongoose from 'mongoose'
import Grid from 'gridfs-stream'
import { Request, Response } from 'express'

const connection = mongoose.createConnection(`${process.env.MONGODB_URL}`, {
  useNewUrlParser: true
})
connection.once('open', () => {
  console.log('connected')
})

export const getSound = async (req: Request, res: Response): Promise<void> => {
  const gfs = Grid(connection.db, mongoose.mongo)

  const readstream = gfs.createReadStream({
    filename: `${req.params.id}.mp3`
  })

  readstream.on('error', function (error) {
    console.log(error)
    return error
  })

  res.type('audio/mpeg')
  readstream.pipe(res)
}
