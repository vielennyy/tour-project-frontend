import {Box, Button, Container, Typography} from "@mui/material";

import { SearchBar } from "./SearchBar";
import { AccommodationsList } from "./AccommodationsList";
import React from "react";

export const AccommodationsPageContent = ():JSX.Element => {
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
          <AccommodationsList/>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Button sx={{
              background: '#EF5151',
              padding: '18px',
              borderRadius: '7px',
              width: 280,
              maxHeight: 60,
            }}
                    variant="contained">
              <Typography sx={{ color: '#FFFFFF', fontSize: 18, fontWeight: 700, textTransform: 'none'}}>
                Показати більше
              </Typography>
            </Button>
          </Box>
        </Container>
    </Box>
  )
}