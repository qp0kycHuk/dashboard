import type {
  MoneyValue,
  Quotation,
} from "tinkoff-invest-api/cjs/generated/common"

export function toNumber<T extends Quotation | MoneyValue | undefined>(value: T) {
  return (
    value ? +value.units + +value.nano / 1000000000 : value
  ) as T extends undefined ? undefined : number
}
