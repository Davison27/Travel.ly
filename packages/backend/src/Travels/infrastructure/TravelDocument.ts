import { Document } from 'mongoose'

export interface TravelDocument extends Document {
  activities: {
    activityId: string
    category: string
    description: string
    documentUrls: string
    endDate: Date
    imageUrl: string
    location: string
    name: string
    price: number
    rooms: number
    startDate: Date
    transportType: string
    travelId: string
  }[]
  budget: number
  description?: string
  endDate: Date
  id: string
  imageUrl?: string
  name: string
  ownerId: string
  shared?: boolean
  startDate: Date
  travelers?: number
}
