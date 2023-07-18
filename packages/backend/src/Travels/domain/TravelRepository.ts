import { Travel } from './Travel'

export interface TravelRepository {
  findAll(): Promise<Travel[]>
  findById(id: string): Promise<Travel>
  save(travel: Travel): Promise<void>
}
