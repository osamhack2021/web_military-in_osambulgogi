import { JwtPayload } from 'jsonwebtoken'

export interface AuthPayload extends JwtPayload {
  username: string
}
