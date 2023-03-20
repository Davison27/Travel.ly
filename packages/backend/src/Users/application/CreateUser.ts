import { UserRepository } from "../domain/UserRepository";
import { User } from "../domain/User";


export class CreateUser {
  constructor(private userRepository: UserRepository) { }

  async run(userData: { id: string, name: string, ownerId: string, startDate:Date, endDate:Date }): Promise<void> {
    const user = new User(
      userData.id,
      userData.name,
      userData.ownerId,
      userData.startDate,
      userData.endDate
    )
    await this.userRepository.save(user);
  }
}
