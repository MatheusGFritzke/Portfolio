import { Drawer, Box, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { ProjectorScreenChart, CaretLeft, HouseLine } from 'phosphor-react'
import { ItemListDiv, ItemText, BackItem } from './styles'
import { NavLink } from 'react-router-dom'
import { defaultStyleObject } from './defaultStyleNavLink'

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
        <Box width="13rem" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            <BackItem onClick={() => setIsDrawerOpen(false)}>
              <CaretLeft size="1.5rem" />
            </BackItem>
            <NavLink to="/" style={defaultStyleObject}>
              <ItemListDiv>
                <HouseLine size="1.5rem" />
                <ItemText>Home</ItemText>
              </ItemListDiv>
            </NavLink>
            <NavLink to="/" style={defaultStyleObject}>
              <ItemListDiv>
                <ProjectorScreenChart size="1.5rem" />
                <ItemText>Projetos</ItemText>
              </ItemListDiv>
            </NavLink>
            <NavLink to="/" style={defaultStyleObject}>
              <ItemListDiv>
                <ProjectorScreenChart size="1.5rem" />
                <ItemText>Projetos</ItemText>
              </ItemListDiv>
            </NavLink>
            <NavLink to="/test" style={defaultStyleObject}>
              <ItemListDiv> test </ItemListDiv>
            </NavLink>
          </Typography>
        </Box>
      </Drawer>
    </>
  )
}
