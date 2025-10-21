import {
  Button,
  FileUpload,
  Float,
  Heading,
  useFileUploadContext,
  type ConditionalValue,
} from '@chakra-ui/react'
import { useNavigate } from '@tanstack/react-router'
import { LuFileImage, LuX } from 'react-icons/lu'

interface FileUploadComponentProps {
  text: string
  size: ConditionalValue<
    'sm' | 'md' | 'lg' | 'xl' | '2xl' | '2xs' | 'xs' | undefined
  >
}

export function FileUploadList() {
  const fileUpload = useFileUploadContext()
  const navigate = useNavigate()
  const files = fileUpload.acceptedFiles
  if (files.length === 0) return null

  const handleImproveClick = () => {
    const file = files[0]
    if (!file) return

    navigate({
      to: '/melhorado',
      state: {
        imageFile: file,
      },
    })
  }

  return (
    <FileUpload.ItemGroup>
      <Heading>Preview</Heading>
      {files.map((file) => (
        <FileUpload.Item
          w="full"
          p="2"
          file={file}
          key={file.name}
          bgSize="cover"
          h="500px"
          objectFit="cover"
        >
          <FileUpload.ItemPreviewImage objectFit="contain" w="full" h="full" />
          <Float placement="top-end">
            <FileUpload.ItemDeleteTrigger boxSize="4" layerStyle="fill.solid">
              <LuX />
            </FileUpload.ItemDeleteTrigger>
          </Float>
        </FileUpload.Item>
      ))}
      <Button size="xl" colorPalette="purple" onClick={handleImproveClick}>
        Melhorar
      </Button>
    </FileUpload.ItemGroup>
  )
}

export function FileUploadComponent({ text, size }: FileUploadComponentProps) {
  return (
    <FileUpload.Root accept="image/*">
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button size={size} w="max-content">
          <LuFileImage /> {text}
        </Button>
      </FileUpload.Trigger>
      <FileUploadList />
    </FileUpload.Root>
  )
}
