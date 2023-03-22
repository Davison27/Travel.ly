import { Activity } from '../domain/Activity'
import { ActivityRepository } from '../domain/ActivityRepository'

export class CreateActivity {
  constructor(private activityRepository: ActivityRepository) {}

  async run(activityData: {
    category: string
    description: string
    documentUrls: string
    endDate: Date
    id: string
    name: string
    price: number
    startDate: Date
    travelId: string
  }): Promise<void> {
    const activity = new Activity(
      activityData.id,
      activityData.name,
      activityData.travelId,
      activityData.startDate,
      activityData.endDate,
      activityData.category,
      activityData.price,
      activityData.documentUrls,
      activityData.description,
    )
    await this.activityRepository.save(activity)
  }
}
