import { observer } from "mobx-react-lite"
import { accountsStore } from "../api/AccountsStore"
import { Link } from "@tanstack/react-router"

function NavigationUi() {
  const { data, isPending } = accountsStore.query

  if (isPending) return 'Loading...'

  return (
    <div className="flex gap-2">
      {data?.accounts.map((account) => (
        <Link
          to="/portfolio/$id"
          params={{ id: account.id }}
          key={account.id}
          className="btn btn-primary"
        >
          {account.name}
        </Link>
      ))}
    </div>
  )
}

export const Navigation = observer(NavigationUi)