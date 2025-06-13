import { Paginated } from "./types"

export const PAGINATED_FALLBACK: Paginated<never[]> = {
  data: [],
  first: 1,
  items: 0,
  last: 1,
  next: null,
  pages: 1,
  prev: null,
}

export const PAGINATED_PAYLOAD_FALLBACK = { _page: 1 }
