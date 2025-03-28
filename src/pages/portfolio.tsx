
import { router } from "@/app/router/router"
import { accountsStore } from "@/entities/accounts/api/AccountsStore"
import { portfolioQueryOptions } from "@/entities/portfolio/api/query-options"
import { queryClient } from "@/shared/api/query-client"
import { QueryStore } from "@/shared/lib/query-store"
import { RouterStore } from "@/shared/lib/router-store"
import { useParams } from "@tanstack/react-router"
import { action, observable } from "mobx"
import { observer } from "mobx-react-lite"

class PageStore {
  @observable accessor id: string | null = null
  router = new RouterStore(router)

  portfolio = new QueryStore(queryClient, () => portfolioQueryOptions.fetchById(this.router.params.id))

  @action setId(newId: string) {
    this.id = newId
  }
}

const pageStore = new PageStore()

function PortfolioPageUi() {
  const { data } = accountsStore.query
  const { status } = pageStore.portfolio.query
  const { params } = pageStore.router
 const {}= useParams()


  return (
    <section className="py-10">
      {status}
      {pageStore.id}
      <div className="flex gap-2">
        {data?.accounts.map((acc) => (
          <button key={acc.id} className="btn btn-primary btn-fill" onClick={() => pageStore.setId(acc.id)}>{acc.name}</button>
        ))}
      </div>
    </section>
  )
}

export const PortfolioPage = observer(PortfolioPageUi)