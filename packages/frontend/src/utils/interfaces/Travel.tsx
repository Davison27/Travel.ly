import { Activities } from './Activities'
import { Expenses } from './Expenses'

export interface Travel {
  activities: Activities[]
  description: string
  endDate: string
  expenses: Expenses
  id: string
  image: string
  imageUrl: string
  name: string
  shared: boolean
  startDate: string
  travelers: number
}
