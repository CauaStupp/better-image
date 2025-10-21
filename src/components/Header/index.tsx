import {
  Container,
  Heading,
  HStack,
  Link as ChakraLink,
  Separator,
} from '@chakra-ui/react'
import { Link } from '@tanstack/react-router'
import { ColorModeButton } from '../ui/color-mode'

export function Header() {
  return (
    <Container
      bg="bg.emphasized"
      rounded="full"
      p="16px 32px"
      border="1px solid var(--chakra-colors-border-emphasized)"
      boxShadow="sm"
      maxW="1000px"
    >
      <HStack justifyContent="space-between">
        <Heading as="h1" color="" fontWeight="bold" fontSize="xl">
          <Link to="/">Better Image</Link>
        </Heading>
        <HStack gap="4">
          <ChakraLink
            asChild
            unstyled
            color="fg.muted"
            _currentPage={{ color: 'fg' }}
          >
            <Link to="/">Home</Link>
          </ChakraLink>
          <Separator
            orientation="vertical"
            height="6"
            bg="gray.700"
            _light={{ bg: 'gray.300' }}
            w="2px"
          />
          <ChakraLink
            asChild
            unstyled
            color="fg.muted"
            _currentPage={{ color: 'fg' }}
          >
            <Link to="/galeria">Galeria</Link>
          </ChakraLink>
          <Separator
            orientation="vertical"
            height="6"
            bg="gray.700"
            _light={{ bg: 'gray.300' }}
            w="2px"
          />
          <ColorModeButton colorPalette="purple" variant="solid" />
        </HStack>
      </HStack>
    </Container>
  )
}
