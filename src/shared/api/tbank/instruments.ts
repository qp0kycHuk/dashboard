import { queryOptions } from "@tanstack/react-query"
import { root } from "./base"
import type {
  AssetRequest,
  AssetResponse,
  BondResponse,
  Brand,
  GetBondCouponsRequest,
  GetBondCouponsResponse,
  GetBrandRequest,
  GetDividendsRequest,
  GetDividendsResponse,
  InstrumentRequest,
  InstrumentResponse,
  ShareResponse,
} from "tinkoff-invest-api/cjs/generated/instruments"

// https://tinkoff.github.io/investAPI/instruments/

const ENDPOINT = "tinkoff.public.invest.api.contract.v1.InstrumentsService/"

export const instruments = {
  async BondBy(payload: InstrumentRequest) {
    return (await root.post<BondResponse>(ENDPOINT + "BondBy", payload)).data
  },

  async GetBondCoupons(payload: GetBondCouponsRequest) {
    return (
      await root.post<GetBondCouponsResponse>(
        ENDPOINT + "GetBondCoupons",
        payload
      )
    ).data
  },

  async ShareBy(payload: InstrumentRequest) {
    return (await root.post<ShareResponse>(ENDPOINT + "ShareBy", payload)).data
  },

  async GetInstrumentBy(payload: InstrumentRequest) {
    return (
      await root.post<InstrumentResponse>(ENDPOINT + "GetInstrumentBy", payload)
    ).data
  },

  async GetDividends(payload: GetDividendsRequest) {
    return (
      await root.post<GetDividendsResponse>(ENDPOINT + "GetDividends", payload)
    ).data
  },

  async GetAssetBy(payload: AssetRequest) {
    return (await root.post<AssetResponse>(ENDPOINT + "GetAssetBy", payload))
      .data
  },

  async GetBrandBy(payload: GetBrandRequest) {
    return (await root.post<Brand>(ENDPOINT + "GetBrandBy", payload)).data
  },
}

export const instrumentsQueryOptions = {
  BondBy: (payload: InstrumentRequest) =>
    queryOptions({
      queryKey: ["instruments", "BondBy", payload],
      enabled: !!payload.id,
      queryFn: () => instruments.BondBy(payload),
    }),
  GetBondCoupons: (payload: GetBondCouponsRequest) =>
    queryOptions({
      queryKey: ["instruments", "GetBondCoupons", payload],
      enabled: !!payload.instrumentId,
      queryFn: () => instruments.GetBondCoupons(payload),
    }),
  ShareBy: (payload: InstrumentRequest) =>
    queryOptions({
      queryKey: ["instruments", "ShareBy", payload],
      enabled: !!payload.id,
      queryFn: () => instruments.ShareBy(payload),
    }),
  GetInstrumentBy: (payload: InstrumentRequest) =>
    queryOptions({
      queryKey: ["instruments", "GetInstrumentBy", payload],
      enabled: !!payload.id,
      queryFn: () => instruments.GetInstrumentBy(payload),
    }),
  GetDividends: (payload: GetDividendsRequest) =>
    queryOptions({
      queryKey: ["instruments", "GetDividends", payload],
      enabled: !!payload.instrumentId,
      queryFn: () => instruments.GetDividends(payload),
    }),
  GetAssetBy: (payload: AssetRequest) =>
    queryOptions({
      queryKey: ["instruments", "GetAssetBy", payload],
      enabled: !!payload.id,
      queryFn: () => instruments.GetAssetBy(payload),
    }),
  GetBrandBy: (payload: GetBrandRequest) =>
    queryOptions({
      queryKey: ["instruments", "GetBrandBy", payload],
      enabled: !!payload.id,
      queryFn: () => instruments.GetBrandBy(payload),
    }),
}
