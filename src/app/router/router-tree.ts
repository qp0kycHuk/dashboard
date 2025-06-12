import { Layout } from "@/shared/ui/Layout/Layout"
import { homeRoute } from "@/pages/home/home-route"
import { usersRoute } from "@/pages/users/users-route"
import { notificationsRoute } from "@/pages/notifications/notifications-route"
import { chatRoute } from "@/pages/chat/chat-route"
import { calendarRoute } from "@/pages/calendar/calendar-route"
import { settingsRoute } from "@/pages/settings/settings-route"
import { RouteObject } from "react-router"

export const routerTree: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      homeRoute,
      usersRoute,
      notificationsRoute,
      chatRoute,
      calendarRoute,
      settingsRoute,
    ]
  },
]
