export interface ListTravelsView {
  travels: TravelView[]
}

interface TravelView {
  endDate: Date
  id: string
  name: string
  ownerId: string
  startDate: Date
}
