import { useQuery } from "@tanstack/react-query"
import { usersQuery } from "../../query"
import { PAGINATED_FALLBACK } from "@/features/pagination/const"
import { usePaginationParams } from "@/features/pagination/hooks"
import { UsersItem } from "./users-item"
import { PaginationButtons } from "@/features/pagination/ui/pagination-buttons"
import { Loader } from "@/shared/ui/Loader/Loader"
import { cn } from "@/shared/utils/classnames"

export function UsersList() {
  const { currentPage, paginationPayload } = usePaginationParams()
  const { data, isLoading, isFetching } = useQuery(
    usersQuery.list({ data: paginationPayload })
  )
  const { data: users, ...pagination } = data ?? PAGINATED_FALLBACK

  if (isLoading) {
    return <Loader className="my-auto py-5" />
  }

  return (
    <>
      <h1 className="text-h1 mb-6">Users</h1>

      <div
        className={cn(
          "flex flex-col gap-3 relative",
          isFetching && "opacity-50 pointer-events-none"
        )}
      >
        {users?.map((user) => (
          <UsersItem item={user} key={user.id} />
        ))}
      </div>

      <PaginationButtons
        currentPage={currentPage}
        pages={pagination.pages}
        className="mt-6"
      />
    </>
  )
}
