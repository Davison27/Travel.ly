export class User {
  constructor(
    readonly ownerId: string,
    readonly email: string,
    readonly fullName: string,
    readonly profileImageUrl?: string,
  ) {}
}
