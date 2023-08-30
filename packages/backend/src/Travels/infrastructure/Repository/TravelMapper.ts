import { Expenses } from '../../domain/Expenses'
import { Travel } from '../../domain/Travel'
import { TravelDocument } from '../TravelDocument'
import { TravelSchema } from './TravelSchema'

export class TravelMapper {
  static travelDocumentToTravels(
    travelDocument: Array<TravelDocument>,
  ): Array<Travel> {
    return travelDocument.map(this.travelDocumentToTravel)
  }

  static travelDocumentToTravel(travelDocument: TravelDocument): Travel {
    const accomodationActivities = travelDocument.activities.filter(
      (activity) => activity.category === 'Accomodation',
    )
    const entertainmentActivities = travelDocument.activities.filter(
      (activity) => activity.category === 'Entertainment',
    )
    const transportActivities = travelDocument.activities.filter(
      (activity) => activity.category === 'Transport',
    )
    const foodActivities = travelDocument.activities.filter(
      (activity) => activity.category === 'Food',
    )
    const accomodationPrice = accomodationActivities.reduce(
      (acc, activity) => acc + activity.price,
      0,
    )
    const entertainmentPrice = entertainmentActivities.reduce(
      (acc, activity) => acc + activity.price,
      0,
    )
    const transportPrice = transportActivities.reduce(
      (acc, activity) => acc + activity.price,
      0,
    )
    const foodPrice = foodActivities.reduce(
      (acc, activity) => acc + activity.price,
      0,
    )
    return new Travel(
      travelDocument.id,
      travelDocument.name,
      travelDocument.ownerId,
      travelDocument.startDate,
      travelDocument.endDate,
      travelDocument.activities,
      new Expenses(
        travelDocument.budget,
        transportPrice,
        foodPrice,
        accomodationPrice,
        entertainmentPrice,
      ),
      travelDocument.description,
      travelDocument.shared,
      travelDocument.travelers,
      travelDocument.imageUrl,
    )
  }

  static travelToTravelDocument(travel: Travel): typeof TravelSchema {
    return {
      activities: travel.activities.map((activity) => ({
        activityId: activity.activityId,
        category: activity.category,
        description: activity.description,
        documentUrls: activity.documentUrls,
        endDate: activity.endDate,
        imageUrl: activity.imageUrl,
        location: activity.location,
        name: activity.name,
        price: activity.price,
        rooms: activity.rooms,
        startDate: activity.startDate,
        transportType: activity.transportType,
        travelId: activity.travelId,
      })),
      budget: travel.expenses.budget,
      description: travel.description,
      endDate: travel.endDate,
      id: travel.id,
      imageUrl: travel.imageUrl,
      name: travel.name,
      ownerId: travel.ownerId,
      shared: travel.shared,
      startDate: travel.startDate,
      travelers: travel.travelers,
    }
  }
}
