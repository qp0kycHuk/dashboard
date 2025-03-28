import { Navigation } from "@/entities/accounts/ui/navigation"
import { ThemeToggle } from "@/entities/theme/ui/ThemeToggle/ThemeToggle"
import { Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'


export const Layout = () => {
  return (
    <>
      <header className="flex items-center justify-between gap-3 py-2 bg-l3">
        <ThemeToggle className="text-4xl" />
        <Link to="/">home</Link>
        <Link to="/info">info</Link>
        <Link to="/about">about</Link>
        <Navigation />
      </header>
      <Outlet />
      <TanStackRouterDevtools  />
    </>
  )
}
