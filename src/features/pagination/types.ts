export type Pagination = {
  first: number
  items: number // total items
  last: number // last page
  next: number | null
  pages: number // total pages
  prev: number | null
}

export type Paginated<T extends unknown[]> = {
  data: T
} & Pagination

export type PaginatedPayload = {
  _page: number
}
