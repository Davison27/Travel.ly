import { Model } from 'mongoose'

import { Activity } from '../../domain/Activity'
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

  // async patchUpdate(id: string, patch: string): Promise<void> {
  //   const travel = await this.model.find({}).then((travels: Travel[]) => {
  //     return travels.find((findTravel) => findTravel.id === id)
  //   })

  //   return await this.model
  //     .findOneAndUpdate(travel, { $set: { patch: patch } })
  //     .then(() => {
  //       console.log('Travel updated')
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  //async saveActivity(activity: Activity): Promise<void> {
  //  const travel = await this.model.find({}).then((travels: Travel[]) => {
  //    return travels.find((findTravel) => findTravel.id === activity.travelId)
  //  })
  //
  //  travel.activities.push(activity)
  //
  //  return await this.model
  //    .findOneAndUpdate(
  //      { _id: activity.travelId },
  //      { $set: { activities: travel.activities } },
  //    )
  //    .then(() => {
  //      console.log('Activity saved')
  //    })
  //    .catch((error) => {
  //      console.log(error)
  //    })
  //}

  async saveActivity(activity: Activity): Promise<void> {
    const travel = await this.model.findOne({ id: activity.travelId })
    if (!travel) {
      throw new Error('Travel not found')
    }

    travel.activities.push(activity)

    await this.model.findOneAndUpdate(
      { id: activity.travelId },
      { $set: { activities: travel.activities } },
    )
    console.log('Activity saved')
  }

  //async deleteActivity(travelId: string, activityId: string): Promise<void> {
  //  const travel = await this.model.find({}).then((travels: Travel[]) => {
  //    return travels.find((findTravel) => findTravel.id === travelId)
  //  })
  //
  //  const activity = travel.activities.find(
  //    (findActivity) => findActivity.activityId === activityId,
  //  )
  //
  //  return await this.model
  //    .findOneAndRemove(activity)
  //    .then(() => {
  //      console.log('Activity deleted')
  //    })
  //    .catch((error) => {
  //      console.log(error)
  //    })
  //}

  async deleteActivity(travelId: string, activityId: string): Promise<void> {
    try {
      const travel = await this.model.findOne({ _id: travelId })
      if (!travel) {
        throw new Error('Travel not found')
      }

      // Find the index of the activity with the given activityId
      const activityIndex = travel.activities.findIndex(
        (activity) => activity.activityId === activityId,
      )

      if (activityIndex === -1) {
        throw new Error('Activity not found in the travel')
      }

      // Remove the activity from the activities array
      travel.activities.splice(activityIndex, 1)

      // Save the updated travel object back to the database
      await this.model.findOneAndUpdate(
        { _id: travel._id },
        { $set: { activities: travel.activities } },
      )
      console.log('Activity deleted')
    } catch (error) {
      console.log(error)
    }
  }

  async updateActivity(activity: Activity): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
