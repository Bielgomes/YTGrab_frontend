import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  h1 {
    margin-top: 2rem;
    text-align: center;
    font-size: 3rem;
  }

  @media (max-width: 779px) {
    h1 {
      font-size: 2rem;
    }
  }
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 2rem;

  margin-top: 2rem;

  @media (max-width: 779px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  text-align: center;

  border-radius: 8px;
  background-color: ${({ theme }) => theme['zinc-700']};

  padding: 2rem;

  h2 {
    margin-top: 1rem;
  }

  p {
    margin-top: 1rem;
    line-height: 160%;
  }
`
