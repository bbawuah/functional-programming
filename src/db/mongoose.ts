import mongoose from 'mongoose';

const uri =
  'mongodb+srv://brian-tech:JOeo2ntTKeU6gahw@cluster0.qkwhm.mongodb.net/hymnal-app?retryWrites=true&w=majority';

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('succesfully connected');
  }
});

export const SongSchema = new mongoose.Schema({
  number: { type: String, required: true },
  title: { type: String, required: true },
  twi: { type: String, required: true },
  english: { type: String, required: true },
  favorite: { type: Boolean, required: true }
});

export const Song = mongoose.model('Song', SongSchema);
