import { IUser } from './IUser'

export interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: IUser
  error: string | null
}
