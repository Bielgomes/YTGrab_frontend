import NotFoundedImg from '../assets/NotFounded.png'
import { Container } from '../styles/components/notfoundend'

export function NotFounded() {
  return (
    <Container>
      <img src={NotFoundedImg} width={300} height={300} alt="Sad Emoji" />
      <h1>Vídeo não encontrado</h1>
    </Container>
  )
}
