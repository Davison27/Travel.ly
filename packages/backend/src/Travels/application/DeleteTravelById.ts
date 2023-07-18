import { TravelRepository } from '../domain/TravelRepository'

export class DeleteTravelById {
  constructor(private travelRepository: TravelRepository) {}

  async run(travelId: string) {
    await this.travelRepository.delete(travelId)
  }
}
