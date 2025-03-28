import { IndexPage } from "@/pages"
import { AboutPage } from "@/pages/about"
import { InfoPage } from "@/pages/info"
import { PortfolioPage } from "@/pages/portfolio"
import { Layout } from "@/shared/ui/Layout/Layout"
import {
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'

const rootRoute = createRootRoute({
  component: Layout,
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexPage,
})

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "portfolio/$id",
  component: PortfolioPage,
})

const infoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/info/",
  component: InfoPage,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about/",
  component: AboutPage,
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  infoRoute,
  aboutRoute,
  portfolioRoute
])

export const router = createRouter({ routeTree })


declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}