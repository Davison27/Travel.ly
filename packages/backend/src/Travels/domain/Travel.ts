export class Travel {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly ownerId: string,
    readonly startDate: Date,
    readonly endDate: Date,
    readonly description?: string,
    readonly shared?: boolean,
    readonly travelers?: number,
    readonly expenses?: number,
  ) {}
}
