import { useState, ChangeEvent } from 'react'
import { Box, Typography, FormControl, TextField, Button, Input, Grid } from '@mui/material'
import { MainAccommodationInfoProps } from 'src/components/TypesAndInterfaces'
import { MainInfo } from './MainInfo'
import { Geolocation } from './Geolocation'
import { Facilities } from './Facilities'

interface ComponentProps {
    mainInfo: MainAccommodationInfoProps|undefined,
    setMainInfo: React.Dispatch<React.SetStateAction<MainAccommodationInfoProps|undefined>>,
}

export const AccommodationRegistration = () => {
    const [mainInfo, setMainInfo] = useState<MainAccommodationInfoProps>()

    return(
        <>
        <MainInfo mainInfo={mainInfo} setMainInfo={setMainInfo}></MainInfo>
        <Geolocation mainInfo={mainInfo} setMainInfo={setMainInfo}/>
        <Facilities mainInfo={mainInfo} setMainInfo={setMainInfo}/>
        </>
    )
}



