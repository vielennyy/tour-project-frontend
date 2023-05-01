import React from "react";
import {Link} from "react-router-dom";

import {Box, Typography, Container} from "@mui/material";
import redLogo from "../../../assets/icons/RedLogo.svg";
import logo from '../../../assets/icons/Logo.svg';


export const DefaultFooter = ():JSX.Element => {
  return (
    <Container sx={{
      width: '1440'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderBottom: '1px solid #757678'
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <img src={logo}/>
          <Typography sx={{fontSize: '14px', fontWeight: 500, width: 100, marginLeft: 1,color: '#FFFFFF'}}>Неофіційний туристичний сайт області</Typography>
        </Box>

        <Box>
          <Typography sx={{fontSize: '16px', fontWeight: 700, color: '#a1a1a1'}}>Пропозиції</Typography>
          <Box sx={{
            display: 'flex',
            minWidth: 250,
            justifyContent: 'space-between',
            marginTop: '14px',
            marginBottom: 3,
          }}>
            <Box>
              <Link to={'/accommodations'}>
                <Typography sx={{color: '#FFFFFF', fontSize: 14, fontWeight: 400, marginBottom: 1}}>
                  Де жити?
                </Typography>
              </Link>
              <Link to={'/catering'}>
                <Typography sx={{color: '#FFFFFF', fontSize: 14, fontWeight: 400, marginBottom: 1}}>
                  Де поїсти?
                </Typography>
              </Link>
              <Link to={'/tours'}>
                <Typography sx={{color: '#FFFFFF', fontSize: 14, fontWeight: 400}}>
                  Тури
                </Typography>
              </Link>
            </Box>
            <Box>
              <Link to={'/attractions'}>
                <Typography sx={{color: '#FFFFFF', fontSize: 14, fontWeight: 400, marginBottom: 1}}>
                  Атракції
                </Typography>
              </Link>
              <Link to={'/map'}>
                <Typography sx={{color: '#FFFFFF', fontSize: 14, fontWeight: 400, marginBottom: 1}}>
                  Мапа
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>

        <Box>
          <Typography sx={{fontSize: '16px', fontWeight: 700, color: '#a1a1a1'}}>Корисні сторінки</Typography>
          <Box sx={{
            display: 'flex',
            minWidth: 250,
            justifyContent: 'space-between',
            marginTop: '14px'
          }}>
            <Box>
              <Link to={'/'}>
                <Typography sx={{color: '#FFFFFF', fontSize: 14, fontWeight: 400, marginBottom: 1}}>
                  Про нас
                </Typography>
              </Link>
              <Link to={'/'}>
                <Typography sx={{color: '#FFFFFF', fontSize: 14, fontWeight: 400}}>
                  Контакти
                </Typography>
              </Link>
            </Box>
            <Box>
              <Link to={'/'}>
                <Typography sx={{color: '#FFFFFF', fontSize: 14, fontWeight: 400, marginBottom: 1}}>
                  Умови користування
                </Typography>
              </Link>
              <Link to={'/'}>
                <Typography sx={{color: '#FFFFFF', fontSize: 14, fontWeight: 400}}>
                  Допомога
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography sx={{color: '#989A9E', fontSize: 14, fontWeight: 400, marginTop: 2}}>© Всі права захищені</Typography>
    </Container>
  )
}