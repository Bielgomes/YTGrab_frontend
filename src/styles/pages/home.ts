import { styled } from 'styled-components'

export const Container = styled.header`
  max-width: 75rem;

  margin: 0 auto;
  margin-top: -1.812rem;
`

export const Input = styled.input`
  width: 100%;
  height: 3.625rem;

  padding: 1rem;

  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme['zinc-700']};
  color: ${({ theme }) => theme.white};

  &::placeholder {
    color: ${({ theme }) => theme.white};
    font-size: 1rem;
    font-weight: 200;
  }
`
