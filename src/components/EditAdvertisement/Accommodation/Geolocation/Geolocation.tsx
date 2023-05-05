import { Accommodation, MainAccommodationInfoProps, AccommodationRoomInfo, AccommodationRoomResponce, RoomAmenities, AccommodationFormValues, AccommodationData } from 'src/components/TypesAndInterfaces'
import { Box, Typography, FormControl, TextField, Button, Checkbox, FormControlLabel } from '@mui/material'
import { useState } from 'react'
interface ComponentProps {
    accommodation: Accommodation,
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

export const Geolocation = (props:ComponentProps) => {
    const [geolocationForm, setGeolocationForm] = useState<EditGeolocationFormData>({
        locality: "",
        latitude: undefined,
        longitude: undefined,
        street: "",
        suite: "",
        zip_code: ""
        })
    
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
        const data = {
            "locality": geolocationForm.locality,
            "latitude": Number(geolocationForm.latitude),
            "longitude": Number(geolocationForm.longitude),
            "suite": geolocationForm.suite,
            "zip_code": geolocationForm.zip_code,
            "street": geolocationForm.street,
          };
        // if(mainInfo?.data.accommodation.id !== undefined) {
            console.log(data)
            console.log(JSON.stringify(data))
            const url = `https://cktour.club/api/v1/accommodations/${props.accommodation.id}/geolocations`;
            fetch(url, {
              method: "POST",
                headers: {'Content-Type': 'application/json',
                Authorization: "Bearer " + localStorage.getItem('token')
              },
              body: JSON.stringify(data),
            })
              .then(response => response.json())
              .then(json => console.log(json));
        //   } else {
        //     console.log("Error: accommodation id is undefined");
        //   }
    }
    return(
        <Box sx={{
                width: '600px',
                background: '#FAFAFA',
                boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.25)',
                borderRadius: '15px',
                padding: '20px',
                margin: '30px auto'
            }}
        >
        {props.showGeolocationInfo ?
        <>
            <Typography fontSize={24} fontWeight={500}>Розташування</Typography>
            <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
            <FormControl sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography fontSize={18} marginBottom={'5px'}>Населений пункт</Typography>
                <TextField name='locality'  id="outlined-basic" required onChange={handleFormChange}/>
                <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Вулиця</Typography>
                <TextField name='street' id="outlined-basic" required onChange={handleFormChange}/>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', flexDirection:'column', width:'60%'}}>
                        <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Номер</Typography>
                        <TextField name='suite' id="outlined-basic" onChange={handleFormChange}/>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Поштовий індекс</Typography>
                        <TextField name='zip_code' id="outlined-basic" onChange={handleFormChange}/>
                    </Box>
                </Box>
                <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Введіть координати вашого житла</Typography>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', flexDirection:'column', width:'60%'}}>
                        <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Широта</Typography>
                        <TextField name='latitude' id="outlined-basic" onChange={handleFormChange}/>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
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