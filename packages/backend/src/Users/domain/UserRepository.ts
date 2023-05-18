import { User } from './User'

export interface UserRepository {
  findAll(): Promise<User[]>
  save(user: User): Promise<void>
}
