import { Activity } from './Activity'
import { Expenses } from './Expenses'

export interface Travel {
  activities: Activity[]
  description: string
  endDate: Date
  expenses: Expenses
  id: string
  image: string
  imageUrl: string
  name: string
  shared: boolean
  startDate: Date
  travelers: number
}
