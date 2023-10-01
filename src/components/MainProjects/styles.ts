import styled from 'styled-components'

export const MainProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: auto;
  flex-direction: column;
  margin: auto;
  align-items: center;
  gap: 2rem;
  padding-top: 2rem;

  &:last-child {
    padding-bottom: 2.5rem;
  }

  @media (min-width: 600px) {
    flex-direction: row;
  }
`

export const ProjectContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  max-width: 80vw;
  max-height: 12rem;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid ${(props) => props.theme['gray-400']};

  @media (min-width: 600px) {
    max-width: 80vw;
    max-height: 50rem;
  }
`
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  overflow: hidden;

  img {
    max-height: 15rem;
    overflow: hidden;
    width: 20rem;
    height: 12rem;
    object-fit: cover;
    border-radius: 8px;
    overflow: hidden;
    filter: grayscale(100%) blur(8px);

    @media (min-width: 600px) {
      max-height: 25rem;
      width: 40rem;
      height: 30rem;

      &:hover {
        filter: grayscale(0%) blur(2px);
      }
    }
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2rem;
  transform: translate(-50%, -50%);
  color: white;
  padding: 0.8rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['gray-900']};
  font-weight: bold;
  overflow: hidden;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`
