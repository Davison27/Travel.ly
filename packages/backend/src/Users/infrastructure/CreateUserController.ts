import { Request, Response } from 'express';
import { CreateUser } from "../application/CreateUser";

export type CreateUserControllerBody = {
  id: string;
  name: string;
}

export class CreateUserController {
  constructor(private useCase: CreateUser) { }

  async handle(req: Request<unknown, unknown, CreateUserControllerBody>, res: Response) {
    const userData = req.body;
    try {
      await this.useCase.run(userData);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Error' });
    }
    res.status(201).send({ message: 'Created' });
  }
}
