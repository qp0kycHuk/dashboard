import { Link, useLocation } from "react-router"
import { cn } from "@/shared/utils/classnames"

type Props = PropsWithClassName & {
  pages: number
  currentPage: number
}

export function PaginationButtons({ className, pages, currentPage }: Props) {
  const { search } = useLocation()

  const generateLink = (page: number) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', page.toString())
    return searchParams.toString()
  }

  return (
    <div className={cn("flex gap-2", className)}>
      {new Array(pages).fill(null).map((_, index) => (
        <Link
          key={index}
          className={cn(
            "btn btn-icon btn-primary",
            index + 1 === currentPage && "btn-fill"
          )}
          to={{
            search: generateLink(index + 1),
          }}
        >
          {index + 1}
        </Link>
      ))}
    </div>
  )
}