import { VideoInfo } from '../App'
import {
  PreviewContainer,
  PreviewContent,
  PreviewField,
  PreviewFields,
  Title,
} from '../styles/components/preview'

import { Tab } from './Tab'

interface PreviewProps {
  info: VideoInfo
}

function durationFormat(duracao: string) {
  const padrao = /PT(\d+H)?(\d+M)?(\d+S)?/
  const regex = duracao.match(padrao)!

  const horas = regex[1] ? parseInt(regex[1].slice(0, -1)) : 0
  const minutos = regex[2] ? parseInt(regex[2].slice(0, -1)) : 0
  const segundos = regex[3] ? parseInt(regex[3].slice(0, -1)) : 0
  const duracaoFormatada = `${horas.toString().padStart(2, '0')}:${minutos
    .toString()
    .padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`
  return duracaoFormatada
}

export function Preview({ info }: PreviewProps) {
  return (
    <PreviewContainer>
      <PreviewContent>
        <img src={info.thumbnail} width={280} height={280} alt="logo" />
        <PreviewFields>
          <PreviewField>
            <Title>Nome</Title>
            <p>
              {info.title.length > 50
                ? `${info?.title.slice(0, 50)}...`
                : info?.title}
            </p>
          </PreviewField>
          <PreviewField>
            <Title>Duração</Title>
            <p>{durationFormat(info.duration)}</p>
          </PreviewField>
        </PreviewFields>
      </PreviewContent>
      <Tab />
    </PreviewContainer>
  )
}
