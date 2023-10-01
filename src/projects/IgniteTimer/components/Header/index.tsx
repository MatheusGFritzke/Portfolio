import { HeaderContainer } from './styles'

import logo from '../../assets/logo.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/projects/timer/countdown" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/projects/timer/history" title="Historico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
