export class Expenses {
  constructor(
    readonly budget: number,
    readonly transportPrice: number,
    readonly foodPrice: number,
    readonly accomodationPrice: number,
    readonly entertainmentPrice: number,
  ) {}
}
