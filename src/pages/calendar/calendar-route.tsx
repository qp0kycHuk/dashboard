import { createLazyComponent } from '@/shared/utils/createLazyComponent'
import type { RouteObject } from 'react-router'

export const calendarRoute: RouteObject = {
  path: "/calendar/",
  Component: createLazyComponent(() => import('./calendar-page'))
}
