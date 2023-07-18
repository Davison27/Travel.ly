import { Request, Response } from 'express'

export class GetUsersController {
  async handle(req: Request, res: Response) {
    try {
      res.status(200).send([])
    } catch (error) {
      res.status(500).send({ message: 'Error' })
    }
  }
}
