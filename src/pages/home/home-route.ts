import { createLazyComponent } from '@/shared/utils/createLazyComponent'
import type { RouteObject } from 'react-router'

export const homeRoute: RouteObject = {
  path: "/",
  Component: createLazyComponent(() => import('./home-page'))
}