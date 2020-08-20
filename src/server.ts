import express from 'express';
import { PORT } from './config/constants';
import { songRouter } from './routes';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(songRouter);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
