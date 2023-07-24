import { Travel } from '../domain/Travel'
import { TravelRepository } from '../domain/TravelRepository'

export class UpdateTravel {
  constructor(private travelRepository: TravelRepository) {}

  async run(travelId: string, travel: Travel): Promise<void> {
    const updateTravel = new Travel(
      travelId,
      travel.name,
      travel.ownerId,
      travel.startDate,
      travel.endDate,
      travel.activities,
      travel.expenses,
      travel.description,
      travel.shared,
      travel.travelers,
      travel.imageUrl,
    )

    await this.travelRepository.update(updateTravel)
  }
}
