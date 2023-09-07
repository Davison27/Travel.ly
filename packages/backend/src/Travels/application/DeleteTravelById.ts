import { Notifier } from '../domain/Notifier'
import { TravelRepository } from '../domain/TravelRepository'

export class DeleteTravelById {
  constructor(
    private travelRepository: TravelRepository,
    private notifier: Notifier,
  ) {}

  async run(travelId: string) {
    const travel = await this.travelRepository.findById(travelId)
    if (!travel) {
      return null
    }
    await this.travelRepository.delete(travel)
    await this.notifier.deleteTravelNotification()
  }
}
