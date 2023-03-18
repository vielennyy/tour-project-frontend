import React,{useState} from "react";
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem } from '@mui/material';

import { MainPopup} from "../../MainPopup";

export const DefaultNavBar = ():JSX.Element => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container sx={{
        width: 1024
      }}>
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                display: { xs: 'flex', md: 'none' },
                flexDirection: 'column',
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={'/tours'}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                    Куди поїхати?
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={'/foods'}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                    Що поїсти?
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={'/accommodations'}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                    Де поспати?
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{
                background: '#1976d2'
              }}>
                <MainPopup />
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit'
            }}
          >
            LOGO
          </Typography>

          <Box sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <Link to={'/'}>
              <Button
                sx={{ my: 2, color: 'white', display: 'flex'}}
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit'
                  }}
                >
                  LOGO
                </Typography>
              </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to={'/tours'}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Куди поїхати?
              </Button>
            </Link>
            <Link to={'/foods'}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Що поїсти?
              </Button>
            </Link>
            <Link to={'/accommodations'}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Де поспати?
              </Button>
            </Link>
          </Box>
          <MainPopup/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}