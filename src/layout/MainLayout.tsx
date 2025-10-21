import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@chakra-ui/react'
import { Outlet } from '@tanstack/react-router'

export function MainLayout() {
  return (
    <>
      <Header />
      <Container maxW="1000px" as="main" minH="75vh">
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}
