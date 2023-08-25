import { Request, Response } from 'express'

import { UpdateTravel } from '../../application/UpdateTravel'
import { transporter } from '../repository/NodemailerTravelRepository'

export class UpdateTravelController {
  constructor(private useCase: UpdateTravel) {}

  async handle(req: Request, res: Response) {
    try {
      await this.useCase.run(req.params.id, req.body)
    } catch (error) {
      return res.status(500).send({ message: 'Error' })
    }
    await transporter.sendMail({
      from: '"Travel.ly ✈️" <travelly@noreply.com>',
      html: `<h1>¡Hola David!</h1>
      <p>¡Has modificado un viaje! Estos son los nuevos datos:</p>
      <p>Nombre del viaje: ${req.body.name}</p>
      <p>Fecha de inicio: ${req.body.startDate}</p>
      <p>Fecha de fin: ${req.body.endDate}</p>
      <p>Descripción: ${req.body.description}</p>
      <p>Presupuesto: ${req.body.expenses.budget}</p>
      <p>Viajeros: ${req.body.travelers}</p>
      <p>¡Que disfrutes de tu viaje!</p>
      <img src="https://media.tenor.com/YTbOntGKfrcAAAAC/mickey-buen-viaje.gif"></img>`,
      subject: '🫣 ¡Has modificado un viaje! 🫣 ',
      to: process.env.CLIENT_SENDER_NODEMAILER,
    })
    res.status(201).send({ message: 'Updated' })
  }
}
