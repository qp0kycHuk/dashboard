import {
  createRoute,
  createRootRoute,
} from "@tanstack/react-router"


export const rootRoute = createRootRoute()

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
})

export const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "portfolio/$id",
})

export const infoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/info/",
})

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about/",
})

export const routeTreeType = rootRoute.addChildren([
  homeRoute,
  infoRoute,
  aboutRoute,
  portfolioRoute,
])
