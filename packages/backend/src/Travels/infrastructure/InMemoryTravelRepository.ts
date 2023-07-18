import { Travel } from '../domain/Travel'
import { TravelRepository } from '../domain/TravelRepository'

export class InMemoryTravelRepository implements TravelRepository {
  private travels: Travel[] = []

  async save(travel: Travel): Promise<void> {
    this.travels.push(travel)
  }

  async findAll(): Promise<Travel[]> {
    return this.travels
  }

  async findById(id: string): Promise<Travel> {
    return this.travels.find((travel) => travel.id === id)
  }

  async delete(id: string): Promise<void> {
    const index = this.travels.findIndex((travel) => travel.id === id)
    if (index !== -1) {
      this.travels.splice(index, 1)
    }
  }
}
