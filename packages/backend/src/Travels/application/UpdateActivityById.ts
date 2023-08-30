import { Activity } from '../domain/Activity'
import { TravelRepository } from '../domain/TravelRepository'

export class UpdateActivityById {
  constructor(private travelRepository: TravelRepository) {}

  async run(
    travelId: string,
    activityId: string,
    newActivity: Activity,
  ): Promise<void> {
    const travel = await this.travelRepository.findById(travelId)
    if (!travel) {
      return null
    }
    const activityUpdated = new Activity(
      travelId,
      activityId,
      newActivity.name,
      newActivity.startDate,
      newActivity.endDate,
      newActivity.category,
      newActivity.imageUrl,
      newActivity.price,
      newActivity.documentUrls,
      newActivity.description,
      newActivity.location,
      newActivity.rooms,
      newActivity.transportType,
    )
    travel.activities = travel.activities.filter(
      (activity) => activity.activityId !== activityId,
    )
    travel.activities.push(activityUpdated)
    await this.travelRepository.updateActivity(travel.activities, travelId)
  }
}
