import express, { Request, Response } from 'express'
import { SongController } from '../controller/song';
import { Song } from '../controller';

export const router = express.Router({
    strict: true
});

router.post('/', (req: Request, res: Response) => {
    Song.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
    Song.read(req, res);
});

router.patch('/', (req: Request, res: Response) => {
    Song.update(req, res);
});
