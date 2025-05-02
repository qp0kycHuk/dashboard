import { routerStore } from "@/app/router/router"
import { PortfolioList } from "@/entities/portfolio/portfolio-list"
import { observer } from "mobx-react-lite"

function PortfolioPageUi() {
  return (
    <section className="py-10">
      <PortfolioList accountId={routerStore.params.accountId} />
    </section>
  )
}

export const PortfolioPage = observer(PortfolioPageUi)
