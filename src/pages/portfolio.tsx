import { routerStore } from "@/app/router/router"
import { portfolioQueryOptions } from "@/entities/portfolio/api/query-options"
import { queryClient } from "@/shared/api/query-client"
import { QueryStore } from "@/shared/lib/query-store"
import { observer } from "mobx-react-lite"

class PageStore {
  portfolio = new QueryStore(queryClient, () =>
    portfolioQueryOptions.fetchById(routerStore.params?.id)
  )
}

const pageStore = new PageStore()

function PortfolioPageUi() {
  const { data, status } = pageStore.portfolio.query

  return (
    <section className="py-10">
      {status}
      {routerStore.params.id}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  )
}

export const PortfolioPage = observer(PortfolioPageUi)
