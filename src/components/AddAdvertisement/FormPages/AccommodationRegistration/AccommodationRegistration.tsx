import { useState, ChangeEvent } from 'react'
import { Box, Typography, FormControl, TextField, Button, Input, Grid } from '@mui/material'
import { MainAccommodationInfoProps } from 'src/components/TypesAndInterfaces'
import { MainInfo } from './MainInfo'
import { Geolocation } from './Geolocation'
import { Facilities } from './Facilities'
import { Payment } from './Payment'

interface ComponentProps {
    mainInfo: MainAccommodationInfoProps|undefined,
    setMainInfo: React.Dispatch<React.SetStateAction<MainAccommodationInfoProps|undefined>>,
}

export const AccommodationRegistration = () => {
    const [mainInfo, setMainInfo] = useState<MainAccommodationInfoProps>()
    const [isFinished, setFinished] = useState(false)

    return(
        <>
        {isFinished ? 
        <>
            <Typography>Дякую! Ваше оголошення найближчим часом буде опрацьоване адміністратором. Статус оголошення Ви можете перевіряти у особистому кабінеті.</Typography>
            <Button variant="contained" href='/' sx={{width: '300px', margin: '20px 0px', textTransform:'none', fontSize:'20px', padding:'10px 30px', textAlign:'center'}}>На головну</Button>
        </>
        :
        <>
            <MainInfo mainInfo={mainInfo} setMainInfo={setMainInfo}/>
            <Geolocation mainInfo={mainInfo} setMainInfo={setMainInfo}/>
            <Facilities mainInfo={mainInfo} setMainInfo={setMainInfo}/>
            <Payment/>
        </>
        }
        
        </>
    )
}



