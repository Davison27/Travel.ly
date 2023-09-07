import { Travel } from './Travel'

export interface Notifier {
  createTravelNotification(travel: Travel): Promise<void>
  deleteTravelNotification(): Promise<void>
  updateTravelNotification(travel: Travel): Promise<void>
}
