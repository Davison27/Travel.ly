export class Activity {
  constructor(
    readonly travelId: string,
    readonly activityId: string,
    readonly name: string,
    readonly startDate: Date,
    readonly endDate: Date,
    readonly category: string,
    readonly imageUrl: string,
    readonly price?: number,
    readonly documentUrls?: string,
    readonly description?: string,
    readonly location?: string,
    readonly rooms?: number,
    readonly transportType?: string,
  ) {}
}
