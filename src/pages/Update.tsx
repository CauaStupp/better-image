import {
  Button,
  DownloadTrigger,
  FormatByte,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useRouterState } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { LuDownload } from 'react-icons/lu'

export function Update() {
  const state = useRouterState({ select: (s) => s.location.state })
  const imageFile = state.imageFile

  const [enhancedImage, setEnhancedImage] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!imageFile || !canvasRef.current) return

    const objectUrl = URL.createObjectURL(imageFile)
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const image = new window.Image()
    image.crossOrigin = 'anonymous'
    image.src = objectUrl

    image.onload = () => {
      canvas.width = image.naturalWidth
      canvas.height = image.naturalHeight

      ctx.filter = `
        brightness(1.1)
        contrast(1.1)
        saturate(1.2)
      `
      // Para um pouco mais de nitidez (efeito sutil)
      // ctx.filter += ' drop-shadow(0 0 0.5px rgba(0,0,0,0.5))'
      ctx.drawImage(image, 0, 0)

      const dataUrl = canvas.toDataURL('image/png')
      setEnhancedImage(dataUrl)
    }

    image.onerror = () => {
      console.error('Erro ao carregar a imagem no objeto Image.')
    }

    return () => {
      URL.revokeObjectURL(objectUrl)
    }
  }, [imageFile])

  console.log(enhancedImage)

  if (!imageFile) {
    return (
      <Stack mt="16" alignItems="center" gap="4">
        <Heading>Nenhuma imagem encontrada</Heading>
        <Text>Por favor, volte e selecione uma imagem para melhorar.</Text>
      </Stack>
    )
  }

  return (
    <Stack
      mt="16"
      gap="6"
      alignItems="center"
      justifyContent="center"
      animationName="fade-in, slide-from-bottom"
      animationDuration="0.4s"
    >
      <Heading fontSize="3xl" as="h2">
        Imagem Melhorada com Sucesso!
      </Heading>

      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {enhancedImage ? (
        <Stack alignItems="center" gap="6">
          <Image
            src={enhancedImage}
            alt="Imagem melhorada"
            maxH="70vh"
            objectFit="contain"
            borderRadius="md"
            boxShadow="lg"
          />
          <DownloadTrigger
            data={enhancedImage}
            fileName="imagem-melhorada.png"
            mimeType="image/jpeg"
            asChild
          >
            <Button>
              <LuDownload /> Download (
              <FormatByte value={enhancedImage.length} unitDisplay="narrow" />)
            </Button>
          </DownloadTrigger>
        </Stack>
      ) : (
        <Stack alignItems="center" gap="4" p="10">
          <Spinner size="xl" />
          <Text>Melhorando sua imagem...</Text>
        </Stack>
      )}
    </Stack>
  )
}
