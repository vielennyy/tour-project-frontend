import { useState, ChangeEvent, useEffect } from 'react'
import { Box, Typography, FormControl, TextField, Button, Checkbox, FormControlLabel } from '@mui/material'
import { Accommodation, MainAccommodationInfoProps, AccommodationRoomInfo, AccommodationRoomResponce, RoomAmenities, AccommodationFormValues, AccommodationData } from 'src/components/TypesAndInterfaces'
import house from '../../../../assets/icons/accommodation/home.svg'
import apartment from '../../../../assets/icons/accommodation/apartment.svg'
import hostel from '../../../../assets/icons/accommodation/hostel.svg'
import hotel from '../../../../assets/icons/accommodation/hotel.svg'
import other from '../../../../assets/icons/accommodation/other.svg'

interface ComponentProps {
    accommodation: Accommodation,
    showMainInfo: boolean,
    setShowMainInfo: React.Dispatch<React.SetStateAction<boolean>>,
    showGeolocationInfo: boolean,
    setShowGeolocationInfo: React.Dispatch<React.SetStateAction<boolean>>,
    showFacilitiesInfo: boolean,
    setShowFacilitiesInfo: React.Dispatch<React.SetStateAction<boolean>>,
}

interface EditInfoFormData {
    name: string,
    description: string,
    address_owner: string,
    phone: string,
    email: string,
    kind: string,
    user_id: Number,
    reg_code: string,
    person: string,
    status: string,
    images: File[],
}

interface EditGeolocationFormData {
    locality: string,
    latitude: number|undefined,
    longitude: number|undefined,
    street: string,
    suite: string,
    zip_code: string
}

export const EditAccommodationInfo = (props:ComponentProps) => {
    const [show, setShow] = useState(true)
    const typeAccommodationImages = [house, hotel, apartment, hostel, other];
    const [clickedIndex, setClickedIndex] = useState(-1);
    const [type, setType] = useState('Інше')
    const userToken = localStorage.getItem('token')

    console.log(props.accommodation)

    const [infoForm, setInfoForm] = useState<EditInfoFormData>({
        name: props.accommodation.name,
        description: props.accommodation.description,
        address_owner: props.accommodation.address_owner,
        phone: props.accommodation.phone,
        email: props.accommodation.email,
        kind: props.accommodation.kind,
        user_id: Number(localStorage.getItem('id')),
        reg_code: props.accommodation.reg_code,
        person: props.accommodation.person,
        status: props.accommodation.status,
        images: [],
      });

      
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
    };

    const handleTypeAccommodationClick = (index:number) => {
        setClickedIndex(index);
        switch (index) {
            case 0:
            setType('Будинок');
            break;
            case 1:
            setType('Готель');
            break;
            case 2:
            setType('Апартаменти');
            break;
            case 3:
            setType('Хостел');
            break;
        }
    };

    const handleMainInfoFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInfoForm({
        ...infoForm,
        kind: type,
        [event.target.name]: event.target.value,
        });
        console.log('Input!')
    };

    function convertFile(files: FileList|null) {
        if (files) {
          const filesList = Object.entries(files).map(([key, value]) => (value));
          setInfoForm({
            ...infoForm,
            images: filesList
          });
        }
    }

    const handleMainInfoSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { name, description, address_owner, phone, status, email, kind, reg_code, person, images} = infoForm;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('address_owner', address_owner);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('kind', kind);
        formData.append('status', props.accommodation.status);
        formData.append('reg_code', reg_code);
        formData.append('person', person);
        if (images !== undefined) {
            for (let i = 0; i < images.length; i++) {
                formData.append('images[]', images[i]);
            }
        }
        console.log(infoForm)
        fetch(`https://cktour.club/api/v1/accommodations/${props.accommodation.id}`, {
                method: "PUT",
                headers: {
                    // 'Content-Type': 'application/json',
                    // 'Content-Type': 'multipart/form-data',
                    // 'accept': '*/*',
                    Authorization: "Bearer " + userToken
                },
                body: formData})
                
            .then(response => {
                if(response.ok){
                    response.json()
                    props.setShowMainInfo(false)
                    props.setShowGeolocationInfo(true)
                }
            })
            .then(json => console.log(json))
            .catch(error => console.error('Error:', error));
    };

    return(
        <>
        <Box sx={{
            width: '600px',
            background: '#FAFAFA',
            boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.25)',
            borderRadius: '15px',
            padding: '20px',
            margin: '30px auto'
        }}
        >
            {props.showMainInfo ?
            <>
                <Typography fontSize={24} fontWeight={500}>Оберіть тип житла:</Typography>
                <Box sx={{display:'flex', justifyContent:'space-between', '& *': { cursor: 'pointer' }}}>
                    {typeAccommodationImages.map((image, index) => (
                        <Box
                        key={index}
                        sx={{
                            height: '73px',
                            border: `4px solid ${index === clickedIndex ? '#EF5151' : 'transparent'}`,
                            borderRadius: '5px',
                            cursor: 'pointer',
                            transition: 'border-color 0.2s ease-in-out',
                            '&:hover': {
                            borderColor: 'gray',
                            },
                        }}
                        onClick={() => handleTypeAccommodationClick(index)}
                        >
                        <img
                            width={'100px'}
                            src={image}
                            alt={`Your image ${index}`}
                        />
                        </Box>
                    ))}
                </Box>
                <form lang="uk" onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleMainInfoSubmit(event)}>
                <FormControl sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography fontSize={18} marginBottom={'5px'}>Назва вашого житла</Typography>
                    <TextField name='name'  id="outlined-basic" defaultValue={props.accommodation.name} required onChange={handleMainInfoFormChange}/>
                    <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Контактний телефон</Typography>
                    <TextField name='phone' id="outlined-basic" defaultValue={props.accommodation.phone} required onChange={handleMainInfoFormChange}/>
                    <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Контактний e-mail</Typography>
                    <TextField name='email' id="outlined-basic" defaultValue={props.accommodation.email} required onChange={handleMainInfoFormChange}/>
                    <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Додайте опис вашого житла</Typography>
                    <TextField name='description' id="outlined-basic" defaultValue={props.accommodation.description} required onChange={handleMainInfoFormChange} multiline/>
                    <Typography fontSize={24} fontWeight={500}>Додайте інформацію власника</Typography>
                    <Typography fontSize={18} marginBottom={'5px'}>Повне ім’я юридичної особи</Typography>
                    <TextField name='person'  id="outlined-basic" defaultValue={props.accommodation.person} required onChange={handleMainInfoFormChange}/>
                    <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Код ЄДРПОУ/ІПН</Typography>
                    <TextField name='reg_code' id="outlined-basic" defaultValue={props.accommodation.reg_code} required onChange={handleMainInfoFormChange}/>
                    <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Адреса юридичної особи</Typography>
                    <TextField name='address_owner' id="outlined-basic" defaultValue={props.accommodation.address_owner} required onChange={handleMainInfoFormChange}/>
                    <input type="file" onChange={(e)=>{convertFile(e.target.files)}} multiple/>
                    {/* <input type="file" onChange={handleFileLoad} multiple/> */}
                    <Button variant="contained" type='submit' sx={{width: '200px', margin: '20px 0px', textTransform:'none', fontSize:'20px', padding:'10px 30px'}}>Далі</Button>
                </FormControl>
                </form>
            </>
            :
            <Typography fontSize={24} fontWeight={500}>Основна інформація</Typography>
            }
        </Box>
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
        </>
    )
}