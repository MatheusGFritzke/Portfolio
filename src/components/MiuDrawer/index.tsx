import { Drawer, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import {
  ProjectorScreenChart,
  CaretLeft,
  HouseLine,
  Timer,
} from 'phosphor-react'
import {
  ItemListDiv,
  ItemText,
  BackItem,
  NavLinkContainer,
  BoxContent,
} from './styles'
import { defaultStyleObject } from './defaultStyleNavLink'
import { NavLink } from 'react-router-dom'

export const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <BoxContent width="13rem" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            <BackItem onClick={() => setIsDrawerOpen(false)}>
              <CaretLeft size="1.5rem" />
            </BackItem>
            <NavLinkContainer>
              <NavLink
                to="/"
                style={defaultStyleObject}
                onClick={() => setIsDrawerOpen(false)}
              >
                <ItemListDiv>
                  <HouseLine size="1.5rem" />
                  <ItemText>Home</ItemText>
                </ItemListDiv>
              </NavLink>
            </NavLinkContainer>
            <NavLinkContainer>
              <NavLink
                to="/projects"
                style={defaultStyleObject}
                onClick={() => setIsDrawerOpen(false)}
              >
                <ItemListDiv>
                  <ProjectorScreenChart size="1.5rem" />
                  <ItemText>Projetos</ItemText>
                </ItemListDiv>
              </NavLink>
            </NavLinkContainer>
            <NavLinkContainer>
              <NavLink
                to="projects/timer"
                style={defaultStyleObject}
                onClick={() => setIsDrawerOpen(false)}
              >
                <ItemListDiv>
                  <Timer size="1.5rem" />
                  <ItemText>timer</ItemText>
                </ItemListDiv>
              </NavLink>
            </NavLinkContainer>
            <NavLinkContainer>
              <NavLink
                to="projects/timer/history"
                style={defaultStyleObject}
                onClick={() => setIsDrawerOpen(false)}
              >
                <ItemListDiv>
                  <Timer size="1.5rem" />
                  <ItemText>history</ItemText>
                </ItemListDiv>
              </NavLink>
            </NavLinkContainer>
          </Typography>
        </BoxContent>
      </Drawer>
    </>
  )
}
