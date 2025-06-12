import { ServerImage } from "@/shared/api/types"

export type User = {
  id: UId
  email: string
  username: string
  profile: {
    avatar: ServerImage
    name: string
    company: string
    dob: string
    address: string
    location: {
      lat: number
      long: number
    }
    about: string
  }
  role: UserRole
  state: UserState
  createdAt: string
  updatedAt: string
}

export enum UserRole {
  owner = "owner",
  admin = "admin",
  member = "member",
  guest = "guest",
}

export enum UserState {
  active = "active",
  pending = "pending",
  disabled = "disabled",
}
