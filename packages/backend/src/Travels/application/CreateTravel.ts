import { Travel } from '../domain/Travel'
import { TravelRepository } from '../domain/TravelRepository'

export class CreateTravel {
  constructor(private travelRepository: TravelRepository) {}

  async run(travelData: {
    endDate: Date
    id: string
    name: string
    ownerId: string
    startDate: Date
  }): Promise<void> {
    const travel = new Travel(
      travelData.id,
      travelData.name,
      travelData.ownerId,
      travelData.startDate,
      travelData.endDate,
    )
    await this.travelRepository.save(travel)
  }
}
