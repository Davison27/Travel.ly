import { TravelRepository } from '../domain/TravelRepository'

export class GetTravelById {
  constructor(private travelRepository: TravelRepository) {}

  async run(travelId: string) {
    const travel = await this.travelRepository.findById(travelId)
    if (!travel) {
      console.log('No travel found')
      return null
    }
    return travel
  }
}
