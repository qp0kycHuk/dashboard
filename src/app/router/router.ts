import { createRouter } from "@tanstack/react-router"
import { routeTree } from "./routerTree"
import { RouterStore } from "./router-store"

export const router = createRouter({ routeTree: routeTree })
export const routerStore = new RouterStore(router)

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}