import { Outlet } from "react-router"
import { Header } from "../Header/Header"
import { Sidebar } from "@/features/sidebar"

export function Layout() {
  return (
    <div className="flex min-h-screen p-layout gap-layout">
      <Sidebar />
      <div className="flex flex-col flex-1 gap-layout">
        <Header />
        <div className="flex-1 p-container py-4 flex flex-col">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
