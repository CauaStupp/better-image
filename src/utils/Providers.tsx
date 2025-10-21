import { Provider } from '@/components/ui/provider'
import { TanStackDevtools } from '@tanstack/react-devtools'
import type { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider>
      {children}
      <TanStackDevtools />
    </Provider>
  )
}
