import { UsersService } from "@/shared/api/tbank/UsersService"
import { queryOptions } from "@tanstack/react-query"

export const accountsQueryOptions = {
  fetch: () => queryOptions({
    queryKey: ["user", "accounts"],
    queryFn: UsersService.GetAccounts,
  })
}