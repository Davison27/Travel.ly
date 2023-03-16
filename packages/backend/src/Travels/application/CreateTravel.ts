import { TravelRepository } from "../domain/TravelRepository";
import { Travel } from "../domain/Travel";


export class CreateTravel {
  constructor(private travelRepository: TravelRepository) { }

  async run(travelData: { id: string, name: string }): Promise<void> {
    const travel = new Travel(
      travelData.id,
      travelData.name,
    )
    await this.travelRepository.save(travel);
  }
}
