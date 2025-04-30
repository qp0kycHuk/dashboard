import { QueryStore } from "@/app/query"
import { accountsQueryOptions } from "./query-options"

export const accountsStore = new QueryStore(accountsQueryOptions.fetch)