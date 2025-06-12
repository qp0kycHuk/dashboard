import { createLazyComponent } from '@/shared/utils/createLazyComponent'
import type { RouteObject } from 'react-router'

export const settingsRoute: RouteObject = {
  path: "/settings/",
  Component: createLazyComponent(() => import('./settings-page'))
}
