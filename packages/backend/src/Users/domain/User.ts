export class User {
  constructor(
    readonly id: string,
    readonly fullName: string,
    readonly profileImageUrl?: string,
  ) {}
}
