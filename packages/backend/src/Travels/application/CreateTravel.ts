import { Expenses } from '../domain/Expenses'
import { Travel } from '../domain/Travel'
import { TravelRepository } from '../domain/TravelRepository'
import { CreateTravelDTO } from './CreateTravelDTO'

export class CreateTravel {
  constructor(private travelRepository: TravelRepository) {}

  async run(createTravelDTO: CreateTravelDTO): Promise<void> {
    const travel = new Travel(
      createTravelDTO.id,
      createTravelDTO.name,
      createTravelDTO.ownerId,
      createTravelDTO.startDate,
      createTravelDTO.endDate,
      [],
      new Expenses(createTravelDTO.budget, 0, 0, 0, 0),
      createTravelDTO.description,
      false,
      createTravelDTO.travelers,
    )
    await this.travelRepository.save(travel)
  }
}
