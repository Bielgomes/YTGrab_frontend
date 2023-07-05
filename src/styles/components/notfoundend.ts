import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding: 5rem 0;

  h1 {
    margin-top: 2rem;
    font-size: 3rem;
    text-align: center;
  }

  @media (max-width: 779px) {
    h1 {
      font-size: 2rem;
    }

    img {
      max-width: 18.75rem;
      width: 80%;
      height: 100%;
    }
  }
`
