import { ActivityDTO } from './ActivityDTO'
import { ExpensesDTO } from './ExpensesDTO'

export interface TravelDTO {
  activities: ActivityDTO[]
  description?: string
  endDate: Date
  expenses: ExpensesDTO
  id: string
  imageUrl?: string
  name: string
  ownerId: string
  shared?: boolean
  startDate: Date
  travelers?: number
}
