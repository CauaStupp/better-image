import { Provider } from '@/components/ui/provider'
import { TanStackDevtools } from '@tanstack/react-devtools'
import type { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  const verifyProd =
    (import.meta.env.PROD_OR_DEV as string) === 'development' ? false : true
  import.meta.env.NODE_ENV

  return (
    <Provider>
      {children}
      {verifyProd && <TanStackDevtools />}
    </Provider>
  )
}
