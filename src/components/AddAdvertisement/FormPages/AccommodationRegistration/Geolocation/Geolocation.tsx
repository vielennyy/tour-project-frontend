import { useState, ChangeEvent } from 'react'
import { Box, Typography, FormControl, TextField, Button, Input, Grid } from '@mui/material'
import { MainAccommodationInfoProps } from 'src/components/TypesAndInterfaces'

interface ComponentProps {
    mainInfo: MainAccommodationInfoProps|undefined,
    setMainInfo: React.Dispatch<React.SetStateAction<MainAccommodationInfoProps|undefined>>,
}
interface data {
    accommodation: {
        id?: number;
        name: string;
        description: string;
        kind: string;
        person: string;
        phone: string;
        email: string;
        reg_code: string;
        address_owner: string;
        status: string;
        created_at: string;
        updated_at: string;
        user_id: number;
    }
    image_urls: []
}

export const Geolocation = ({mainInfo, setMainInfo}:ComponentProps) => {
    const [show, setShow] = useState(true)
    // const id = mainInfo.accommodation.id
    // console.log(id)
    console.log(mainInfo)
    console.log(mainInfo?.data.accommodation)
    interface FormData {
        locality: string,
        latitude: number|undefined,
        longitude: number|undefined,
        street: string,
        suite: string,
        zip_code: string
    }
    const [formState, setFormState] = useState<FormData>({
        locality: "",
        latitude: undefined,
        longitude: undefined,
        street: "",
        suite: "",
        zip_code: ""
        })
    
      const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === 'latitude' || event.target.name === 'longitude') {
            setFormState({
                ...formState,
                [event.target.name]: parseFloat(Number(event.target.value).toFixed(6)),
              });
        } else {
            setFormState({
                ...formState,
                [event.target.name]: event.target.value,
            });
        }
        console.log('Input!')
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            locality: { type: "string", value: formState.locality },
            latitude: { type: "number", value: formState.latitude },
            longitude: { type: "number", value: formState.longitude },
            suite: { type: "string", value: formState.suite },
            zip_code: { type: "string", value: formState.zip_code },
            street: { type: "string", value: formState.street },
          };
        if(mainInfo?.data.accommodation.id !== undefined) {
            console.log(formState)
            const url = `https://cktour.club/api/v1/accommodations/${mainInfo.data.accommodation.id}/geolocations`;
            fetch(url, {
              method: "POST",
              headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
              },
              body: JSON.stringify(data),
            })
              .then(response => response.json())
              .then(json => console.log(json));
          } else {
            console.log("Error: accommodation id is undefined");
          }
        
    };
    return(
        <Box sx={{
            width: '960px',
            background: '#FAFAFA',
            boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.25)',
            borderRadius: '15px',
            padding: '20px',
            margin: '30px auto'
        }}
        >
            {mainInfo!== undefined ?
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