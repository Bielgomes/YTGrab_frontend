import {
  Container,
  Content,
  List,
  Trigger,
  Table,
  Button,
} from '../styles/components/tab'

export function Tab() {
  return (
    <Container defaultValue="MP4" orientation="vertical">
      <List aria-label="Baixe um vídeo em MP4 ou MP3">
        <Trigger value="MP4">MP4</Trigger>
        <Trigger value="MP3">MP3</Trigger>
      </List>
      <Content value="MP4">
        <Table>
          <thead>
            <tr>
              <td>Resolução</td>
              <td>Tamanho</td>
              <td>Download</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>.mp4 1080p</td>
              <td>80MB</td>
              <td>
                <Button>BAIXAR</Button>
              </td>
            </tr>
            <tr>
              <td>.mp4 720p</td>
              <td>50MB</td>
              <td>
                <Button>BAIXAR</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Content>
      <Content value="MP3">
        <Table>
          <thead>
            <tr>
              <td>Resolução</td>
              <td>Tamanho</td>
              <td>Download</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>.mp3 320kbps</td>
              <td>80MB</td>
              <td>
                <Button>BAIXAR</Button>
              </td>
            </tr>
            <tr>
              <td>.mp3 256kbps</td>
              <td>50MB</td>
              <td>
                <Button>BAIXAR</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </Container>
  )
}
