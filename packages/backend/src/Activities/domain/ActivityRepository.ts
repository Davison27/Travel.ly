import { Activity } from './Activity'

export interface ActivityRepository {
  save(activity: Activity): Promise<void>
}
