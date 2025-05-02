import { toNumber } from "@/shared/api/tbank/utils"
import { YeldValue } from "@/shared/ui/YeldValue/YeldValue"
import { observer } from "mobx-react-lite"
import type { PortfolioPosition } from "tinkoff-invest-api/cjs/generated/operations"

type Props = {
  position: PortfolioPosition
}

function ListitemUi({ position }: Props) {
  return (
    <div className="p-2 bg-default/5 grid grid-cols-7">
      <div>{position.figi} </div>
      <div>{position.instrumentType} </div>
      <div>{position.quantity?.units} </div>
      <div>
        {toNumber(position.averagePositionPrice)}{" "}
        {position.averagePositionPrice?.currency}
      </div>
      <div>
        {toNumber(position.currentPrice)} {position.currentPrice?.currency}
      </div>
      <div>
        <YeldValue value={toNumber(position.expectedYield)} />{" "}
        {position.currentPrice?.currency}
      </div>
      <div>
        <YeldValue value={toNumber(position.dailyYield)} />{" "}
        {position.dailyYield?.currency}
      </div>
    </div>
  )
}

export const Listitem = observer(ListitemUi)
