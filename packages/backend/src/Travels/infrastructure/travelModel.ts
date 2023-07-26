import { Document } from 'mongoose'

import { Activity } from '../domain/Activity'
import { Expenses } from '../domain/Expenses'

export interface travelModel extends Document {
  activities: Activity[]
  description?: string
  endDate: Date
  expenses: Expenses
  id: string
  imageUrl?: string
  name: string
  ownerId: string
  shared?: boolean
  startDate: Date
  travelers?: number
}
