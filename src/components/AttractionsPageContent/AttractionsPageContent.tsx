import * as React from "react";

import {Box,
  Container} from "@mui/material";

import { SearchBar } from "./SearchBar";
import { MainCards } from "./MainCards";

export const AttractionsPageContent = ():JSX.Element => {

  return(
    <Box sx={{
      position: 'relative'
    }}>
      <Box sx={{
        background: '#F4F6F8',
        height: 120,
        width: '100vw',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1
      }}></Box>
      <Container sx={{
        width: '1440',
        paddingBottom: 8
      }}>
        <SearchBar/>
        <MainCards/>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          {/*<Button sx={{*/}
          {/*  background: '#EF5151',*/}
          {/*  padding: '18px',*/}
          {/*  borderRadius: '7px',*/}
          {/*  width: 280,*/}
          {/*  maxHeight: 60,*/}
          {/*  marginTop: 4*/}
          {/*}}*/}
          {/*        variant="contained">*/}
          {/*  <Typography sx={{ color: '#FFFFFF', fontSize: 18, fontWeight: 700, textTransform: 'none'}}>*/}
          {/*    Показати більше*/}
          {/*  </Typography>*/}
          {/*</Button>*/}
        </Box>
      </Container>
    </Box>
  )
}