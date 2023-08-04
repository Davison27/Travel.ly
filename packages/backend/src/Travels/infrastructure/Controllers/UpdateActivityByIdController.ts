import { Request, Response } from 'express'

import { UpdateActivityById } from '../../application/UpdateActivityById'

export class UpdateActivityByIdController {
  constructor(private activity: UpdateActivityById) {}
  async handle(req: Request, res: Response) {
    try {
      await this.activity.run(
        req.params.travelId,
        req.params.activityId,
        req.body,
      )
      res.status(201).send({ message: 'Deleted' })
    } catch (error) {
      return res.status(500).send({ message: 'Error' })
    }
  }
}
