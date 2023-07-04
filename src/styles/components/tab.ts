import { styled } from 'styled-components'
import * as Tabs from '@radix-ui/react-tabs'

export const Container = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;

  width: 100%;

  background-color: ${({ theme }) => theme['zinc-700']};
  border-radius: 8px;
`

export const List = styled(Tabs.List)`
  display: flex;
  gap: 2px;
`

export const Trigger = styled(Tabs.Trigger)`
  flex: 1;

  padding: 1rem 0;

  border: none;
  background-color: ${({ theme }) => theme['zinc-900']};

  font-weight: 600;
  color: ${({ theme }) => theme.white};

  cursor: pointer;

  &[data-state='active'] {
    box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme['blue-400']},
      0 1px 0 0 ${({ theme }) => theme['blue-400']};
  }

  &:first-child {
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
  }
`

export const Content = styled(Tabs.Content)`
  padding: 1rem;

  &:focus {
    box-shadow: none;
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  tr {
    display: flex;
  }

  td {
    flex: 1;
    display: flex;

    align-items: center;

    padding: 1.25rem 2rem;
    margin-top: 0.5rem;

    background: ${(props) => props.theme['zinc-900']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

export const Button = styled.button`
  display: flex;

  border: none;
  border-radius: 4px;

  background-color: ${({ theme }) => theme['green-400']};

  color: ${({ theme }) => theme['zinc-900']};

  padding: 0.5rem 2rem;

  cursor: pointer;
`
