import { HeaderContainer, MenuIcon, MenuContainer, MenuItems } from './styles'

import { Scroll, List, ArrowArcLeft } from 'phosphor-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  return (
    <>
      <HeaderContainer>
        <MenuIcon>
          <List size={30} onClick={() => setOpenMenu(!openMenu)} />
        </MenuIcon>
      </HeaderContainer>
      {openMenu && (
        <MenuContainer>
          <MenuItems>
            <NavLink to="/" title="Back to home">
              <ArrowArcLeft size={30} />
              <div>Back to home</div>
            </NavLink>
            <NavLink to="/history" title="Historico">
              <Scroll size={30} />
            </NavLink>
            <NavLink to="/" title="Historico">
              <Scroll size={30} />
            </NavLink>
            <NavLink to="/" title="Historico">
              <Scroll size={30} />
            </NavLink>
            <NavLink to="/" title="Historico">
              <Scroll size={30} />
            </NavLink>
            <NavLink to="/" title="Historico">
              <Scroll size={30} />
            </NavLink>
            <NavLink to="/" title="Historico">
              <Scroll size={30} />
            </NavLink>
          </MenuItems>
        </MenuContainer>
      )}
    </>
  )
}
