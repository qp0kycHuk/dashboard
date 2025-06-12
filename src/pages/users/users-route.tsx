import { createLazyComponent } from '@/shared/utils/createLazyComponent'
import type { RouteObject } from 'react-router'

export const usersRoute: RouteObject = {
  path: "/users/",
  Component: createLazyComponent(() => import('./users-page'))
}