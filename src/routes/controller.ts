import { Request, Response } from 'express';
import { Song } from '../db/mongoose';

export const allSongs = (req: Request, res: Response) => {
  const songs = Song.find((err: any, song: any) => {
    if (err) {
      res.send(err);
    } else {
      console.log(song);
      res.send(song);
    }
  });
};

export const getSong = (req: Request, res: Response) => {
  const song = Song.find((err: any, song: any) => {
    if (err) {
      res.send(err);
    } else {
      console.log(song);
      res.send(song);
    }
  });
};
