import { TravelDTO } from '../../application/DTOs/TravelDTO'
import { travelModel } from '../travelDocument'

export class travelMapper {
  static travelDocumentToTravels(
    travelDocument: Array<travelModel>,
  ): Array<TravelDTO> {
    return travelDocument.map((travel) => ({
      activities: travel.activities,
      description: travel.description,
      endDate: travel.endDate,
      expenses: travel.expenses,
      id: travel.id,
      imageUrl: travel.imageUrl,
      name: travel.name,
      ownerId: travel.ownerId,
      shared: travel.shared,
      startDate: travel.startDate,
      travelers: travel.travelers,
    }))
  }

  static travelDocumentToTravel(travelDocument: travelModel): TravelDTO {
    return {
      activities: travelDocument.activities,
      description: travelDocument.description,
      endDate: travelDocument.endDate,
      expenses: travelDocument.expenses,
      id: travelDocument.id,
      imageUrl: travelDocument.imageUrl,
      name: travelDocument.name,
      ownerId: travelDocument.ownerId,
      shared: travelDocument.shared,
      startDate: travelDocument.startDate,
      travelers: travelDocument.travelers,
    }
  }
}
