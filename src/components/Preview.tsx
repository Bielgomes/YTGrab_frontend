import { IVideoInfo } from '../App'
import {
  PreviewContainer,
  PreviewContent,
  PreviewField,
  PreviewFields,
  Title,
} from '../styles/components/preview'

import { Tab } from './Tab'

interface PreviewProps {
  info: IVideoInfo
}

function durationFormat(duracao: number) {
  const hours = Math.floor(duracao / 3600)
  const minutes = Math.floor((duracao - hours * 3600) / 60)
  const seconds = duracao - hours * 3600 - minutes * 60

  let formatted = ''
  formatted += `${hours}:`.padStart(3, '0')
  formatted += `${minutes}:`.padStart(3, '0')
  formatted += `${seconds}`.padStart(2, '0')

  return formatted
}

export function Preview({ info }: PreviewProps) {
  return (
    <PreviewContainer>
      <PreviewContent>
        <img src={info.thumbnail} width={280} height={280} alt="logo" />
        <PreviewFields>
          <PreviewField>
            <Title>Name</Title>
            <p>
              {info.title.length > 50
                ? `${info?.title.slice(0, 50)}...`
                : info?.title}
            </p>
          </PreviewField>
          <PreviewField>
            <Title>Duraction</Title>
            <p>{durationFormat(info.duraction)}</p>
          </PreviewField>
        </PreviewFields>
      </PreviewContent>
      <Tab info={info} />
    </PreviewContainer>
  )
}
