import { useState, ChangeEvent } from 'react'
import { Box, Typography, FormControl, TextField, Button, Input, Grid, Checkbox } from '@mui/material'
import { MainAccommodationInfoProps } from 'src/components/TypesAndInterfaces'
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

interface CheckBoxValues {
    credit_card: boolean,
    free_parking: boolean,
    wi_fi: boolean,
    breakfast: boolean,
    pets: boolean
}



export const Facilities = ({mainInfo, setMainInfo}:ComponentProps) => {
    const [isFreeParking, setIsFreeParking] = useState(false)
    const [creditCard, setCreditCard] = useState(false)
    const [hasWifi, setHasWifi] = useState(false)
    const [hasBreakfast, setHasBreakfast] = useState(false)
    const [pets, setPets] = useState(false)
    const [show, setShow] = useState(true)
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [departureStartTime, setDepartureStartTime] = useState<Date | null>(null);
    const [departureEndTime, setDepartureEndTime] = useState<Date | null>(null);
    const userToken = localStorage.getItem('token')
    const [checkboxValues, setCheckboxValues] = useState<CheckBoxValues>({
        credit_card: false,
        free_parking: false,
        wi_fi: false,
        breakfast: false,
        pets: false
      });
    const today = new Date();

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setCheckboxValues({
          ...checkboxValues,
          [name]: checked,
        });
      };

    const handleStartDateChange = (date: Date | null) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date: Date | null) => {
        setEndDate(date);
    };

    const handleDepartureStartTimeChange = (date: Date | null) => {
        setDepartureStartTime(date);
    };

    const handleDepartureEndTimeChange = (date: Date | null) => {
        setDepartureEndTime(date);
    };
    console.log(mainInfo)
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

    const handleChangeCheckBox = (event: React.ChangeEvent<HTMLFormElement>) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.checked,
        });
    }

    // const handleChangeDate = () => {
    //     setFormState({
    //         ...formState,
    //         [event.target.name]: event.target.checked,
    //     });
    // }
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // if (startDate && endDate && departureStartTime && departureEndTime) {
        //     setFormState({
        //         ...formState,
        //         checkin_start: startDate.toISOString(),
        //         checkin_end: endDate.toISOString(),
        //         checkout_start: departureStartTime.toISOString(),
        //         checkout_end: departureEndTime.toISOString(),
        //       })
        // const formData = new FormData()
        // formData.append('checkin_start', formState.checkin_start)
        // formData.append('checkin_end', formState.checkin_end)
        // formData.append('checkout_start', formState.checkout_start)
        // formData.append('checkout_end', formState.checkout_end)
        // formData.append('wi_fi', formState.wi_fi.toString())
        // formData.append('breakfast', formState.breakfast)

              if(mainInfo?.data.accommodation.id !== undefined) {
                console.log(formState)
                fetch(`https://cktour.club/api/v1/accommodations/${mainInfo.data.accommodation.id}/facilities`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + userToken
                },
                body: JSON.stringify(formState),
            })
            .then(response => response.json())
            .then(json => setMainInfo(json))
            .catch(error => console.error('Error:', error));
                } else {
                    console.log("Error: accommodation id is undefined");
                
                // console.log(formState)
                // fetch(`https://cktour.club/api/v1/accommodations`, {
                //     method: "GET",
                //     headers: {
                //         Authorization: "Bearer " + localStorage.getItem('token')
                //     },
                //     // body: JSON.stringify(formState),
                //     })
                //     .then(response => response.json())
                //     .then(json => console.log(json)); 
              }
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
            {/* {mainInfo!== undefined ? */}
            <>
                <Typography fontSize={24} fontWeight={500} margin={'20px'}>Додайте зручності вашого житла</Typography>
                <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
                <FormControl sx={{display: 'flex', flexDirection: 'column'}}>
                    <Box sx={{display:'flex', justifyContent:'space-between', '& *': { cursor: 'pointer' }}}>
                        <Checkbox name={'credit_card'} onChange={(event) => {
                            // setCreditCard(event.target.checked);
                            // console.log(creditCard)
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
                                    onChange={()=>{
                                        if(selectedDate)
                                            setFormState(prevState => {
                                                return { ...prevState, checkin_start: selectedDate.toISOString() };
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
                                    onChange={()=>{
                                        if(selectedDate)
                                            setFormState(prevState => {
                                                return { ...prevState, checkin_end: selectedDate.toISOString() };
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
                                onChange={()=>{
                                    if(selectedDate)
                                        setFormState(prevState => {
                                            return { ...prevState, checkout_start: selectedDate.toISOString() };
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
                                    onChange={()=>{
                                        if(selectedDate)
                                            setFormState(prevState => {
                                                return { ...prevState, checkout_end: selectedDate.toISOString() };
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
            {/* // :
            // <Typography fontSize={24} fontWeight={500}>Зручності. Заселення та від’їзд</Typography>
            // } */}
        </Box>
    )
}

