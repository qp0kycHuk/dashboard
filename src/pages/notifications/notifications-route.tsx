import { createLazyComponent } from '@/shared/utils/createLazyComponent'
import type { RouteObject } from 'react-router'

export const notificationsRoute: RouteObject = {
  path: "/notifications/",
  Component: createLazyComponent(() => import('./notifications-page'))
}
