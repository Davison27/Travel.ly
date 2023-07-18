import { TravelRepository } from '../domain/TravelRepository'
import { ListTravelsView } from './ListTravelView'

export class BuildListTravelsView {
  constructor(private travelRepository: TravelRepository) {}

  async run(): Promise<ListTravelsView> {
    const travels = await this.travelRepository.findAll()
    return {
      travels: travels.map((travel) => ({
        description: travel.description,
        endDate: travel.endDate,
        id: travel.id,
        imageUrl: travel.imageUrl,
        name: travel.name,
        ownerId: travel.ownerId,
        startDate: travel.startDate,
      })),
    }
  }
}
