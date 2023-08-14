import { Activity } from './Activity'
import { Travel } from './Travel'

export interface TravelRepository {
  delete(travel: Travel): Promise<void>
  deleteActivity(activity: Activity[], travelId: string): Promise<void>
  findAll(ownerId: string): Promise<Travel[]>
  findById(id: string): Promise<Travel>
  save(travel: Travel): Promise<void>
  saveActivity(activity: Activity, travel: Travel): Promise<void>
  update(oldTravel: Travel, newTravel: Travel): Promise<void>
  updateActivity(activities: Activity[], travelId: string): Promise<void>
}
