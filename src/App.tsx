import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { Container, Input } from './styles/pages/home'
import { Header } from './components/Header'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Container>
        <Input placeholder="Cole aqui a URL" />
      </Container>

      <GlobalStyle />
    </ThemeProvider>
  )
}
