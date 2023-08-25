import { Request, Response } from 'express'

import { DeleteTravelById } from '../../application/DeleteTravelById'
import { transporter } from '../repository/NodemailerTravelRepository'

export class DeleteTravelByIdController {
  constructor(private travel: DeleteTravelById) {}
  async handle(req: Request, res: Response) {
    try {
      await this.travel.run(req.params.id)
      await transporter.sendMail({
        from: '"Travel.ly ✈️" <travelly@noreply.com>',
        html: `<h1>¡Hola David!</h1>
        <p>¡Has eliminado un viaje!</p>
        <img src="https://i.gifer.com/jY.gif"></img>`,
        subject: '😢 ¡Has eliminado un viaje! 😢 ',
        to: process.env.CLIENT_SENDER_NODEMAILER,
      })
      res.status(201).send({ message: 'Deleted' })
    } catch (error) {
      return res.status(500).send({ message: 'Error' })
    }
  }
}
