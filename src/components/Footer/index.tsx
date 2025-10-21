import { Container, Text } from '@chakra-ui/react'

export function Footer() {
  return (
    <Container
      as="footer"
      maxW="1000px"
      h="100px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt="auto"
      color="fg.subtle"
    >
      <Text textAlign="center">Created by ミツキ for you</Text>
    </Container>
  )
}
