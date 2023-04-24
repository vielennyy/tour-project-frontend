import { useState, ChangeEvent, useEffect } from 'react'
import { Box, Typography, FormControl, TextField, Button, Checkbox, FormControlLabel } from '@mui/material'
import { Accommodation, MainAccommodationInfoProps, AccommodationRoomInfo, AccommodationRoomResponce, RoomAmenities } from 'src/components/TypesAndInterfaces'

interface myComponentProps {
    accommodation: Accommodation,
}

export const AddRoomInfo = (props:myComponentProps) => {
    const [success, setSuccess] = useState(false)
    const [room, setRoom] = useState<AccommodationRoomResponce>()
    const [show, setShow] = useState(true)
    const userToken = localStorage.getItem('token')

    const [formState, setFormState] = useState<AccommodationRoomInfo>({
        name: '',
        places: '',
        quantity: '',
        description: '',
        bed: '',
        price_per_night: '',
        images: [],
      });

    const [roomAmentities, setRoomAmentities] = useState<RoomAmenities>({
        conditioner: false,
        tv: false,
        refrigerator: false,
        kettle: false,
        mv_owen: false,
        hair_dryer: false,
        nice_view: false,
        inclusive: false,
    })


    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
        ...formState,
        [event.target.name]: event.target.value,
        });
        console.log('Input!')
    };

    function convertFile(files: FileList|null) {
        if (files) {
          const filesList = Object.entries(files).map(([key, value]) => (value));
          setFormState({
            ...formState,
            images: filesList
          });
        }
    }

    const handleSubmitRoomRegistration = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { name, description, places, quantity, bed, price_per_night, images} = formState;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('places', places);
        formData.append('quantity', quantity);
        formData.append('bed', bed);
        formData.append('price_per_night', price_per_night);
        if (images !== undefined) {
            for (let i = 0; i < images.length; i++) {
                formData.append('images[]', images[i]);
            }
        }

        fetch(`https://cktour.club/api/v1/accommodations/${props.accommodation.id}/rooms`, {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userToken
                },
                body: formData})
            .then(response => response.json())
            .then(json => {
                console.log(json.data)
                setRoom(json.data)})
            .catch(error => console.error('Error:', error));
        setShow(false)
    };

    const handleSubmitRoomAmentities = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();        
        fetch(`https://cktour.club/api/v1/accommodations/${props.accommodation.id}/rooms/${room?.room.id}/amenities`, {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userToken
                },
                body: JSON.stringify(roomAmentities)})
            .then(response => {
                if(response.ok){
                    response.json()
                    setSuccess(true)
                }
            })
            .then(json => console.log(json))
            .catch(error => console.error('Error:', error));
    }

    return(
        <>
        {success ?
            <Typography fontSize={24} fontWeight={500} sx={{padding: '50px'}}>Вітаю! Кімната успішно додана</Typography>
            :
            <>
                <Box sx={{
                    minWidth: '400px',
                    background: '#FAFAFA',
                    boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.25)',
                    borderRadius: '15px',
                    padding: '30px',
                    margin: '10px 30px'
                }}
                >
                    {show ?
                    <>
                        <form lang="uk" onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmitRoomRegistration(event)}>
                        <FormControl sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography fontSize={18} marginBottom={'5px'}>Введіть назву номеру</Typography>
                            <TextField name='name'  id="outlined-basic" required onChange={handleFormChange}/>
                            <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Додайте опиc номеру</Typography>
                            <TextField name='description' id="outlined-basic" required onChange={handleFormChange} multiline/>
                            <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Кількість номерів цього типу</Typography>
                            <TextField name='quantity' id="outlined-basic" required onChange={handleFormChange}/>
                            <Typography fontSize={18} marginBottom={'5px'}>Кількість спальних місць</Typography>
                            <TextField name='places'  id="outlined-basic" required onChange={handleFormChange}/>
                            <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Тип ліжка</Typography>
                            <TextField name='bed' id="outlined-basic" required onChange={handleFormChange}/>
                            <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Ціна за одну ніч</Typography>
                            <TextField name='price_per_night' id="outlined-basic" required onChange={handleFormChange}/>
                            <Typography fontSize={24} fontWeight={500}>Додайте фото номеру</Typography>
                            <input type="file" onChange={(e)=>{convertFile(e.target.files)}} multiple/>
                            <Button variant="contained" type='submit' sx={{width: '200px', margin: '20px 0px', textTransform:'none', fontSize:'20px', padding:'10px 30px'}}>Далі</Button>
                        </FormControl>
                        </form>
                    </>
                    :
                    <Typography fontSize={24} fontWeight={500}>Основна інформація</Typography>
                    }
                </Box>
                <Box sx={{
                    minWidth: '400px',
                    background: '#FAFAFA',
                    boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.25)',
                    borderRadius: '15px',
                    padding: '30px',
                    margin: '10px 30px'
                }}
                >
                    {
                    !show ?
                    <>
                        <Typography fontSize={24} fontWeight={500}>Додати зручності номеру</Typography>

                        <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmitRoomAmentities(event)}>
                        <FormControl sx={{display: 'flex', flexDirection: 'column'}}>
                            <FormControlLabel 
                                control={
                                    <Checkbox name={'conditioner'} onChange={(event) => {
                                        setRoomAmentities(prevState => {
                                        return { ...prevState, conditioner: event.target.checked };
                                        })
                                    }}
                                />} 
                                label="Кондиціонер" 
                            />
                            <FormControlLabel control={<Checkbox name={'tv'}
                                    onChange={(event)=>{
                                        setRoomAmentities(prevState => {
                                            return { ...prevState, tv: event.target.checked };
                                        })
                                    }}
                                    />} 
                                label="Телевізор" />
                            <FormControlLabel control={<Checkbox name={'refrigerator'}
                                    onChange={(event) => {
                                        setRoomAmentities(prevState => {
                                            return { ...prevState, refrigerator: event.target.checked };
                                        })
                                }}
                                    />} label="Холодильник" />
                            <FormControlLabel control={<Checkbox name={'kettle'}
                                    onChange={(event)=>{
                                        setRoomAmentities(prevState => {
                                            return { ...prevState, kettle: event.target.checked };
                                        })
                                    }}
                                    />} label="Чайник" />
                            <FormControlLabel control={<Checkbox name={'mv_owen'}
                                    onChange={(event)=>{
                                        setRoomAmentities(prevState => {
                                            return { ...prevState, mv_owen: event.target.checked };
                                        })
                                    }}/>} label="Мікрохвильовка" />
                            <FormControlLabel control={<Checkbox name={'hair_dryer'}
                                    onChange={(event)=>{
                                        setRoomAmentities(prevState => {
                                            return { ...prevState, hair_dryer: event.target.checked };
                                        })
                                    }}/>} label="Фен" />
                            <FormControlLabel control={<Checkbox name={'nice_view'}
                                    onChange={(event)=>{
                                        setRoomAmentities(prevState => {
                                            return { ...prevState, nice_view: event.target.checked };
                                        })
                                    }}/>} label="Гарний вид з вікна" />    
                            <FormControlLabel control={<Checkbox name={'inclusive'}
                                    onChange={(event)=>{
                                        setRoomAmentities(prevState => {
                                            return { ...prevState, inclusive: event.target.checked };
                                        })
                                    }}/>} label="Все включено" />
                            <Button variant="contained" type='submit' sx={{width: '200px', margin: '20px 0px', textTransform:'none', fontSize:'20px', padding:'10px 30px'}}>Далі</Button>
                        </FormControl>
                        </form>

                    </>
                    :
                    <Typography fontSize={24} fontWeight={500}>Додати зручності номеру</Typography>
                    }
                </Box>
            </>}
         </>
    )
}

