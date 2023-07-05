import {
  Container,
  CardsContainer,
  Card,
} from '../styles/components/informations'

import {
  RiMoneyDollarCircleLine,
  RiCheckboxMultipleBlankFill,
  RiTimerLine,
} from 'react-icons/ri'

export function Informations() {
  return (
    <Container>
      <h1>
        Welcome to YTGrab, the ultimate YouTube video downloader for MP3 and MP4
        formats.
      </h1>
      <CardsContainer>
        <Card>
          <RiMoneyDollarCircleLine size={60} />
          <h2>Free</h2>
          <p>
            YTGrab is a free YouTube video downloader, you can download as many
            videos as you want.
          </p>
        </Card>
        <Card>
          <RiTimerLine size={60} />
          <h2>Fast</h2>
          <p>
            YTGrab is a fast YouTube video downloader, you can download videos
            in a few seconds.
          </p>
        </Card>
        <Card>
          <RiCheckboxMultipleBlankFill size={60} />
          <h2>Multi media</h2>
          <p>
            YTGrab is a multi media YouTube video downloader, you can download
            videos in MP3 and MP4 formats.
          </p>
        </Card>
      </CardsContainer>
    </Container>
  )
}
