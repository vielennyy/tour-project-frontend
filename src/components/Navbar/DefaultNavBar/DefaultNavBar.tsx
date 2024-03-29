import React, {useState, useEffect, useContext} from "react";
import { Link } from 'react-router-dom';
import {UserContext} from "../../../UserContext";

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
  MenuItem
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';

import { MainPopup} from "../../MainPopup";

import logo from '../../../assets/icons/Logo.svg';

export const DefaultNavBar = ():JSX.Element => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{background: '#ffffff', position: 'relative', zIndex: 2, height: 95}}>
      <Container sx={{
        width: 1440
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
            {logo}
          </Typography>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 1,
          }}>
            <Link to={'/'}>
              <Button>
                <img src={logo}/>
              </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <Link to={'/accommodations'}>
              <Typography sx={{ margin: '0 20px'}} variant="body2">
                Де жити?
              </Typography>
            </Link>
            <Link to={'/catering'}>
              <Typography sx={{ margin: '0 20px'}} variant="body2">
                Де поїсти?
              </Typography>
            </Link>
            <Link to={'/tours'}>
              <Typography sx={{ margin: '0 20px'}} variant="body2">
                Тури
              </Typography>
            </Link>
            <Link to={'/attractions'}>
              <Typography sx={{ margin: '0 20px'}} variant="body2">
                Атракції
              </Typography>
            </Link>
            <Link to={'/map'}>
              <Typography sx={{ margin: '0 20px'}} variant="body2">
                Мапа
              </Typography>
            </Link>
          </Box>
          {localStorage.getItem('token') ?
          <Box sx={{
            width: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}>
            <Link to={'/registration'}>
              <Button sx={{
                textTransform: 'none',
                background: 'rgba(255, 255, 255, 0.15)',
                height: 45,
                width: 220,
                borderRadius: '9px',
                boxShadow: '0px 4px 15px rgba(155, 155, 155, 0.25)',
                border: '1px solid black',
                marginRight: 2
              }}>
                <AddIcon sx={{marginRight: '5px'}}/>
                <Typography variant="body2">
                  Додати пропозицію
                </Typography>
              </Button>
            </Link>
            <Link to={'/user'}>
              <AccountCircleIcon sx={{color: '#000000', marginTop: 1}} fontSize='large'/>
            </Link>
          </Box> :
          <MainPopup/>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}