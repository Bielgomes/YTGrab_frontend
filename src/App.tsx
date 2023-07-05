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

import { toast } from 'react-toastify'

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

    if (newUrl === '') {
      setUrl('')
      return
    }

    api
      .get(`/info/${newUrl}`, {
        headers: {
          authorization: import.meta.env.VITE_AUTHORIZATION,
        },
      })
      .then((response) => {
        const videoObj = {
          id: newUrl,
          ...response.data,
        }

        setVideoInfo(videoObj)
      })
      .catch((error: any) => {
        if (error?.response?.status === 404) {
          toast.error('❌ Video not found!', {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: 'dark',
          })
        } else {
          toast.error('❌ An error occurred, please try again later!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: 'dark',
          })
        }

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
