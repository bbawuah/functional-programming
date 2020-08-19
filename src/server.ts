
import express from 'express';
import { PORT } from './config/constants';
import { songRouter } from './routes';
import Data from './hymns.json'
import { Song } from './db/mongoose';

const app = express();
app.use(express.json());
app.use(songRouter)
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})