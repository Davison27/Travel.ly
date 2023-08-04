import { TravelRepository } from '../domain/TravelRepository'

export class DeleteActivityById {
  constructor(private travelRepository: TravelRepository) {}

  async run(travelId: string, activityId: string): Promise<void> {
    const travel = await this.travelRepository.findById(travelId)
    if (!travel) {
      console.log('No travel found')
      return null
    }
    travel.activities = travel.activities.filter(
      (activity) => activity.activityId !== activityId,
    )
    console.log(travel.activities)
    await this.travelRepository.deleteActivity(travel.activities, travelId)
  }
}
