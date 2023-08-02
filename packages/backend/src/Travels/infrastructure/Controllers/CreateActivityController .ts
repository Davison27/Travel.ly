import { Request, Response } from 'express'

import { CreateActivity } from '../../application/CreateActivity'
import { CreateActivityDTO } from '../../application/CreateActivityDTO '

export class CreateActivityController {
  constructor(private useCase: CreateActivity) {}

  async handle(
    req: Request<unknown, unknown, CreateActivityDTO>,
    res: Response,
  ) {
    const activityData = req.body
    try {
      await this.useCase.run(activityData)
    } catch (error) {
      return res.status(500).send({ message: 'Error' })
    }
    res.status(201).send({ message: 'Created' })
  }
}
