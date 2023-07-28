import { Activities } from './Activities'
import { Expenses } from './Expenses'

export interface Travel {
  activities: Activities[]
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
