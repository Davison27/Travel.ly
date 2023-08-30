import { TravelRepository } from '../domain/TravelRepository'

export class DeleteActivityById {
  constructor(private travelRepository: TravelRepository) {}

  async run(travelId: string, activityId: string): Promise<void> {
    const travel = await this.travelRepository.findById(travelId)
    if (!travel) {
      return null
    }
    travel.activities = travel.activities.filter(
      (activity) => activity.activityId !== activityId,
    )
    await this.travelRepository.deleteActivity(travel.activities, travelId)
  }
}
