import { Activity } from '../domain/Activity'
import { ActivityRepository } from '../domain/ActivityRepository'

export class InMemoryActivityRepository implements ActivityRepository {
  private activities: Activity[] = []

  async save(activity: Activity): Promise<void> {
    this.activities.push(activity)
    console.log('Activity saved', this.activities)
  }
}
