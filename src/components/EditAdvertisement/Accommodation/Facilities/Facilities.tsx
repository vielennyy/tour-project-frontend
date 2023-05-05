import { Accommodation, MainAccommodationInfoProps, AccommodationRoomInfo, AccommodationRoomResponce, RoomAmenities, AccommodationFormValues, AccommodationData } from 'src/components/TypesAndInterfaces'


import { useState, useEffect } from 'react'
import { Box, Typography, FormControl, TextField, Button, Input, Grid, Checkbox } from '@mui/material'
import cardpayment from '../../../../assets/icons/accommodation/cardpayment.svg'
import parking from '../../../../assets/icons/accommodation/parking.svg'
import breakfast from '../../../../assets/icons/accommodation/breakfast.svg'
import wifi from '../../../../assets/icons/accommodation/wifi.svg'
import pet from '../../../../assets/icons/accommodation/pet.svg'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface Facilities {
    id: number;
    created_at: string;
    updated_at: string;
    accommodation_id: number;
    data: {
        credit_card: boolean;
        free_parking: boolean;
        wi_fi: boolean;
        breakfast: boolean;
        pets: boolean;
    };
    credit_card: boolean;
    free_parking: boolean;
    wi_fi: boolean;
    breakfast: boolean;
    pets: boolean;
    checkin_start: string | null;
    checkin_end: string | null;
    checkout_start: string | null;
    checkout_end: string | null;
}
interface FormData {
    checkin_start: string,
    checkin_end: string,
    checkout_start: string,
    checkout_end: string,
    credit_card: boolean,
    free_parking: boolean,
    wi_fi: boolean,
    breakfast: boolean,
    pets: boolean
}

interface ComponentProps {
    accommodation: Accommodation,
    mainInfo: MainAccommodationInfoProps|undefined,
    showMainInfo: boolean,
    setShowMainInfo: React.Dispatch<React.SetStateAction<boolean>>,
    showGeolocationInfo: boolean,
    setShowGeolocationInfo: React.Dispatch<React.SetStateAction<boolean>>,
    showFacilitiesInfo: boolean,
    setShowFacilitiesInfo: React.Dispatch<React.SetStateAction<boolean>>,
    setFinished: React.Dispatch<React.SetStateAction<boolean>>
}

export const Facilities = (props:ComponentProps) => {
    const [show, setShow] = useState(true)
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const userToken = localStorage.getItem('token')
    const today = new Date();

    const [facilities, setFacilities] = useState<Facilities>();
      
      useEffect(() => {
        fetch(`https://cktour.club/api/v1/accommodations/${props.accommodation.id}/facilities`)
          .then(response => response.json())
          .then(json => setFacilities(json));
      }, []);

      console.log(facilities)

    const [formState, setFormState] = useState<FormData>({
        checkin_start: '',
        checkin_end: '',
        checkout_start: '',
        checkout_end: '',
        credit_card: false,
        free_parking: false,
        wi_fi: false,
        breakfast: false,
        pets: false
        });
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formState)
            fetch(`https://cktour.club/api/v1/accommodations/${props.accommodation.id}/facilities/${facilities?.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + userToken
                },
                body: JSON.stringify(formState),
            })
            .then(response => {
                if(response.ok) {
                    response.json()
                    props.setShowFacilitiesInfo(false)
                }
            })
            .then(json => console.log(json))
            .catch(error => console.error('Error:', error));
        }


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
            {props.showFacilitiesInfo ?
            <>
                <Typography fontSize={24} fontWeight={500} margin={'20px'}>Додайте зручності вашого житла</Typography>
                <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
                <FormControl sx={{display: 'flex', flexDirection: 'column'}}>
                    <Box sx={{display:'flex', justifyContent:'space-between', '& *': { cursor: 'pointer' }}}>
                        <Checkbox name={'credit_card'} onChange={(event) => {
                            setFormState(prevState => {
                                return { ...prevState, credit_card: event.target.checked };
                            })
                            }}
                            icon={<img width={'150px'} src={cardpayment}/>} 
                            checkedIcon={<Box
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
                        <Checkbox name={'free_parking'}
                            onChange={(event)=>{
                                setFormState(prevState => {
                                    return { ...prevState, free_parking: event.target.checked };
                                })
                            }}
                            icon={<img width={'150px'} src={parking}/>} checkedIcon={<Box
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
                            <Checkbox name={'wi_fi'}
                            onChange={(event) => {
                                setFormState(prevState => {
                                    return { ...prevState, wi_fi: event.target.checked };
                                })
                           }}
                            icon={<img width={'150px'} src={wifi}/>} checkedIcon={<Box
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
                            <Checkbox name={'breakfast'}
                            onChange={(event)=>{
                                setFormState(prevState => {
                                    return { ...prevState, breakfast: event.target.checked };
                                })
                            }}
                            icon={<img width={'150px'} src={breakfast}/>} checkedIcon={<Box
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
                            <Checkbox name={'pets'}
                            onChange={(event)=>{
                                setFormState(prevState => {
                                    return { ...prevState, pets: event.target.checked };
                                })
                            }}icon={<img width={'150px'} src={pet}/>} checkedIcon={<Box
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
                                <DatePicker 
                                    defaultValue={today}
                                    label="Choose a date"
                                    value={selectedDate}
                                    onChange={(newValue)=>{
                                        if(newValue)
                                            setFormState(prevState => {
                                                return { ...prevState, checkin_start: newValue.toISOString() };
                                        })
                                    }}
                                    />
                            </LocalizationProvider>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', width: '400px'}}>
                            <Typography fontSize={18} marginBottom={'5px'}>Кінець</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker 
                                    defaultValue={today}
                                    label="Choose a date"
                                    value={selectedDate}
                                    onChange={(newValue)=>{
                                        if(newValue)
                                            setFormState(prevState => {
                                                return { ...prevState, checkin_end: newValue.toISOString() };
                                        })
                                    }}
                                    />
                            </LocalizationProvider>
                        </Box>
                    </Box>
                    <Typography fontSize={18} marginBottom={'5px'}>Час від’їзду</Typography>
                    <Box sx={{display: 'flex', justifyContent:'space-between'}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', width: '400px'}}>
                            <Typography fontSize={18} marginBottom={'5px'}>Початок</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker 
                                defaultValue={today}
                                label="Choose a date"
                                value={selectedDate}
                                onChange={(newValue)=>{
                                    if(newValue)
                                        setFormState(prevState => {
                                            return { ...prevState, checkout_start: newValue.toISOString() };
                                    })
                                }}
                                />
                            </LocalizationProvider>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', width: '400px'}}>
                            <Typography fontSize={18} marginBottom={'5px'}>Кінець</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker 
                                    defaultValue={today}
                                    label="Choose a date"
                                    value={selectedDate}
                                    onChange={(newValue)=>{
                                        if(newValue)
                                            setFormState(prevState => {
                                                return { ...prevState, checkout_end: newValue.toISOString() };
                                        })
                                    }}
                                    />
                            </LocalizationProvider>
                        </Box>
                    </Box>
                    <Button variant="contained" type='submit' sx={{width: '200px', margin: '20px 0px', textTransform:'none', fontSize:'20px', padding:'10px 30px'}}>Далі</Button>
                </FormControl>
                </form>
            </>
            :
            <Typography fontSize={24} fontWeight={500}>Зручності. Заселення та від’їзд</Typography>
            } 
        </Box>
    )
}

