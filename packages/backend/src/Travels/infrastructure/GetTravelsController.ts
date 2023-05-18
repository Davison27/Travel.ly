import { Request, Response } from 'express'

import { BuildListTravelsView } from './BuildListTravelsView'

export class GetTravelsController {
  constructor(private readonly buildListTravelsView: BuildListTravelsView) {}
  async handle(req: Request, res: Response) {
    console.log(this.buildListTravelsView)
    try {
      const listTravelsView = await this.buildListTravelsView.run()
      res.status(200).send(listTravelsView)
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: 'Error' })
    }
  }
}
