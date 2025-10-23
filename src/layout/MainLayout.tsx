import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@chakra-ui/react'
import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export function MainLayout() {
  return (
    <>
      <Header />
      <Container maxW="1000px" as="main" minH="75vh">
        <Outlet />
        <TanStackRouterDevtools />
      </Container>
      <Footer />
    </>
  )
}
