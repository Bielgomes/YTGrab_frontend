import { styled } from 'styled-components'

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2.187rem;

  gap: 2rem;
`

export const PreviewContent = styled.div`
  background-color: ${({ theme }) => theme['zinc-700']};
  border-radius: 8px;

  > img {
    border-radius: 8px 8px 0 0;
    object-fit: cover;
  }
`

export const PreviewFields = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 0.75rem;

  margin-top: 1rem;
  margin-bottom: 1.25rem;

  gap: 1rem;
`

export const PreviewField = styled.div`
  > p {
    font-family: 'Inter', sans-serif;
    font-weight: 200;
    line-height: 160%;

    width: 16rem;
  }
`

export const Title = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
`
