import { Model } from 'mongoose'

import { Travel } from '../../domain/Travel'
import { TravelRepository } from '../../domain/TravelRepository'
import { travelModel } from '../travelModel'

export class MongoTravelRepository implements TravelRepository {
  private model: Model<travelModel>

  constructor() {
    this.model = require('./travelSchema')
  }

  async delete(id: string): Promise<void> {
    const travel = await this.model.find({}).then((travels: Travel[]) => {
      return travels.find((findTravel) => findTravel.id === id)
    })

    return await this.model
      .findOneAndRemove(travel)
      .then(() => {
        console.log('Travel deleted')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  async findAll(): Promise<Travel[]> {
    return await this.model
      .find({})
      .then((travels: Travel[]) => {
        return travels
      })
      .catch((error) => {
        console.log(error)
        return error
      })
  }

  async findById(id: string): Promise<Travel> {
    return await this.model
      .find({})
      .then((travels: Travel[]) => {
        return travels.find((findTravel) => findTravel.id === id)
      })
      .catch((error) => {
        console.log(error)
        return error
      })
  }

  async save(travel: Travel): Promise<void> {
    await new this.model(travel)
      .save()
      .then(() => {
        console.log('Travel saved')
        console.log(travel)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  async update(travel: Travel): Promise<void> {
    const oldTravel = await this.model.find({}).then((travels: Travel[]) => {
      return travels.find((findTravel) => findTravel === travel)
    })

    return await this.model
      .findOneAndReplace(oldTravel, travel)
      .then(() => {
        console.log('Travel updated')
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
