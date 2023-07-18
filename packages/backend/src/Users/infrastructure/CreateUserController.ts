import { Request, Response } from 'express'

import { CreateUser } from '../application/CreateUser'
import { CreateUserDTO } from '../application/CreateUserDTO'

export class CreateUserController {
  constructor(private useCase: CreateUser) {}

  async handle(req: Request<unknown, unknown, CreateUserDTO>, res: Response) {
    const userData = req.body
    try {
      await this.useCase.run(userData)
    } catch (error) {
      res.status(500).send({ message: 'Error' })
    }
    res.status(201).send({ message: 'Created' })
  }
}
