import { Request, Response } from 'express'

import { CreateActivity } from '../application/CreateActivity'

export type CreateActivityControllerBody = {
  category: string
  description: string
  documentUrls: string
  endDate: Date
  id: string
  name: string
  price: number
  startDate: Date
  travelId: number
}

export class CreateActivityController {
  constructor(private useCase: CreateActivity) {}

  async handle(
    req: Request<unknown, unknown, CreateActivityControllerBody>,
    res: Response,
  ) {
    const activityData = req.body
    try {
      await this.useCase.run(activityData)
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: 'Error' })
    }
    res.status(201).send({ message: 'Created' })
  }
}
