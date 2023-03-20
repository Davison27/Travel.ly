import { TravelRepository } from "../domain/TravelRepository";
import { Travel } from "../domain/Travel";


export class CreateTravel {
  constructor(private travelRepository: TravelRepository) { }

  async run(travelData: { id: string, name: string, ownerId: string, startDate:Date, endDate:Date }): Promise<void> {
    const travel = new Travel(
      travelData.id,
      travelData.name,
      travelData.ownerId,
      travelData.startDate,
      travelData.endDate
    )
    await this.travelRepository.save(travel);
  }
}
