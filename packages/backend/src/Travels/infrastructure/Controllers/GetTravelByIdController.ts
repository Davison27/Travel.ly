import { Request, Response } from 'express'

import { GetTravelById } from '../../application/GetTravelById'

export class GetTravelByIdController {
  constructor(private travel: GetTravelById) {}
  async handle(req: Request, res: Response) {
    try {
      const travel = await this.travel.run(req.params.id)
      res.status(200).send(travel)
    } catch (error) {
      return res.status(500).send({ message: 'Error' })
    }
  }
}
