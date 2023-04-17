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
    console.log(mainInfo)
    interface FormData {
        geolocationable_type: string,
        geolocationable_id: number|undefined,
        locality: string,
        latitude: string,
        longitude: string,
        street: string,
        suite: string,
        zip_code: string
    }
    const [formState, setFormState] = useState<FormData>({
        geolocationable_type: 'Accomodation',
        geolocationable_id: mainInfo?.id ? +mainInfo?.id : undefined,
        locality: "",
        latitude: "",
        longitude: "",
        street: "",
        suite: "",
        zip_code: ""
        });
    
      const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            
    
        setFormState({
          ...formState,
          [event.target.name]: event.target.value,
        });
        console.log('Input!')
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formState)
        // fetch(`https://cktour.club/api/v1/accommodations`, {
        //         method: "POST",
        //         headers: {
        //             // 'Content-Type': 'application/json',
        //             Authorization: "Bearer " + localStorage.getItem('token')
        //           },
        //         // { Authorization: "Bearer " + userToken },
        //         body: JSON.stringify(formState),
        //     })
        //     .then(response => response.json())
        //     .then(json => console.log(json));
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
            {/* {mainInfo!== undefined ? */}
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
            {/* :
            <Typography fontSize={24} fontWeight={500}>Основна інформація</Typography>
            } */}
        </Box>
    )
}