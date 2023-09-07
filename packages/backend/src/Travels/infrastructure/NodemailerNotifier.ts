import nodemailer, { Transporter } from 'nodemailer'

import { Notifier } from '../domain/Notifier'
import { Travel } from '../domain/Travel'

export class NodemailerNotifier implements Notifier {
  private transporter: Transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      auth: {
        pass: process.env.SECRET_NODEMAILER,
        user: process.env.CLIENT_NODEMAILER,
      },
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
    })
    this.transporter.verify((error, success) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Server is ready to take our messages', success)
      }
    })
  }

  async createTravelNotification(travel: Travel) {
    await this.transporter.sendMail({
      from: '"Travel.ly ✈️" <travelly@noreply.com>',
      html: `<h1>¡Hola, David!</h1>
        <p>¡Has creado un nuevo viaje!</p>
        <p>Nombre del viaje: ${travel.name}</p>
        <p>Fecha de inicio: ${travel.startDate}</p>
        <p>Fecha de fin: ${travel.endDate}</p>
        <p>Descripción: ${travel.description}</p>
        <p>Presupuesto: ${travel.expenses.budget}</p>
        <p>Viajeros: ${travel.travelers}</p>
        <p>¡Que disfrutes de tu viaje!</p>
        <img src="https://thumbs.gfycat.com/MadAmpleAdeliepenguin-size_restricted.gif"></img>`,
      subject: '😁 ¡Has creado un nuevo viaje! 😁',
      to: process.env.CLIENT_SENDER_NODEMAILER,
    })
  }

  async deleteTravelNotification() {
    await this.transporter.sendMail({
      from: '"Travel.ly ✈️" <travelly@noreply.com>',
      html: `<h1>¡Hola David!</h1>
        <p>¡Has eliminado un viaje!</p>
        <img src="https://i.gifer.com/jY.gif"></img>`,
      subject: '😢 ¡Has eliminado un viaje! 😢 ',
      to: process.env.CLIENT_SENDER_NODEMAILER,
    })
  }

  async updateTravelNotification(travel: Travel) {
    await this.transporter.sendMail({
      from: '"Travel.ly ✈️" <travelly@noreply.com>',
      html: `<h1>¡Hola David!</h1>
        <p>¡Has modificado un viaje! Estos son los nuevos datos:</p>
        <p>Nombre del viaje: ${travel.name}</p>
        <p>Fecha de inicio: ${travel.startDate}</p>
        <p>Fecha de fin: ${travel.endDate}</p>
        <p>Descripción: ${travel.description}</p>
        <p>Presupuesto: ${travel.expenses.budget}</p>
        <p>Viajeros: ${travel.travelers}</p>
        <p>¡Que disfrutes de tu viaje!</p>
        <img src="https://media.tenor.com/YTbOntGKfrcAAAAC/mickey-buen-viaje.gif"></img>`,
      subject: '🫣 ¡Has modificado un viaje! 🫣 ',
      to: process.env.CLIENT_SENDER_NODEMAILER,
    })
  }
}
