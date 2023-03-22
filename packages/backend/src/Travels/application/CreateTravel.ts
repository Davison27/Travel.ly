import { Travel } from '../domain/Travel'
import { TravelRepository } from '../domain/TravelRepository'

export class CreateTravel {
  constructor(private travelRepository: TravelRepository) {}

  async run(travelData: {
    description: string
    endDate: Date
    expenses: number
    id: string
    name: string
    ownerId: string
    shared: boolean
    startDate: Date
    travelers: number
  }): Promise<void> {
    const travel = new Travel(
      travelData.id,
      travelData.name,
      travelData.ownerId,
      travelData.startDate,
      travelData.endDate,
      travelData.description,
      travelData.shared,
      travelData.travelers,
      travelData.expenses,
    )
    await this.travelRepository.save(travel)
  }
}
