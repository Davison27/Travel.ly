import { TravelRepository } from '../domain/TravelRepository'

export class DeleteTravelById {
  constructor(private travelRepository: TravelRepository) {}

  async run(travelId: string) {
    const travel = await this.travelRepository.findById(travelId)
    console.log(travel)
    if (!travel) {
      console.log('No travel found')
      return null
    }
    await this.travelRepository.delete(travel)
  }
}
