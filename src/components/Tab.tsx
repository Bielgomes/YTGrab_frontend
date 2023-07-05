import { useState } from 'react'

import { IVideoInfo } from '../App'
import { api } from '../lib/axios'
import {
  Container,
  Content,
  List,
  Trigger,
  Table,
  Button,
} from '../styles/components/tab'

import { toast } from 'react-toastify'

interface TabProps {
  info: IVideoInfo
}

export function Tab({ info }: TabProps) {
  const [inDownload, setInDownload] = useState<boolean>(false)

  async function handlerDownloadAudio(id: string, bitrate: number) {
    setInDownload(true)
    toast.info('♻️ Conversão Iniciada!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: 'dark',
    })
    try {
      const response = await api.get(`/downloadAudio/${id}`, {
        responseType: 'blob',
        headers: {
          authorization: import.meta.env.VITE_AUTHORIZATION,
        },
        params: {
          bitrate,
        },
      })

      const blob = new Blob([response.data], { type: 'audio/mp3' })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `${info.title}-ytgrab.mp3`)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

      toast.success('✅ Conversão concluída!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: 'dark',
      })
    } catch (error) {
      if (error.response.status === 413) {
        toast.error('❌ Vídeo maior que 10 minutos!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: 'dark',
        })
      } else {
        toast.error('❌ Erro ao fazer o download!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: 'dark',
        })
      }
      console.error('Erro ao fazer o download:', error)
    }

    setInDownload(false)
  }

  async function handlerDownload(id: string, quality: number) {
    setInDownload(true)
    toast.info('♻️ Conversão Iniciada!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: 'dark',
    })
    try {
      const response = await api.get(`/download/${id}`, {
        responseType: 'blob',
        headers: {
          authorization: import.meta.env.VITE_AUTHORIZATION,
        },
        params: {
          quality,
        },
      })

      const blob = new Blob([response.data], { type: 'video/mp4' })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `${info.title}-ytgrab.mp4`)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

      toast.success('✅ Conversão concluída!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: 'dark',
      })
    } catch (error) {
      if (error.response.status === 413) {
        toast.error('❌ Vídeo maior que 10 minutos!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: 'dark',
        })
      } else {
        toast.error('❌ Erro ao fazer o download!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: 'dark',
        })
      }
      console.error('Erro ao fazer o download:', error)
    }

    setInDownload(false)
  }

  return (
    <Container defaultValue="MP4" orientation="vertical">
      <List aria-label="Download a video in MP4 or MP3">
        <Trigger value="MP4">MP4</Trigger>
        <Trigger value="MP3">MP3</Trigger>
      </List>
      <Content value="MP4">
        <Table>
          <thead>
            <tr>
              <td>Resolution</td>
              <td>Size (Approx)</td>
              <td>Download</td>
            </tr>
          </thead>
          <tbody>
            {info.mp4Qualities.map((quality) => (
              <tr key={quality.itag}>
                <td>MP4 {quality.quality}</td>
                <td>
                  {quality.fileSize ? quality.fileSize?.toFixed(2) : '0.00'}MB
                </td>
                <td>
                  <Button
                    disabled={inDownload}
                    onClick={() => handlerDownload(info.id, quality.itag)}
                  >
                    DOWNLOAD
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
      <Content value="MP3">
        <Table>
          <thead>
            <tr>
              <td>Resolution</td>
              <td>Size (Approx)</td>
              <td>Download</td>
            </tr>
          </thead>
          <tbody>
            {info.mp3Qualities.map((quality) => (
              <tr key={quality.itag}>
                <td>MP3 {quality.quality}</td>
                <td>
                  {quality.fileSize ? quality.fileSize?.toFixed(2) : '0.00'}MB
                </td>
                <td>
                  <Button
                    disabled={inDownload}
                    onClick={() => handlerDownloadAudio(info.id, quality.itag)}
                  >
                    DOWNLOAD
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  )
}
