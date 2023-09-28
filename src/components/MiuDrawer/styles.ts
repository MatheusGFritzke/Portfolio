import styled from 'styled-components'

export const ItemListDiv = styled.div`
  display: flex;
  padding: 0.5rem;
  height: 3.5rem;
  align-items: center;

  &&:hover {
    background: ${(props) => props.theme['gray-700']};
    color: white;
  }

  &&:last-child {
    border-bottom: 1px solid black;
  }

  a {
    text-decoration: none;
  }
`

export const ItemText = styled.div`
  margin-left: 1rem;
  font-size: 1rem;
  align-items: center;
  display: flex;
`
export const BackItem = styled.div`
  display: flex;
  height: 3.5rem;
  border-bottom: 1px solid black;
  padding: 0.5rem;
  justify-content: flex-end;
  align-items: center;

  &&:hover {
    background: ${(props) => props.theme['gray-700']};
    color: white;
  }
`
