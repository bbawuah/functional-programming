import express from 'express'
import { Request, Response } from 'express'

export const router = express.Router({
  strict: true
})

router.get('/route/:id', (req: Request, res: Response) => {
  console.log('test')
})
