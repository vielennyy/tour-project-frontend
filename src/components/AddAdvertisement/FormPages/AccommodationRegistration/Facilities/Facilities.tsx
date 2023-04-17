import { useState, ChangeEvent } from 'react'
import { Box, Typography, FormControl, TextField, Button, Input, Grid, Checkbox } from '@mui/material'
import { MainAccommodationInfoProps } from 'src/components/TypesAndInterfaces'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import cardpayment from './cardpayment.svg'
import parking from './parking.svg'
import breakfast from './breakfast.svg'
import wifi from './wifi.svg'
import pet from './pet.svg'
import { Data } from '@react-google-maps/api';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface ComponentProps {
    mainInfo: MainAccommodationInfoProps|undefined,
    setMainInfo: React.Dispatch<React.SetStateAction<MainAccommodationInfoProps|undefined>>,
}

export const Facilities = ({mainInfo, setMainInfo}:ComponentProps) => {
    const [show, setShow] = useState(true)
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
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
                <Typography fontSize={24} fontWeight={500} margin={'20px'}>Додайте зручності вашого житла</Typography>
                <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
                <FormControl sx={{display: 'flex', flexDirection: 'column'}}>
                    <Box sx={{display:'flex', justifyContent:'space-between', '& *': { cursor: 'pointer' }}}>
                        <Checkbox icon={<img width={'150px'} src={cardpayment}/>} checkedIcon={<Box
                            sx={{
                                height: '105px',
                                border: `4px solid #EF5151`,
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'border-color 0.2s ease-in-out',
                                '&:hover': {
                                borderColor: 'gray',
                                },
                            }}
                            >
                            <img
                                width={'150px'}
                                src={cardpayment}
                                alt={`Your image`}
                            />
                            </Box>} />
                            <Checkbox icon={<img width={'150px'} src={parking}/>} checkedIcon={<Box
                            sx={{
                                height: '105px',
                                border: `4px solid #EF5151`,
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'border-color 0.2s ease-in-out',
                                '&:hover': {
                                borderColor: 'gray',
                                },
                            }}
                            >
                            <img
                                width={'150px'}
                                src={parking}
                                alt={`Your image`}
                            />
                            </Box>} />
                            <Checkbox icon={<img width={'150px'} src={wifi}/>} checkedIcon={<Box
                            sx={{
                                height: '105px',
                                border: `4px solid #EF5151`,
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'border-color 0.2s ease-in-out',
                                '&:hover': {
                                borderColor: 'gray',
                                },
                            }}
                            >
                            <img
                                width={'150px'}
                                src={wifi}
                                alt={`Your image`}
                            />
                            </Box>} />
                            <Checkbox icon={<img width={'150px'} src={breakfast}/>} checkedIcon={<Box
                            sx={{
                                height: '105px',
                                border: `4px solid #EF5151`,
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'border-color 0.2s ease-in-out',
                                '&:hover': {
                                borderColor: 'gray',
                                },
                            }}
                            >
                            <img
                                width={'150px'}
                                src={breakfast}
                                alt={`Your image`}
                            />
                            </Box>} />
                            <Checkbox icon={<img width={'150px'} src={pet}/>} checkedIcon={<Box
                            sx={{
                                height: '105px',
                                border: `4px solid #EF5151`,
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'border-color 0.2s ease-in-out',
                                '&:hover': {
                                borderColor: 'gray',
                                },
                            }}
                            >
                            <img
                                width={'150px'}
                                src={pet}
                                alt={`Your image`}
                            />
                            </Box>} />
                        </Box>
                    <Typography fontSize={24} fontWeight={500} margin={'20px'}>Заселення та від’їзд</Typography>
                    <Typography fontSize={18} marginBottom={'5px'}>Час заселення</Typography>
                    <Box sx={{display: 'flex', justifyContent:'space-between'}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', width: '400px'}}>
                            <Typography fontSize={18} marginBottom={'5px'}>Початок</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker />
                            </LocalizationProvider>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', width: '400px'}}>
                            <Typography fontSize={18} marginBottom={'5px'}>Кінець</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker />
                            </LocalizationProvider>
                        </Box>
                    </Box>
                    <Typography fontSize={18} marginBottom={'5px'}>Час від’їзду</Typography>
                    <Box sx={{display: 'flex', justifyContent:'space-between'}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', width: '400px'}}>
                            <Typography fontSize={18} marginBottom={'5px'}>Початок</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker />
                            </LocalizationProvider>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', width: '400px'}}>
                            <Typography fontSize={18} marginBottom={'5px'}>Кінець</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker />
                            </LocalizationProvider>
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