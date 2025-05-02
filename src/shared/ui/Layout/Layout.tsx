import { Navigation } from "@/entities/accounts/ui/navigation"
import { ThemeToggle } from "@/entities/theme/ui/ThemeToggle/ThemeToggle"
import { Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { observer } from "mobx-react-lite"


export const Layout = observer(() => {
  return (
    <>
      <header className="flex items-center justify-between gap-3 py-2 bg-l3">
        <ThemeToggle className="text-4xl" />
        <Navigation />
      </header>
      <Outlet />
      <TanStackRouterDevtools  />
    </>
  )
})
