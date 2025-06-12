import { useSearchParams } from "react-router"
import { PaginatedPayload } from "./types"

export function usePaginationParams() {
  const [searchPagams] = useSearchParams()
  const currentPage = Number(searchPagams.get("page") ?? 1)
  const paginationPayload: PaginatedPayload = { _page: currentPage }

  return {
    currentPage,
    paginationPayload
  }
}
