import { QueryStore } from "@/shared/lib/query-store"
import { queryClient } from "@/shared/api/query-client"
import { usersQueryOptions } from "@/shared/api/tbank/users"

export const accountsStore = new QueryStore(queryClient, usersQueryOptions.GetAccounts)