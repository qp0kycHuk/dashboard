import { createRouter } from "@tanstack/react-router"
import { routeTreeType } from "./routesTypes"
import { RouterStore } from "./router-store"

export const router = createRouter({ routeTree: routeTreeType })
export const routerStore = new RouterStore(router)

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}