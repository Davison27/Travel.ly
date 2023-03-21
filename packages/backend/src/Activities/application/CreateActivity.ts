import { Activity } from '../domain/Activity'
import { ActivityRepository } from '../domain/ActivityRepository'

export class CreateActivity {
  constructor(private activityRepository: ActivityRepository) {}

  async run(activityData: {
    endDate: Date
    id: string
    name: string
    ownerId: string
    startDate: Date
  }): Promise<void> {
    const activity = new Activity(
      activityData.id,
      activityData.name,
      activityData.ownerId,
      activityData.startDate,
      activityData.endDate,
    )
    await this.activityRepository.save(activity)
  }
}
