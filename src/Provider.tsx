import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/shared/api/query-client"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export function Provider({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
