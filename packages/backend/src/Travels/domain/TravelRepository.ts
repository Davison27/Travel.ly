import { Travel } from './Travel'

export interface TravelRepository {
  delete(id: string): Promise<void>
  findAll(): Promise<Travel[]>
  findById(id: string): Promise<Travel>
  save(travel: Travel): Promise<void>
}
