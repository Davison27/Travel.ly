import { TravelRepository } from '../domain/TravelRepository'

export class DeleteActivityById {
  constructor(private travelRepository: TravelRepository) {}

  async run(travelId: string, activityId: string) {
    await this.travelRepository.deleteActivity(travelId, activityId)
  }
}
