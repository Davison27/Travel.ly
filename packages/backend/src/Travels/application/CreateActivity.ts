import { Activity } from '../domain/Activity'
import { TravelRepository } from '../domain/TravelRepository'
import { CreateActivityDTO } from './DTOs/UseCasesDTO/CreateActivityDTO '

export class CreateActivity {
  constructor(private travelRepository: TravelRepository) {}

  async run(createActivityDTO: CreateActivityDTO): Promise<void> {
    const travel = await this.travelRepository.findById(
      createActivityDTO.travelId,
    )
    if (!travel) {
      return null
    }
    const activity = new Activity(
      createActivityDTO.travelId,
      createActivityDTO.activityId,
      createActivityDTO.name,
      createActivityDTO.startDate,
      createActivityDTO.endDate,
      createActivityDTO.category,
      createActivityDTO.imageUrl,
      createActivityDTO.price,
      createActivityDTO.documentUrls,
      createActivityDTO.description,
      createActivityDTO.location,
      createActivityDTO.rooms,
      createActivityDTO.transportType,
    )
    travel.activities.push(activity)
    await this.travelRepository.saveActivity(activity, travel)
  }
}
