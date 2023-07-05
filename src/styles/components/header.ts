import { styled } from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 15.625rem;

  background-color: ${({ theme }) => theme['zinc-900']};

  @media (max-width: 779px) {
    img {
      width: 100%;
    }
  }
`
export const Content = styled.div`
  max-width: 75rem;

  @media (max-width: 779px) {
    padding: 0 1rem;
  }
`
