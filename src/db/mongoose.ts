import mongoose from 'mongoose'

mongoose.connect(`${process.env.MONGODB_URL}`, { useNewUrlParser: true })

export const SongSchema = new mongoose.Schema({
  number: { type: String, required: true },
  title: { type: String, required: true },
  twi: { type: String, required: true },
  english: { type: String, required: false },
  favorite: { type: Boolean, required: true }
})

export const Song = mongoose.model('Song', SongSchema)
