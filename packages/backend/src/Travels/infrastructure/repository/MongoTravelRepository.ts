import { Model } from 'mongoose'

import { Activity } from '../../domain/Activity'
import { Travel } from '../../domain/Travel'
import { TravelRepository } from '../../domain/TravelRepository'
import { TravelDocument } from '../TravelDocument'
import { TravelMapper } from './TravelMapper'

export class MongoTravelRepository implements TravelRepository {
  private model: Model<TravelDocument>

  constructor() {
    this.model = require('./TravelSchema')
  }

  async findAll(ownerId: string): Promise<Travel[]> {
    const travels = await this.model.find({ ownerId: ownerId })
    if (!travels) {
      return null
    }
    return TravelMapper.travelDocumentToTravels(travels)
  }

  async findById(id: string): Promise<Travel> {
    const travel = await this.model.find({ id: id })
    const travelFound = travel[0]
    return TravelMapper.travelDocumentToTravel(travelFound)
  }

  async save(travel: Travel): Promise<void> {
    await this.model.create(TravelMapper.travelToTravelDocument(travel))
  }

  async delete(travel: Travel): Promise<void> {
    await this.model.deleteOne({ id: travel.id })
  }

  async update(oldTravel: Travel, newTravel: Travel): Promise<void> {
    await this.model.updateOne(
      { id: newTravel.id },
      { $set: TravelMapper.travelToTravelDocument(newTravel) },
    )
  }

  async saveActivity(activity: Activity, travel: Travel): Promise<void> {
    await this.model.findOneAndUpdate(
      { id: activity.travelId },
      { $set: { activities: travel.activities } },
    )
  }

  async deleteActivity(
    activities: Activity[],
    travelId: string,
  ): Promise<void> {
    await this.model.findOneAndUpdate(
      { id: travelId },
      { $set: { activities: activities } },
    )
  }

  async updateActivity(
    activities: Activity[],
    travelId: string,
  ): Promise<void> {
    await this.model.findOneAndUpdate(
      { id: travelId },
      { $set: { activities: activities } },
    )
  }
}
