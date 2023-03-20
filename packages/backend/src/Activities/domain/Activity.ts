
export class Activity {
  constructor(
    private id: string,
    private name: string, 
    private ownerId: string,
    private startDate: Date,
    private endDate: Date,
    private description?: string,
    private shared?: boolean,
    private travelers?: number,
    private expenses?: number,
  ) { }
}


