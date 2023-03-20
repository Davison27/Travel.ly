import { ActivityRepository } from "../domain/ActivityRepository";
import { Activity } from "../domain/Activity";


export class CreateActivity {
  constructor(private activityRepository: ActivityRepository) { }

  async run(activityData: { id: string, name: string, ownerId: string, startDate:Date, endDate:Date }): Promise<void> {
    const activity = new Activity(
      activityData.id,
      activityData.name,
      activityData.ownerId,
      activityData.startDate,
      activityData.endDate
    )
    await this.activityRepository.save(activity);
  }
}
