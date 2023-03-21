import { Travel } from './Travel'

export interface TravelRepository {
  save(travel: Travel): Promise<void>
}
