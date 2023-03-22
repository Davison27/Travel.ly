import { User } from '../domain/User'
import { UserRepository } from '../domain/UserRepository'

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async run(userData: {
    fullName: string
    id: string
    profileImageUrl: string
  }): Promise<void> {
    const user = new User(
      userData.id,
      userData.fullName,
      userData.profileImageUrl,
    )
    await this.userRepository.save(user)
  }
}
