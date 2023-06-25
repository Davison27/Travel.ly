import { Activities } from './Activities'
import { Expenses } from './Expenses'

export interface Travels {
  activities: Activities[]
  description: string
  endDate: string
  expenses: Expenses[]
  id: number
  image: string
  name: string
  shared: boolean
  startDate: string
  travelers: number
}
