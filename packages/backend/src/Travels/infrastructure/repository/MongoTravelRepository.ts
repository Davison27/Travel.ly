import { Model } from 'mongoose'

import { Activity } from '../../domain/Activity'
import { Travel } from '../../domain/Travel'
import { TravelRepository } from '../../domain/TravelRepository'
import { travelModel } from '../travelDocument'
import { travelMapper } from './travelMapper'

export class MongoTravelRepository implements TravelRepository {
  private model: Model<travelModel>

  constructor() {
    this.model = require('./travelSchema')
  }

  async findAll(): Promise<Travel[]> {
    const travels = await this.model.find({})
    if (!travels) {
      return null
    }
    return travelMapper.travelDocumentToTravels(travels)
  }

  async findById(id: string): Promise<Travel> {
    const travel = await this.model.find({ id: id })
    const travelFound = travel[0]
    return travelMapper.travelDocumentToTravel(travelFound)
  }

  async save(travel: Travel): Promise<void> {
    await new this.model(travel).save()
  }

  async delete(travel: Travel): Promise<void> {
    return await this.model.findOneAndRemove(travel)
  }

  async update(oldTravel: Travel, newTravel: Travel): Promise<void> {
    return await this.model.findOneAndReplace(oldTravel, newTravel)
  }

  async saveActivity(activity: Activity, travel: Travel): Promise<void> {
    await this.model.findOneAndUpdate(
      { id: activity.travelId },
      { $set: { activities: travel.activities } },
    )
  }

  async deleteActivity(travelId: string, activityId: string): Promise<void> {
    const travel = await this.model.find({}).then((travels: Travel[]) => {
      return travels.find((findTravel) => findTravel.id === travelId)
    })

    const activity = travel.activities.find(
      (findActivity) => findActivity.activityId === activityId,
    )

    return await this.model
      .findOneAndRemove(activity)
      .then(() => {
        console.log('Activity deleted')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // me llega un travelId y un activityId y usando el repo me traigo el trvel entero, borro el viaje y modifico el viaje entero

  async updateActivity(activity: Activity): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
