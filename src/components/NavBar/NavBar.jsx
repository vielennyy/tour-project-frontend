import React,{useState} from "react";
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import CloseIcon from '@mui/icons-material/Close';

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/*MOBILE*/}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {anchorElNav ? <CloseIcon/> : <MenuIcon />}
              {/*<MenuIcon />*/}
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
              }}
            >
              <MenuItem>
                <Link to={'/'}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block'}}
                  >
                    Home Page
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={'/tours'}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                    Tours
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={'/foods'}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                    Foods
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={'/accommodations'}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                    Accommodations
                  </Button>
                </Link>
              </MenuItem>
            </Menu>
            <Box>
              <Link to={'/'}>
                <Button
                  sx={{ my: 2, color: 'white', display: 'flex'}}
                >
                  <AirportShuttleIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                  <Typography
                    variant="h6"
                    noWrap
                    sx={{
                      mr: 1,
                      display: { xs: 'flex', md: 'none' },
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: 'inherit',
                      fontSize: '14px'
                    }}
                  >
                    Tour Project
                  </Typography>
                </Button>
              </Link>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to={'/'}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                Home Page
              </Button>
            </Link>
            <Link to={'/tours'}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Tours
              </Button>
            </Link>
            <Link to={'/foods'}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Foods
              </Button>
            </Link>
            <Link to={'/accommodations'}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Accommodations
              </Button>
            </Link>
          </Box>

          <Box>
            <Link to={'/'}>
              <Button
                sx={{ my: 2, color: 'white', display: 'flex'}}
              >
                <AirportShuttleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Tour Project
                </Typography>
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Link to={'/user'}>
                  <Button
                    sx={{ my: 2, color: 'white', display: 'flex', alignItems: 'center'}}
                  >
                    <AccountCircleIcon />
                  </Button>
                </Link>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
