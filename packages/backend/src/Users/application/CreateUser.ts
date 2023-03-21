import { User } from '../domain/User'
import { UserRepository } from '../domain/UserRepository'

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async run(userData: {
    endDate: Date
    id: string
    name: string
    ownerId: string
    startDate: Date
  }): Promise<void> {
    const user = new User(
      userData.id,
      userData.name,
      userData.ownerId,
      userData.startDate,
      userData.endDate,
    )
    await this.userRepository.save(user)
  }
}
