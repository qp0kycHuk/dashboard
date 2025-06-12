import { env, EnvKey } from "@/shared/utils/env"
import axios, { AxiosRequestConfig } from "axios"
import { User } from "./types"
import { Paginated, PaginatedPayload } from "@/features/pagination/types"

const USERS_API_URL = env(EnvKey.API_ROOT_URL) + "users/"

// TODO typing errors
export const usersApi = {
  async list({
    data = { _page: 1 },
    signal,
  }: AxiosRequestConfig<PaginatedPayload> = {}) {
    return (
      await axios.get<Paginated<User[]>>(USERS_API_URL, {
        params: data,
        signal,
      })
    ).data
  },
}
