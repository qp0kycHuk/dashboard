import { QueryStore } from "@/app/query"
import { routerStore } from "@/app/router"
import { portfolioQueryOptions } from "@/entities/portfolio/api/query-options"
import { observer, useLocalObservable } from "mobx-react-lite"

class PageStore {
  readonly portfolioQuery = new QueryStore(() =>
    portfolioQueryOptions.fetchById(routerStore.params?.id)
  )
}

function PortfolioPageUi() {
  const pageStore = useLocalObservable(() => new PageStore())
  const { data, status } = pageStore.portfolioQuery

  return (
    <section className="py-10">
      {status}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  )
}

export const PortfolioPage = observer(PortfolioPageUi)
