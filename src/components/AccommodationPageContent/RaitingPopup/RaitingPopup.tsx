import { Dialog, Box, Button, Typography, Rating } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { Accommodation } from 'src/components/TypesAndInterfaces'; 
import { useState } from 'react'

interface myComponentProps {
    accommodation: Accommodation;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const RaitingPopup = ({accommodation, open, setOpen}:myComponentProps) => {
    const [value, setValue] = useState<number | null>(null);
    const [finished, setFinished] = useState(false)
    const [error, setError] = useState<string|null>(null)
    const handleClose = () => {
        setOpen(false);
      };

    const handleSubmit = () => {
        if(value) {
            // const reqBody = new FormData()
            // reqBody.append('rating', value.toString())
            const reqBody = {
                rating: value
            }
            console.log(reqBody)
            console.log(accommodation.id)
            fetch(`https://cktour.club/api/v1/accommodations/${accommodation.id}/rates`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + localStorage.getItem('token')
                },
                body: JSON.stringify(reqBody)})
            .then(response => {
                if(response.ok) {
                    response.json()
                    setFinished(true)
                    setError(null)
                }
                else {
                    setFinished(false)
                    setError(response.statusText)
                }
            })
            .then(result => console.log(result))
                }
    }

    return (
        <Dialog open={open} onClose={handleClose}>
        <Box sx={{
          position: 'relative',
          width: 400,
        }}>
          <Button onClick={handleClose} sx={{
            position: 'absolute',
            top: 25,
            right: 16,
            minWidth: 20,
            color: "inherit"
          }}>
            <CloseIcon/>
          </Button>
          {!finished ? 
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 2,
            paddingBottom: 1
          }}>
            <Typography>Оцініть цю пропозицію</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <Button variant="contained" onClick={handleSubmit} sx={{width: '200px', margin: '20px 0px', textTransform:'none', fontSize:'20px', padding:'10px 30px'}}>Надіслати</Button>
            {error ? <Typography fontFamily={'Gilroy'} fontSize={16} color='#EF5151' margin={'20px 0px'}>{error}</Typography>:<></>}
          </Box>
          :
          <Typography margin={'40px'}>Дякуємо за Вашу оцінку!</Typography>

        }
        </Box>
      </Dialog>
    )
}