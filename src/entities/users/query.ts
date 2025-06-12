import { queryOptions } from "@tanstack/react-query"
import { usersApi } from "./api"
import { PaginatedPayload } from "@/features/pagination/types"

const KEY = "users"

export const usersQuery = {
  list: ({ data }: { data?: PaginatedPayload } = {}) =>
    queryOptions({
      queryKey: [KEY, "list", data],
      queryFn: ({ signal }) => usersApi.list({ signal, data }),
    }),
}
