import { TravelRepository } from '../domain/TravelRepository'
import { TravelDTO } from './DTOs/TravelDTO'

export class GetTravelById {
  constructor(private travelRepository: TravelRepository) {}

  async run(travelId: string): Promise<TravelDTO> {
    const travel = await this.travelRepository.findById(travelId)
    if (!travel) {
      console.log('No travel found')
      return null
    }
    return {
      activities: travel.activities,
      description: travel.description,
      endDate: travel.endDate,
      expenses: {
        accomodationPrice: travel.expenses.accomodationPrice,
        budget: travel.expenses.budget,
        entertainmentPrice: travel.expenses.entertainmentPrice,
        foodPrice: travel.expenses.foodPrice,
        transportPrice: travel.expenses.transportPrice,
        travelers: 0,
        travelId: travel.id,
      },
      id: travel.id,
      imageUrl: travel.imageUrl,
      name: travel.name,
      ownerId: travel.ownerId,
      shared: travel.shared,
      startDate: travel.startDate,
      travelers: travel.travelers,
    }
  }
}
