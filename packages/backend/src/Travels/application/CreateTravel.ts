import { Expenses } from '../domain/Expenses'
import { Notifier } from '../domain/Notifier'
import { Travel } from '../domain/Travel'
import { TravelRepository } from '../domain/TravelRepository'
import { CreateTravelDTO } from './DTOs/UseCasesDTO/CreateTravelDTO'

export class CreateTravel {
  constructor(
    private travelRepository: TravelRepository,
    private notifier: Notifier,
  ) {}

  async run(createTravelDTO: CreateTravelDTO): Promise<void> {
    if (createTravelDTO.imageUrl === '') {
      createTravelDTO.imageUrl =
        'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/07/31141652/vacaciones-1920-1.jpg'
    } else {
      createTravelDTO.imageUrl
    }
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
      createTravelDTO.imageUrl,
    )
    await this.travelRepository.save(travel)
    await this.notifier.createTravelNotification(travel)
  }
}
