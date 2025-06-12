import { useQuery } from "@tanstack/react-query"
import { usersQuery } from "../../query"
import { Link } from "react-router"
import { cn } from "@/shared/utils/classnames"
import { PAGINATED_FALLBACK } from "@/features/pagination/const"
import { usePaginationParams } from "@/features/pagination/hooks"

export function UsersList() {
  const { currentPage, paginationPayload } = usePaginationParams()
  const { data } = useQuery(usersQuery.list({ data: paginationPayload }))
  const { data: users, ...pagination } = data ?? PAGINATED_FALLBACK

  return (
    <>
      <div className="text-2xl font-bold mb-6">Users {currentPage}</div>

      {users?.map((user) => (
        <div>
          <img
            className="size-10 object-cover rounded-full"
            src={user.profile.avatar.thumbnail}
            alt={user.profile.name + " avatar"}
          />
          {user.profile.name}
          {user.email}
          {user.state}
          {user.profile.company}
        </div>
      ))}

      <div className="flex gap-2 mt-6">
        {new Array(pagination.pages).fill(null).map((_, index) => (
          <Link
            className={cn(
              "btn btn-icon btn-primary",
              index + 1 === currentPage && "btn-fill"
            )}
            to={"?page=" + (index + 1)}
          >
            {index + 1}
          </Link>
        ))}
      </div>
    </>
  )
}
