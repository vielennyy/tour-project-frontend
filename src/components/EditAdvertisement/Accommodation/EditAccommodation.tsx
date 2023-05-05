import React, {ChangeEvent, useEffect, useState} from 'react';

import {
  Box,
  Button,
  TextField,
  Dialog,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Accommodation, MainAccommodationInfoProps } from '../../TypesAndInterfaces';
import { Info } from './Info/Info'
import { Facilities } from './Facilities';
import { Geolocation } from './Geolocation'

interface MyComponentProps {
    accommodation: Accommodation,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ComponentProps {
  mainInfo: MainAccommodationInfoProps|undefined,
  setMainInfo: React.Dispatch<React.SetStateAction<MainAccommodationInfoProps|undefined>>,
}



export const EditAccommodation = (props:MyComponentProps) => {
  const [mainInfo, setMainInfo] = useState<MainAccommodationInfoProps>()
  const [showMainInfo, setShowMainInfo] = useState(true)
  const [showGeolocationInfo, setShowGeolocationInfo] = useState(false)
  const [showFacilitiesInfo, setShowFacilitiesInfo] = useState(false)
  const [isFinished, setFinished] = useState(false)

  const handleWindowClose = () => {
    props.setOpen(false)
  }

    return(
      <Box >
      <Dialog open={props.open}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 2,
        }}>
          <Typography variant='h6'>Редагувати</Typography>
          <CloseIcon onClick={handleWindowClose} sx={{cursor: 'pointer'}}/>
        </Box>
        {!isFinished ? 
        <>
          <Info accommodation={props.accommodation} 
            mainInfo = {mainInfo}
            setMainInfo = {setMainInfo}
            showMainInfo =  {showMainInfo}
            setShowMainInfo = {setShowMainInfo}
            showGeolocationInfo = {showGeolocationInfo}
            setShowGeolocationInfo = {setShowGeolocationInfo}
            showFacilitiesInfo = {showFacilitiesInfo}
            setShowFacilitiesInfo = {setShowFacilitiesInfo}
          />
          <Geolocation
                accommodation={props.accommodation} 
                mainInfo = {mainInfo}
                showMainInfo =  {showMainInfo}
                setShowMainInfo = {setShowMainInfo}
                showGeolocationInfo = {showGeolocationInfo}
                setShowGeolocationInfo = {setShowGeolocationInfo}
                showFacilitiesInfo = {showFacilitiesInfo}
                setShowFacilitiesInfo = {setShowFacilitiesInfo}
          />
          <Facilities accommodation={props.accommodation} 
                mainInfo = {mainInfo}
                showMainInfo =  {showMainInfo}
                setShowMainInfo = {setShowMainInfo}
                showGeolocationInfo = {showGeolocationInfo}
                setShowGeolocationInfo = {setShowGeolocationInfo}
                showFacilitiesInfo = {showFacilitiesInfo}
                setShowFacilitiesInfo = {setShowFacilitiesInfo}
                setFinished = {setFinished}
          />
        </>
        : 
        <Box sx={{
          width: '960px',
          background: '#FAFAFA',
          boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.25)',
          borderRadius: '15px',
          padding: '20px',
          margin: '30px auto'
        }}
        >
            <Typography margin={'40px'}>Ваше оголошення найближчим часом буде опрацьоване адміністратором. Статус оголошення Ви можете перевіряти у особистому кабінеті.</Typography>
            <Button variant="contained" href='/' sx={{width: '300px', margin: '30px 40px', textTransform:'none', fontSize:'20px', padding:'10px 30px', textAlign:'center'}}>На головну</Button>
        </Box>

      }
      </Dialog>
    </Box>
    )
}
