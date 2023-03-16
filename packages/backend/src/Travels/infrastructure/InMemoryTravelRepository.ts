import { Travel } from '../domain/Travel';
import { TravelRepository } from '../domain/TravelRepository';

export class InMemoryTravelRepository implements TravelRepository {
  private travels: Travel[] = [];

  async save(travel: Travel): Promise<void> {
    this.travels.push(travel);
    console.log('Travel saved', this.travels);
  }
}