import { Request, Response } from 'express'

export abstract class AppControler {
    public abstract read(req: Request, res: Response): void
    public abstract create(req: Request, res: Response): void
    public abstract update(req: Request, res: Response): void
}