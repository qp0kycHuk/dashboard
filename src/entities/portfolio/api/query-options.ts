import { OperationsService } from "@/shared/api/tbank/OperationsService"
import { queryOptions } from "@tanstack/react-query"

export const portfolioQueryOptions = {
  fetchById: (id?: string | null) => queryOptions({
    queryKey: ["portfolio", id],
    enabled: !!id,
    queryFn: () => OperationsService.GetPortfolio({ accountId: id! }),
  })
}