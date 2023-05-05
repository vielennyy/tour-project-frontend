import { Accommodation, MainAccommodationInfoProps, AccommodationRoomInfo, AccommodationRoomResponce, RoomAmenities, AccommodationFormValues, AccommodationData } from 'src/components/TypesAndInterfaces'
import { Box, Typography, FormControl, TextField, Button, Checkbox, FormControlLabel } from '@mui/material'
import { useState } from 'react'
import { Geolocations } from 'src/components/TypesAndInterfaces'

interface ComponentProps {
    accommodation: Accommodation,
    mainInfo: MainAccommodationInfoProps|undefined,
    showMainInfo: boolean,
    setShowMainInfo: React.Dispatch<React.SetStateAction<boolean>>,
    showGeolocationInfo: boolean,
    setShowGeolocationInfo: React.Dispatch<React.SetStateAction<boolean>>,
    showFacilitiesInfo: boolean,
    setShowFacilitiesInfo: React.Dispatch<React.SetStateAction<boolean>>,
}

interface EditGeolocationFormData {
    locality: string,
    latitude: number|undefined,
    longitude: number|undefined,
    street: string,
    suite: string,
    zip_code: string
}

export const Geolocation = ({showFacilitiesInfo, showGeolocationInfo, setShowGeolocationInfo, mainInfo, setShowFacilitiesInfo, ...rest}:ComponentProps) => {
    const [geolocationForm, setGeolocationForm] = useState<EditGeolocationFormData>({
        locality: "",
        latitude: undefined,
        longitude: undefined,
        street: "",
        suite: "",
        zip_code: ""
        })
    // console.log(mainInfo)
    
    const [geolocation, setGeolocation] = useState<Geolocations[]|undefined>()

    fetch(`https://cktour.club/api/v1/accommodations/49/geolocations`, {
              method: "GET",
                headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
              },
            })
              .then(response => response.json()
            )
              .then(json => setGeolocation(json));
    // console.log(geolocation)
      const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === 'latitude' || event.target.name === 'longitude') {
            setGeolocationForm({
                ...geolocationForm,
                [event.target.name]: parseFloat(Number(event.target.value).toFixed(6)),
              });
        } else {
            setGeolocationForm({
                ...geolocationForm,
                [event.target.name]: event.target.value,
            });
        }
        console.log('Input!')
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (mainInfo !== undefined) {
        const data = {
            "locality": geolocationForm.locality,
            "latitude": Number(geolocationForm.latitude),
            "longitude": Number(geolocationForm.longitude),
            "suite": geolocationForm.suite,
            "zip_code": geolocationForm.zip_code,
            "street": geolocationForm.street,
          };
        fetch(`https://cktour.club/api/v1/accommodations/${mainInfo.data.accommodation.id}/geolocations`, {
              method: "POST",
                headers: {'Content-Type': 'application/json',
                Authorization: "Bearer " + localStorage.getItem('token')
              },
              body: JSON.stringify(data),
            })
              .then(response => {
                if(response.ok){
                    response.json()
                    setShowGeolocationInfo(false)
                    setShowFacilitiesInfo(true)
                }
            })
              .then(json => console.log(json));

            }
    }

    return(
        <Box sx={{
            width: '550px',
            background: '#FAFAFA',
            boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.25)',
            borderRadius: '15px',
            padding: '20px',
            margin: '10px auto'
            }}
        >
        {showGeolocationInfo ?
        <>
            <Typography fontSize={24} fontWeight={500}>Розташування</Typography>
            <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
            <FormControl sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography fontSize={18} marginBottom={'5px'}>Населений пункт</Typography>
                <TextField name='locality'  id="outlined-basic" required onChange={handleFormChange}/>
                <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Вулиця</Typography>
                <TextField name='street' id="outlined-basic" required onChange={handleFormChange}/>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', flexDirection:'column', width:'40%'}}>
                        <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Номер</Typography>
                        <TextField name='suite' id="outlined-basic" onChange={handleFormChange}/>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'column', width:'45%'}}>
                        <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Поштовий індекс</Typography>
                        <TextField name='zip_code' id="outlined-basic" onChange={handleFormChange}/>
                    </Box>
                </Box>
                <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Введіть координати вашого житла</Typography>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', flexDirection:'column', width:'45%'}}>
                        <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Широта</Typography>
                        <TextField name='latitude' id="outlined-basic" onChange={handleFormChange}/>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'column', width:'45%'}}>
                        <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Довгота</Typography>
                        <TextField name='longitude' id="outlined-basic" onChange={handleFormChange}/>
                    </Box>
                </Box>
                <Button variant="contained" type='submit' sx={{width: '200px', margin: '20px 0px', textTransform:'none', fontSize:'20px', padding:'10px 30px'}}>Далі</Button>
            </FormControl>
            </form>
        </>
       :
        <Typography fontSize={24} fontWeight={500}>Розташування</Typography>
        }
    </Box>
    )
    
}