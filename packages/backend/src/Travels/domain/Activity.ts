export class Activity {
  constructor(
    readonly name: string,
    readonly startDate: Date,
    readonly endDate: Date,
    readonly category: string,
    readonly price?: boolean,
    readonly documentUrls?: string,
    readonly description?: string,
    readonly location?: string,
    readonly rooms?: number,
    readonly transportType?: string,
  ) {}
}
