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
import { EditAccommodationInfo } from './EditAccommodation/EditAccommodationInfo'

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
  const [showMainInfo, setShowMainInfo] = useState(true)
  const [showGeolocationInfo, setShowGeolocationInfo] = useState(false)
  const [showFacilitiesInfo, setShowFacilitiesInfo] = useState(false)

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
        <EditAccommodationInfo accommodation={props.accommodation} 
                                showMainInfo =  {showMainInfo}
                                setShowMainInfo = {setShowMainInfo}
                                showGeolocationInfo = {showGeolocationInfo}
                                setShowGeolocationInfo = {setShowGeolocationInfo}
                                showFacilitiesInfo = {showFacilitiesInfo}
                                setShowFacilitiesInfo = {setShowFacilitiesInfo}
                                />
      </Dialog>
    </Box>
    )
}
