import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0 0 1rem;
  overflow: hidden;

  @media (min-width: 900px) {
    padding: 0;
  }
`
export const MenuIcon = styled.div`
  gap: 0.5rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;
  overflow: hidden;
`

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  a {
    width: 100%;
    height: 4rem;
    padding: 1rem;
    background: ${(props) => props.theme['gray-800']};
    display: flex;
    align-items: center;
    color: white;
    border: 1px solid ${(props) => props.theme['gray-900']};
    border-radius: 3px;
    overflow: hidden;
    text-decoration: none;
  }

  div {
    padding: 1rem;
  }
`
