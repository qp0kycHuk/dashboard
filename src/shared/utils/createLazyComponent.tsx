import { Loader } from "@/shared/ui/Loader/Loader"
import { lazy, Suspense, ComponentType, ReactNode } from "react"

export function createLazyComponent<T extends ComponentType<any>>(
  loader: () => Promise<{ default: T }>,
  fallback: ReactNode = <Loader className="my-auto py-5" />
): ComponentType<React.ComponentProps<T>> {
  const LazyComponent = lazy(async () => {
    if (import.meta.env.DEV) {
      await new Promise((r) => setTimeout(r, 500))
    }
    return loader()
  })

  return (props: React.ComponentProps<T>) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  )
}
