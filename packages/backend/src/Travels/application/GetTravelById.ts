import { TravelRepository } from '../domain/TravelRepository'

export class GetTravelById {
  constructor(private travelRepository: TravelRepository) {}

  async run(travelId: string) {
    const travel = await this.travelRepository.findById(travelId)
    return travel
  }
}
