// Importando o styled-components impede de sobreescrevermos todos os tipos
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// declara que o modulo styled-components do npm
// vai ter o tipo DefaultTheme que é vazio por padrão
// os tipos do ThemeType
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
