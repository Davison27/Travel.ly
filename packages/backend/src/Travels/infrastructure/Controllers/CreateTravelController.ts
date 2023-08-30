import { Request, Response } from 'express'

import { CreateTravel } from '../../application/CreateTravel'
import { CreateTravelDTO } from '../../application/DTOs/UseCasesDTO/CreateTravelDTO'
import { transporter } from '../Repository/NodemailerTravelRepository'

export class CreateTravelController {
  constructor(private useCase: CreateTravel) {}

  async handle(req: Request<unknown, unknown, CreateTravelDTO>, res: Response) {
    const travelData = req.body
    try {
      await this.useCase.run(travelData)
    } catch (error) {
      return res.status(500).send({ message: 'Error' })
    }
    await transporter.sendMail({
      from: '"Travel.ly ✈️" <travelly@noreply.com>',
      html: `<h1>¡Hola, David!</h1>
      <p>¡Has creado un nuevo viaje!</p>
      <p>Nombre del viaje: ${travelData.name}</p>
      <p>Fecha de inicio: ${travelData.startDate}</p>
      <p>Fecha de fin: ${travelData.endDate}</p>
      <p>Descripción: ${travelData.description}</p>
      <p>Presupuesto: ${travelData.budget}</p>
      <p>Viajeros: ${travelData.travelers}</p>
      <p>¡Que disfrutes de tu viaje!</p>
      <img src="https://thumbs.gfycat.com/MadAmpleAdeliepenguin-size_restricted.gif"></img>`,
      subject: '😁 ¡Has creado un nuevo viaje! 😁',
      to: process.env.CLIENT_SENDER_NODEMAILER,
    })
    res.status(201).send({ message: 'Created' })
  }
}
