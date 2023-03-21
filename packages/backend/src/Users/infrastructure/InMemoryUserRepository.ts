import { User } from '../domain/User'
import { UserRepository } from '../domain/UserRepository'

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = []

  async save(user: User): Promise<void> {
    this.users.push(user)
    console.log('User saved', this.users)
  }
}
