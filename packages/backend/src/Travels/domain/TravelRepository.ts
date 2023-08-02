import { Activity } from './Activity'
import { Travel } from './Travel'

export interface TravelRepository {
  delete(travelId: string): Promise<void>
  deleteActivity(travelId: string, activityId: string): Promise<void>
  findAll(): Promise<Travel[]>
  findById(id: string): Promise<Travel>
  save(travel: Travel): Promise<void>
  saveActivity(activity: Activity): Promise<void>
  update(travel: Travel): Promise<void>
  updateActivity(activity: Activity): Promise<void>
}
