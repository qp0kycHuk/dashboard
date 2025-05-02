import { queryOptions } from "@tanstack/react-query"
import { root } from "./base"
import type {
  OperationsRequest,
  OperationsResponse,
  PortfolioRequest,
  PortfolioResponse,
  PositionsRequest,
  PositionsResponse,
} from "tinkoff-invest-api/cjs/generated/operations"

const ENDPOINT = "tinkoff.public.invest.api.contract.v1.OperationsService/"

export const operations = {
  async GetPortfolio(payload: PortfolioRequest) {
    return (
      await root.post<PortfolioResponse>(ENDPOINT + "GetPortfolio", payload)
    ).data
  },
  async GetPositions(payload: PositionsRequest) {
    return (
      await root.post<PositionsResponse>(ENDPOINT + "GetPositions", payload)
    ).data
  },
  async GetOperations(payload: OperationsRequest) {
    return (
      await root.post<OperationsResponse>(ENDPOINT + "GetOperations", payload)
    ).data
  },
}

export const operationsQueryOptions = {
  GetPortfolio: (payload: Partial<PortfolioRequest>) =>
    queryOptions({
      queryKey: ["operations", "Portfolio", payload],
      enabled: !!payload.accountId,
      queryFn: () => operations.GetPortfolio(payload as PortfolioRequest),
    }),
  GetPositions: (payload: Partial<PositionsRequest>) =>
    queryOptions({
      queryKey: ["operations", "Positions", payload],
      enabled: !!payload.accountId,
      queryFn: () => operations.GetPositions(payload as PositionsRequest),
    }),
  GetOperations: (payload: Partial<OperationsRequest>) =>
    queryOptions({
      queryKey: ["operations", "Operations", payload],
      enabled: !!payload.accountId,
      queryFn: () => operations.GetOperations(payload as OperationsRequest),
    }),
}
