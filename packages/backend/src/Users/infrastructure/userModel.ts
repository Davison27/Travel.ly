import { Document } from 'mongoose'

export interface userModel extends Document {
  email: string
  name: string
  ownerId: string
  profileImageUrl?: string
}
