import { FileUploadList } from '@/components/FileUpload'
import { Box, FileUpload, Heading, Icon, Stack } from '@chakra-ui/react'
import { LuUpload } from 'react-icons/lu'

export function Home() {
  return (
    <Stack
      mt="16"
      gap="6"
      alignItems="center"
      justifyContent="center"
      animationName="fade-in, slide-from-bottom"
      animationDuration="0.4s"
    >
      <Heading textAlign="center" fontSize="4xl" fontWeight="bold" as="h2">
        Melhore sua Imagem
      </Heading>

      <Stack w="full" justifyContent="center" alignItems="center">
        <FileUpload.Root alignItems="stretch" maxFiles={1}>
          <FileUpload.HiddenInput />
          <FileUpload.Dropzone>
            <Icon size="md" color="fg.muted">
              <LuUpload />
            </Icon>
            <FileUpload.DropzoneContent>
              <Box>Largue sua imagem aqui</Box>
              <Box color="fg.muted">.png, .jpg até 5MB</Box>
            </FileUpload.DropzoneContent>
          </FileUpload.Dropzone>
          <FileUploadList />
        </FileUpload.Root>
      </Stack>
    </Stack>
  )
}
