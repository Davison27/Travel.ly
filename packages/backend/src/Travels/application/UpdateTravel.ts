import { Notifier } from '../domain/Notifier'
import { Travel } from '../domain/Travel'
import { TravelRepository } from '../domain/TravelRepository'

export class UpdateTravel {
  constructor(
    private travelRepository: TravelRepository,
    private notifier: Notifier,
  ) {}

  async run(travelId: string, travel: Travel): Promise<void> {
    const oldTravel = await this.travelRepository.findById(travelId)
    if (!oldTravel) {
      return null
    }
    const updateTravel = new Travel(
      travelId,
      travel.name,
      travel.ownerId,
      travel.startDate,
      travel.endDate,
      oldTravel.activities,
      travel.expenses,
      travel.description,
      travel.shared,
      travel.travelers,
      travel.imageUrl,
    )

    await this.travelRepository.update(oldTravel, updateTravel)
    await this.notifier.updateTravelNotification(updateTravel)
  }
}
