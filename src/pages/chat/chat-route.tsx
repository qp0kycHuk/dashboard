import { createLazyComponent } from '@/shared/utils/createLazyComponent'
import type { RouteObject } from 'react-router'

export const chatRoute: RouteObject = {
  path: "/chat/",
  Component: createLazyComponent(() => import('./chat-page')),
}
