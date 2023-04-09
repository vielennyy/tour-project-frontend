import React, {useState, useEffect, useContext} from "react";
import { Link } from 'react-router-dom';
import {UserContext} from "../../../UserContext";
import { UserObject} from "../../TypesAndInterfaces";

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
  MenuItem,
  Input  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { MainPopup} from "../../MainPopup";

import logo from '../../../assets/icons/Logo.svg';

export const DefaultNavBar = ():JSX.Element => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  // const [currentUser, setCurrentUser] = useState<string | undefined>();
  const {user} = useContext(UserContext);

  // const fetchingCurrentUsers = async () => {
  //   const fetching = await fetch(`https://cktour.club/api/v1/users/${user.id}`,
  //     {
  //       method: "GET",
  //       headers: { Authorization: 'Bearer ' +  user.token }
  //     });
  //   const json = await fetching.json();
  //   return setCurrentUser(json.name);
  // }
  //
  // useEffect(() => {
  //   fetchingCurrentUsers()
  // }, [user])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{background: '#ffffff', position: 'relative', zIndex: 2}}>
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
            <Link to={'/tours'}>
              <Typography sx={{ margin: '0 20px'}} variant="body2">
                Атракції
              </Typography>
            </Link>
            <Link to={'/map'}>
              <Typography sx={{ margin: '0 20px'}} variant="body2">
                Мапа
              </Typography>
            </Link>
            {/*<Box sx={{*/}
            {/*  width: '170px',*/}
            {/*  height: '30px',*/}
            {/*  position: 'relative'*/}
            {/*}}>*/}
            {/*  <Input sx={{*/}
            {/*    backgroundColor: '#EEEEEE',*/}
            {/*    padding: '0 5px 0 30px',*/}
            {/*    width: '100%',*/}
            {/*    height: '100%'*/}
            {/*  }}*/}
            {/*    placeholder={'Куди їдемо?'}*/}
            {/*  />*/}
            {/*  <SearchIcon sx={{*/}
            {/*    position: 'absolute',*/}
            {/*    top: '4px',*/}
            {/*    left: '5px',*/}
            {/*    color: '#888888'*/}
            {/*  }}/>*/}
            {/*</Box>*/}
          </Box>
          {localStorage.getItem('token') ?
          <Box sx={{
            width: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}>
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