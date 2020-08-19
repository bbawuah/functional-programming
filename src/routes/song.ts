import express, { Request, Response } from 'express'
import { allSongs, getSong } from './controller';

export const router = express.Router({
    strict: true
});

router.get('/songs', allSongs);

router.get('/song', getSong);
