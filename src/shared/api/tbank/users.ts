import { queryOptions } from "@tanstack/react-query"
import { root } from "./base"
import type { GetAccountsResponse } from "tinkoff-invest-api/cjs/generated/users"

const ENDPOINT = "tinkoff.public.invest.api.contract.v1.UsersService/"

const ACCOUNT_STATUS_UNSPECIFIED = {
  status: "ACCOUNT_STATUS_UNSPECIFIED",
}

export const users = {
  async GetAccounts() {
    return (
      await root.post<GetAccountsResponse>(
        ENDPOINT + "GetAccounts",
        ACCOUNT_STATUS_UNSPECIFIED
      )
    ).data
  },
}

export const usersQueryOptions = {
  GetAccounts: () =>
    queryOptions({
      queryKey: ["users", "Accounts"],
      queryFn: () => users.GetAccounts(),
    }),
}
