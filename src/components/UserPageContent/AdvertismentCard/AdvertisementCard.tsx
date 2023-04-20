import {Typography, Button} from '@mui/material';
import { Accommodation } from 'src/components/TypesAndInterfaces';
import { AdvertisementItem, CheckingItem, ConfirmedItem} from './AdvertisementItem';
import { useState, useEffect } from 'react'

interface myComponentProps {
    isActive: boolean,
}

export const AdvertisementCard = (isActive :myComponentProps) => {
    
    const [accommodations, setAccommodations] = useState<Accommodation[]>([])
    useEffect(() => {
        fetch('https://cktour.club/api/v1/accommodations', {
            method: "GET",
            headers: { Authorization: 'Bearer ' +  localStorage.getItem('token') }
        })
          .then(response => response.json())
          .then(json => setAccommodations(json.data));
      }, []);
      console.log(accommodations)
    return(
        <>
        <Typography fontSize={28} fontWeight={500} sx={{marginBottom: '35px'}}>Мої оголошення</Typography>
        {accommodations && accommodations !== undefined ?
            <>
            {isActive ?
                <>
                    {accommodations.map((accommodation) => accommodation.status === 'published' ? <ConfirmedItem props={accommodation}/> : <></>)}
                </>
            :
                <>
                    {accommodations.map((accommodation) => accommodation.status === 'published' ? <></> : <CheckingItem props={accommodation}/>)}
                </>
            }
            </>
            :
            <>
                <Typography fontSize={28} fontWeight={500} sx={{marginBottom: '35px'}}>На даний момент ви не розмістили ще жодного оголошення</Typography>
                <Button variant="contained" sx={{width: '200px', margin: '20px 0px', textTransform:'none', fontSize:'20px', padding:'10px 30px'}}>Зберегти</Button>

            </>
        }
        </>
    )
}