import { Document } from 'mongoose'

import { ActivityDTO } from '../application/DTOs/ActivityDTO'
import { ExpensesDTO } from '../application/DTOs/ExpensesDTO'

export interface travelModel extends Document {
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
