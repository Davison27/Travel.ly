export interface ListTravelsView {
  travels: TravelView[]
}

interface TravelView {
  endDate: Date
  id: string
  imageUrl?: string
  name: string
  ownerId: string
  startDate: Date
}
