import { Request, Response } from 'express'

import { DeleteActivityById } from '../../application/DeleteActivityById '

export class DeleteActivityByIdController {
  constructor(private activity: DeleteActivityById) {}
  async handle(req: Request, res: Response) {
    try {
      await this.activity.run(req.params.travelId, req.params.activityId)
      res.status(201).send({ message: 'Deleted' })
    } catch (error) {
      return res.status(500).send({ message: 'Error' })
    }
  }
}
