import { Request, Response } from 'express'

import { BuildListTravelsView } from '../../application/BuildListTravelsView'

export class GetTravelsController {
  constructor(private readonly buildListTravelsView: BuildListTravelsView) {}
  async handle(req: Request, res: Response) {
    try {
      const listTravelsView = await this.buildListTravelsView.run(
        req.params.ownerId,
      )
      res.status(200).send(listTravelsView)
    } catch (error) {
      return res.status(500).send({ message: 'Error' })
    }
  }
}
