import { Travel } from './Travel'

export interface TravelRepository {
  findAll(): Promise<Travel[]>
  save(travel: Travel): Promise<void>
}
