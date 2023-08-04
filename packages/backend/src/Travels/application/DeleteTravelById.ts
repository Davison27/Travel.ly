import { TravelRepository } from '../domain/TravelRepository'

export class DeleteTravelById {
  constructor(private travelRepository: TravelRepository) {}

  async run(travelId: string) {
    const travel = await this.travelRepository.findById(travelId)
    await this.travelRepository.delete(travel)
  }
}
