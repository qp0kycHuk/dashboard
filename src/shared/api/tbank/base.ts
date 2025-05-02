import axios from "axios"
import { env } from "@/shared/lib/env"
// import { TinkoffInvestApi } from "tinkoff-invest-api"

export const root = axios.create({
  baseURL: env("VITE_TBANK_API_URL"),
  headers: {
    Authorization: env("VITE_TBANK_API_TOKEN"),
  },
})

// TODO remove
// export const tinkoffInvestApi = new TinkoffInvestApi({ token: env("VITE_TBANK_API_TOKEN") })
