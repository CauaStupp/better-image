import { Card, Heading, Image, SimpleGrid, Stack } from '@chakra-ui/react'

export function Galery() {
  const array = [1, 2, 3, 4, 5, 6]

  return (
    <Stack
      mt="10"
      gap="4"
      animationName="fade-in, slide-from-bottom"
      animationDuration="0.4s"
    >
      <Heading as="h2" fontSize="3xl">
        Galeria
      </Heading>
      <SimpleGrid columns={3} gap="2" p="2" bg="bg.subtle" rounded="md">
        {array.map((item) => (
          <Card.Root maxW="sm" overflow="hidden" key={item}>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2">
              <Card.Title>Postado em 202{item}</Card.Title>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Stack>
  )
}
