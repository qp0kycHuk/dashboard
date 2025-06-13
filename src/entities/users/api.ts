import { env, EnvKey } from "@/shared/utils/env"
import axios, { AxiosRequestConfig } from "axios"
import { User } from "./types"
import { Paginated, PaginatedPayload } from "@/features/pagination/types"
import { wait } from "@/shared/utils/wait"
import { PAGINATED_PAYLOAD_FALLBACK } from "@/features/pagination/const"

const USERS_API_URL = env(EnvKey.API_ROOT_URL) + "users/"

// TODO typing errors
export const usersApi = {
  async list({
    data = PAGINATED_PAYLOAD_FALLBACK,
    signal,
  }: AxiosRequestConfig<PaginatedPayload> = {}) {
    if (import.meta.env.DEV) await wait()

    return (
      await axios.get<Paginated<User[]>>(USERS_API_URL, {
        params: data,
        signal,
      })
    ).data
  },
}
