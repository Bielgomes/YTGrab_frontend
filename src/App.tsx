import { useState, ChangeEvent } from 'react'

import { api } from './lib/axios'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { Container, Input } from './styles/pages/home'
import { Header } from './components/Header'
import { Preview } from './components/Preview'

export interface VideoInfo {
  title: string
  description: string
  thumbnail: string
  duration: string
}

export function App() {
  const [url, setUrl] = useState<string>('')
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null)

  function handlerUrlChange(event: ChangeEvent<HTMLInputElement>) {
    api
      .get('', {
        params: {
          id: event.target.value.split('v=')[1],
          key: import.meta.env.VITE_CREDENTIALS,
          part: 'contentDetails,snippet',
        },
      })
      .then((response) => {
        if (!response.data.items.length) {
          setVideoInfo(null)
          return
        }

        const { title, description, thumbnails } =
          response.data.items[0].snippet

        const { duration } = response.data.items[0].contentDetails

        const videoObj = {
          title,
          description,
          thumbnail: thumbnails.high.url,
          duration,
        }

        setVideoInfo(videoObj)
      })

    setUrl(event.target.value)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Container>
        <Input
          placeholder="Cole aqui a URL"
          value={url}
          onChange={handlerUrlChange}
        />

        {url === '' ? (
          <h1>YTGrab é um site para baixar vídeos com alta velocidade!</h1>
        ) : videoInfo ? (
          <>
            <Preview info={videoInfo!} />
          </>
        ) : (
          <h1>Video não encontrado</h1>
        )}
      </Container>

      <GlobalStyle />
    </ThemeProvider>
  )
}
