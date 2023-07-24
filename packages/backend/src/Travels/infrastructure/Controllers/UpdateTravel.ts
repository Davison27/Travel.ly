import { Request, Response } from 'express'

import { UpdateTravel } from '../../application/UpdateTravel'

export class UpdateTravelController {
  constructor(private useCase: UpdateTravel) {}

  async handle(req: Request, res: Response) {
    try {
      await this.useCase.run(req.params.id, req.body)
    } catch (error) {
      res.status(500).send({ message: 'Error' })
    }
    res.status(201).send({ message: 'Updated' })
  }
}
