import { Request, Response } from 'express'

import { CreateTravel } from '../application/CreateTravel'
import { CreateTravelDTO } from '../application/CreateTravelDTO'

export class CreateTravelController {
  constructor(private useCase: CreateTravel) {}

  async handle(req: Request<unknown, unknown, CreateTravelDTO>, res: Response) {
    const travelData = req.body
    try {
      await this.useCase.run(travelData)
    } catch (error) {
      res.status(500).send({ message: 'Error' })
    }
    res.status(201).send({ message: 'Created' })
  }
}
