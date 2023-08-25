import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  auth: {
    pass: process.env.SECRET_NODEMAILER,
    user: process.env.CLIENT_NODEMAILER,
  },
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
})

transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take our messages', success)
  }
})
