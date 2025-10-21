import { MainLayout } from '@/layout/MainLayout'
import { Galery } from '@/pages/Galery'
import { Home } from '@/pages/Home'
import { Update } from '@/pages/Update'
import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
  interface HistoryState {
    imageFile?: File
  }
}

const rootRoute = createRootRoute({
  component: MainLayout,
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const galeryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/galeria',
  component: Galery,
})

const updateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/melhorado',
  component: Update,
})

const routeTree = rootRoute.addChildren([homeRoute, galeryRoute, updateRoute])

export const router = createRouter({
  routeTree,
})

export function AppRouter() {
  return <RouterProvider router={router} />
}
