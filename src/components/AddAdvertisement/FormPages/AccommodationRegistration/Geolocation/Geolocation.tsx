import { useState, ChangeEvent } from 'react'
import { Box, Typography, FormControl, TextField, Button, Input, Grid } from '@mui/material'
import { MainAccommodationInfoProps } from 'src/components/TypesAndInterfaces'

interface ComponentProps {
    mainInfo: MainAccommodationInfoProps|undefined,
    // setMainInfo: React.Dispatch<React.SetStateAction<MainAccommodationInfoProps|undefined>>,
    // showMainInfo: boolean,
    // setShowMainInfo: React.Dispatch<React.SetStateAction<boolean>>,
    showGeolocation: boolean,
    setShowGeolocation: React.Dispatch<React.SetStateAction<boolean>>,
    // showFacilities: boolean,
    setShowFacilities: React.Dispatch<React.SetStateAction<boolean>>,
    // isFinished: boolean,
    // setFinished: React.Dispatch<React.SetStateAction<boolean>>,
}

// interface data {
//     accommodation: {
//         id?: number;
//         name: string;
//         description: string;
//         kind: string;
//         person: string;
//         phone: string;
//         email: string;
//         reg_code: string;
//         address_owner: string;
//         status: string;
//         created_at: string;
//         updated_at: string;
//         user_id: number;
//     }
//     image_urls: []
// }

export const Geolocation = ({mainInfo, showGeolocation, setShowGeolocation, setShowFacilities}:ComponentProps) => {
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
            "locality": formState.locality,
            "latitude": Number(formState.latitude),
            "longitude": Number(formState.longitude),
            "suite": formState.suite,
            "zip_code": formState.zip_code,
            "street": formState.street,
          };
        if(mainInfo?.data.accommodation.id !== undefined) {
            console.log(data)
            console.log(JSON.stringify(data))
            const url = `https://cktour.club/api/v1/accommodations/${mainInfo.data.accommodation.id}/geolocations`;
            fetch(url, {
              method: "POST",
                headers: {'Content-Type': 'application/json',
                Authorization: "Bearer " + localStorage.getItem('token')
              },
              body: JSON.stringify(data),
            })
              .then(response => {
                if(response.ok) {
                    response.json()
                    setShowFacilities(true)
                    setShowGeolocation(false)
                }
                })
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
            padding: '20px 60px',
            margin: '30px auto',
        }}
        >
            {showGeolocation ?
            <>
                <Typography fontFamily={'Gilroy'} fontSize={24} fontWeight={500} margin={'35px 5px'}>Розташування</Typography>
                <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
                <FormControl sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography fontFamily={'Gilroy'} fontSize={18} marginBottom={'5px'}>Населений пункт</Typography>
                    <TextField name='locality'  id="outlined-basic" required onChange={handleFormChange}/>
                    <Typography fontFamily={'Gilroy'} fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Вулиця</Typography>
                    <TextField name='street' id="outlined-basic" required onChange={handleFormChange}/>
                    <Box sx={{display:'flex', justifyContent:'space-between'}}>
                        <Box sx={{display:'flex', flexDirection:'column', width:'60%'}}>
                            <Typography fontFamily={'Gilroy'} fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Номер</Typography>
                            <TextField name='suite' id="outlined-basic" onChange={handleFormChange}/>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'column'}}>
                            <Typography fontFamily={'Gilroy'} fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Поштовий індекс</Typography>
                            <TextField name='zip_code' id="outlined-basic" onChange={handleFormChange}/>
                        </Box>
                    </Box>
                    <Typography fontFamily={'Gilroy'} fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Введіть координати вашого житла</Typography>
                    <Box sx={{display:'flex', justifyContent:'space-between'}}>
                        <Box sx={{display:'flex', flexDirection:'column', width:'60%'}}>
                            <Typography fontFamily={'Gilroy'} fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Широта</Typography>
                            <TextField name='latitude' id="outlined-basic" onChange={handleFormChange}/>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'column'}}>
                            <Typography fontFamily={'Gilroy'} fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Довгота</Typography>
                            <TextField name='longitude' id="outlined-basic" onChange={handleFormChange}/>
                        </Box>
                    </Box>
                    <Button variant="contained" type='submit' sx={{width: '200px', margin: '50px 0px', textTransform:'none', fontSize:'20px', padding:'10px 30px'}}>Далі</Button>
                </FormControl>
                </form>

            </>
           :
            <Typography fontFamily={'Gilroy'} fontSize={24} fontWeight={500}>Розташування</Typography>
        }
        </Box>
    )
}