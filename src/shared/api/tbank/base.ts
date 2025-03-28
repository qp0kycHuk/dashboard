import axios from "axios"
import { env } from "@/shared/lib/env"

export const root = axios.create({
  baseURL: env('VITE_TBANK_API_URL'),
  headers: {
    Authorization: env('VITE_TBANK_API_TOKEN'),
  }
})

