import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  position: relative;
  text-align: center;
  padding: 0.5rem;
`

export const Image = styled.img`
  opacity: 0.5;
  max-height: 15rem;
  overflow: hidden;
  border-radius: 8px;
  width: 100%;
  object-fit: cover;
`

export const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  width: 90%;
`

export const Text = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-family: 'Roboto', serif;
  font-weight: bold;
`
