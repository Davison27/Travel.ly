export interface CreateActivityDTO {
  activityId: string
  category: string
  description?: string
  documentUrls?: string
  endDate: Date
  imageUrl: string
  location?: string
  name: string
  price?: number
  rooms?: number
  startDate: Date
  transportType?: string
  travelId: string
}
