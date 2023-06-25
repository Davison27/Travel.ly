export interface CreateTravelDTO {
  budget: number
  description: string
  endDate: Date
  id: string
  imageUrl?: string
  name: string
  ownerId: string
  startDate: Date
  travelers: number
}
