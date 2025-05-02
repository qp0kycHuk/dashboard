import { IndexPage } from "@/pages"
import { AboutPage } from "@/pages/about"
import { InfoPage } from "@/pages/info"
import { PortfolioPage } from "@/pages/portfolio"
import {
  aboutRoute,
  homeRoute,
  infoRoute,
  portfolioRoute,
  rootRoute,
} from "./routerTree"
import { Layout } from "@/shared/ui/Layout/Layout"

rootRoute.update({ component: Layout })
homeRoute.update({ component: IndexPage })
portfolioRoute.update({ component: PortfolioPage })
infoRoute.update({ component: InfoPage })
aboutRoute.update({ component: AboutPage })

export function initRoutes() {}
