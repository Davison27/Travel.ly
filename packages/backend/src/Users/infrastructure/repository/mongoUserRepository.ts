import { Request, Response } from 'express'
import { OAuth2Client } from 'google-auth-library'
import { Model } from 'mongoose'

import { User } from '../../domain/User'
import { UserRepository } from '../../domain/UserRepository'
import { userModel } from '../userModel'

export class MongoUserRepository implements UserRepository {
  private model: Model<userModel>

  constructor() {
    this.model = require('./userSchema')
  }

  async save(user: User): Promise<void> {
    throw new Error()
  }

  //async save(user: User): Promise<void> {
  //  await new this.model(user)
  //    .save()
  //    .then(() => {
  //      console.log('User saved')
  //      console.log(user)
  //    })
  //    .catch((error) => {
  //      console.log(error)
  //    })
  //}

  googleClient = new OAuth2Client({
    clientId: `${process.env.GOOGLE_CLIENT_ID}`,
  })

  authenticateUser = async (req: Request, res: Response) => {
    const { token } = req.body
    const ticket = await this.googleClient.verifyIdToken({
      audience: `${process.env.GOOGLE_CLIENT_ID}`,
      idToken: token,
    })
    const payload = ticket.getPayload()
    const user = await this.model.findOne({ email: payload?.email })
    if (!user) {
      const newUser = await new this.model({
        email: payload?.email,
        name: payload?.name,
        profileImageUrl: payload?.picture,
      })
      await newUser.save()
    }

    res.json({ token, user })
  }
}
