import { Activity } from './Activity'
import { Expenses } from './Expenses'

export class Travel {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly ownerId: string,
    readonly startDate: Date,
    readonly endDate: Date,
    public activities: Activity[],
    readonly expenses: Expenses,
    readonly description?: string,
    readonly shared?: boolean,
    readonly travelers?: number,
    readonly imageUrl?: string,
  ) {}
}
