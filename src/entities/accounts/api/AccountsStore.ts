
import { QueryStore } from "@/app/query"
import { usersQueryOptions } from "@/shared/api/tbank/users"

export const accountsStore = new QueryStore(usersQueryOptions.GetAccounts)
