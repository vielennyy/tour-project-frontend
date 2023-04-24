import {Typography, Button} from '@mui/material';
import { Accommodation } from 'src/components/TypesAndInterfaces';
import { CheckingItem, ConfirmedItem} from './AdvertisementItem';
import { useState, useEffect } from 'react'

export const UnpablishedAdverticement = () => {
    const userId = localStorage.getItem('id')
    
    const [accommodations, setAccommodations] = useState<Accommodation[]>([])
    useEffect(() => {
        fetch(`https://cktour.club/api/v1/accommodations`, {
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
                {accommodations.map((accommodation) => (accommodation.status === 'unpublished' && accommodation.user_id===Number(userId)) ? <CheckingItem props={accommodation}/> : <></>)}
            </>
            :
            <>
                <Typography fontSize={28} fontWeight={500} sx={{marginBottom: '35px'}}>На даний момент у вас немає неопублікованих оголошень</Typography>
                <Button variant="contained" href='/registration' sx={{width: '200px', margin: '20px 0px', textTransform:'none', fontSize:'20px', padding:'10px 30px'}}>Додати пропозицію</Button>

            </>
        }
        </>
    )
}