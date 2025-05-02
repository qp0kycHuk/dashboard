import { operationsQueryOptions } from "@/shared/api/tbank/operations"
import { useQuery } from "@tanstack/react-query"
import { Listitem } from "./portfolio-list-item"
import { Loader } from "@/shared/ui/Loader/Loader"

type Props = {
  accountId: string | undefined
}

export const PortfolioList = ({ accountId }: Props) => {
  const { data, isPending } = useQuery(
    operationsQueryOptions.GetPortfolio({ accountId })
  )

  return (
    <div className="flex flex-col gap-3">
      <div className="p-2 bg-default/5 grid grid-cols-7">
        <div>figi</div>
        <div>Тип инструмента </div>
        <div>Количество </div>
        <div>Средняя </div>
        <div>Текущая </div>
        <div>Прибыль </div>
        <div>За день </div>
      </div>
      {isPending && <Loader className="my-20" />}
      {data?.positions.map((pos) => (
        <Listitem key={pos.figi} position={pos} />
      ))}
    </div>
  )
}
