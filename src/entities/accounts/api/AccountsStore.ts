import { QueryStore } from "@/shared/lib/query-store"
import { queryClient } from "@/shared/api/query-client"
import { accountsQueryOptions } from "./query-options"

export const accountsStore = new QueryStore(queryClient, accountsQueryOptions.fetch)