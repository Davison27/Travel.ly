import { User } from '../domain/User'
import { UserRepository } from '../domain/UserRepository'
import { CreateUserDTO } from './CreateUserDTO'

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async run(createUserDTO: CreateUserDTO): Promise<void> {
    const user = new User(
      createUserDTO.id,
      createUserDTO.fullName,
      createUserDTO.profileImageUrl,
    )
    await this.userRepository.save(user)
  }
}
