import { TravelRepository } from '../domain/TravelRepository'
import { ListTravelsView } from './ListTravelsView'

export class BuildListTravelsView {
  constructor(private travelRepository: TravelRepository) {}

  async run(): Promise<ListTravelsView> {
    const travels = await this.travelRepository.findAll()
    if (!travels) {
      console.log('No travels found')
      return null
    }
    return {
      travels: travels.map((travel) => ({
        budget: travel.expenses.budget,
        description: travel.description,
        endDate: travel.endDate,
        id: travel.id,
        imageUrl: travel.imageUrl,
        name: travel.name,
        ownerId: travel.ownerId,
        startDate: travel.startDate,
        travelers: travel.travelers,
      })),
    }
  }
}
