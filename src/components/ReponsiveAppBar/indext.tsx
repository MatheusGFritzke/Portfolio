// import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
// import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
// import Menu from '@mui/material/Menu'
// import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
// import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
// import Tooltip from '@mui/material/Tooltip'
// import MenuItem from '@mui/material/MenuItem'
// import AdbIcon from '@mui/icons-material/Adb'
import { NavLink } from 'react-router-dom'
import { defaultStyleObject } from '../MiuDrawer/defaultStyleNavLink'
import ChangeTheme from '../ChangeTheme'

const pages = [{ name: 'Projetos', route: '/projects' }]
// const settings = ['Developing']

export const NavLinkStyle = { ...defaultStyleObject, color: 'white' }

export function ResponsiveAppBar() {
  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null,
  // )

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget)
  // }
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget)
  // }

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null)
  // }

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null)
  // }

  return (
    <AppBar position="static" color="transparent">
      <Container sx={{ maxWidth: '100vw' }}>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <NavLink to="/" style={NavLinkStyle}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MATHEUS FRITZKE
            </Typography>
          </NavLink>

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <NavLink key={page.name} to={page.route} style={NavLinkStyle}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box> */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink key={page.name} to={page.route} style={NavLinkStyle}>
                <Button
                  // onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              </NavLink>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          <ChangeTheme disabled />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
