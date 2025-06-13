import { useQuery } from "@tanstack/react-query"
import { usersQuery } from "../../query"
import { PAGINATED_FALLBACK } from "@/features/pagination/const"
import { usePaginationParams } from "@/features/pagination/hooks"
import { UsersItem } from "./users-item"
import { PaginationButtons } from "@/features/pagination/ui/pagination-buttons"

export function UsersList() {
  const { currentPage, paginationPayload } = usePaginationParams()
  const { data } = useQuery(usersQuery.list({ data: paginationPayload }))
  const { data: users, ...pagination } = data ?? PAGINATED_FALLBACK

  // TODO add loading states

  return (
    <>
      <div className="text-2xl font-bold mb-6">Users {currentPage}</div>

      <div className="flex flex-col gap-3">
        {users?.map((user) => <UsersItem item={user} key={user.id} />)}
      </div>

      <PaginationButtons currentPage={currentPage} pages={pagination.pages} className="mt-6" />
    </>
  )
}
