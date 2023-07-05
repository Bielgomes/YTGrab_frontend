import { useState, ChangeEvent } from 'react'

import { api } from './lib/axios'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { Container, Input } from './styles/pages/home'
import { Header } from './components/Header'
import { Preview } from './components/Preview'
import { Informations } from './components/Informations'
import { NotFounded } from './components/NotFounded'

interface IQuality {
  itag: number
  quality: string
  fileSize?: number
}

export interface IVideoInfo {
  id: string
  title: string
  thumbnail: string
  duraction: number
  mp4Qualities: IQuality[]
  mp3Qualities: IQuality[]
}

export function App() {
  const [url, setUrl] = useState<string>('')
  const [videoInfo, setVideoInfo] = useState<IVideoInfo | null>(null)

  function handlerUrlChange(event: ChangeEvent<HTMLInputElement>) {
    const newUrl = event.target.value.split('v=')[1]
      ? event.target.value.split('v=')[1]
      : event.target.value
    api
      .get(`/info/${newUrl}`, {
        headers: {
          authorization: import.meta.env.VITE_AUTHORIZATION,
        },
      })
      .then((response) => {
        if (response.status === 404) {
          setVideoInfo(null)
          return
        }

        const videoObj = {
          id: newUrl,
          ...response.data,
        }

        setVideoInfo(videoObj)
      })
      .catch(() => {
        setVideoInfo(null)
      })

    setUrl(event.target.value)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Container>
        <Input
          placeholder="Paste the YouTube video link here"
          value={url}
          onChange={handlerUrlChange}
        />

        {url === '' ? (
          <Informations />
        ) : videoInfo ? (
          <>
            <Preview info={videoInfo!} />
          </>
        ) : (
          <NotFounded />
        )}
      </Container>

      <GlobalStyle />
    </ThemeProvider>
  )
}
