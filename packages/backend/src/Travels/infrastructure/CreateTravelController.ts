import { Request, Response } from 'express'

import { CreateTravel } from '../application/CreateTravel'

export type CreateTravelControllerBody = {
  description: string
  endDate: Date
  expenses: number
  id: string
  name: string
  ownerId: string
  shared: boolean
  startDate: Date
  travelers: number
}

export class CreateTravelController {
  constructor(private useCase: CreateTravel) {}

  async handle(
    req: Request<unknown, unknown, CreateTravelControllerBody>,
    res: Response,
  ) {
    const travelData = req.body
    try {
      await this.useCase.run(travelData)
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: 'Error' })
    }
    res.status(201).send({ message: 'Created' })
  }
}