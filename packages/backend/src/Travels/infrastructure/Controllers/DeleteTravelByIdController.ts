import { Request, Response } from 'express'

import { DeleteTravelById } from '../../application/DeleteTravelById'

export class DeleteTravelByIdController {
  constructor(private travel: DeleteTravelById) {}
  async handle(req: Request, res: Response) {
    try {
      await this.travel.run(req.params.id)
      res.status(201).send({ message: 'Deleted' })
    } catch (error) {
      res.status(500).send({ message: 'Error' })
    }
  }
}
