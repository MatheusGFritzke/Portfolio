import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 4rem;
  line-height: 2.5rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin: auto;
  max-width: calc(100vw);

  @media (min-width: 600px) {
    flex-direction: row;
    font-size: 8rem;
  }

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 1.5rem 0.7rem;
    border-radius: 8px;

    @media (min-width: 600px) {
      padding: 2rem 1rem;
      font-family: 'Roboto Mono', monospace;
      font-size: 10rem;
      line-height: 8rem;
      color: ${(props) => props.theme['gray-100']};

      display: flex;
      gap: 1rem;
    }
  }
`

export const MinutesAndSecondsContainer = styled.div`
  flex-direction: row;
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
`

export const Separator = styled.div`
  padding: 0 0 1rem;
  color: ${(props) => props.theme['green-500']};

  align-items: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  font-size: 5rem;

  @media (min-width: 600px) {
    width: 5rem;
    height: 100%;
    font-size: 10rem;
  }
`
