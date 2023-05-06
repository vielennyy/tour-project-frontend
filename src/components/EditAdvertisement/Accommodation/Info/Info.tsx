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
    mainInfo: MainAccommodationInfoProps|undefined,
    setMainInfo: React.Dispatch<React.SetStateAction<MainAccommodationInfoProps|undefined>>,
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
    // user_id: Number,
    reg_code: string,
    person: string,
    status: string,
    images: File[]|string[],
}

export const Info = ({accommodation, setMainInfo, showMainInfo, setShowMainInfo, setShowGeolocationInfo, ...rest}:ComponentProps) => {
    const [show, setShow] = useState(true)
    const typeAccommodationImages = [house, hotel, apartment, hostel, other];
    const [clickedIndex, setClickedIndex] = useState(-1);
    const [type, setType] = useState('Інше')
    const userToken = localStorage.getItem('token')
    const [isValidEmail, setIsValidEmail] = useState<boolean>(true)
    const [isValidRegCode, setIsValidRegCode] = useState<boolean>(true)
    const [isValidPhone, setIsValidPhone] = useState<boolean>(true)
    const [isValidDescription, setIsValidDescription] = useState<boolean>(true)
    const [error, setError] = useState<string|null>(null)

    console.log(accommodation)

    const [infoForm, setInfoForm] = useState<EditInfoFormData>({
        name: accommodation.name,
        description: accommodation.description,
        address_owner: accommodation.address_owner,
        phone: accommodation.phone,
        email: accommodation.email,
        kind: accommodation.kind,
        // user_id: Number(localStorage.getItem('id')),
        reg_code: accommodation.reg_code,
        person: accommodation.person,
        status: accommodation.status,
        images: accommodation.images,
      });

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
        if(event.target.name === 'description') {
            setIsValidDescription(event.target.value.length <= 2000)
        }
        if(event.target.name === 'reg_code') {
            setIsValidRegCode(/^\d{8,10}$/.test(event.target.value))
        }
        if(event.target.name === 'phone') {
            let number = event.target.value.slice(2)
            // && /^067|^068|^096|^097|^098|^063|^073|^093|^050|^066|^095|^099/.test(number)
            setIsValidPhone(event.target.value.length === 10 )
        }
        if(event.target.name === 'email') {
            setIsValidEmail(/@/.test(event.target.value))
        }
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

        console.log(images)
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('address_owner', address_owner);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('kind', kind);
        formData.append('status', status);
        formData.append('reg_code', reg_code);
        formData.append('person', person);
        // formData.append('user_id', user_id.toString())
        if (images !== undefined) {
            for (let i = 0; i < images.length; i++) {
                formData.append('images[]', images[i]);
            }
        }
        console.log(infoForm)
        fetch(`https://cktour.club/api/v1/accommodations/${accommodation.id}`, {
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userToken
                },
                body: formData})
                
                .then(response => {
                    console.log(response)
                    if(response.ok) {
                        setShowMainInfo(false)
                        setShowGeolocationInfo(true)
                        setError(null)
                    } else {
                        setError(response.statusText)
                    }
                    return response.json()
                })
                .then(json => setMainInfo(json))
                .catch(error => console.error('Error:', error));
    };

    return(
        <>
        <Box sx={{
            width: '550px',
            background: '#FAFAFA',
            boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.25)',
            borderRadius: '15px',
            padding: '20px',
            margin: '10px auto'
        }}
        >
            {showMainInfo ?
            <>
                <Typography fontFamily={'Gilroy'} fontSize={24} fontWeight={500} margin={'20px 5px'}>Оберіть тип житла:</Typography>
                <Box sx={{display:'flex', margin: '20px 0px', justifyContent:'space-between', '& *': { cursor: 'pointer' }}}>
                    {typeAccommodationImages.map((image, index) => (
                        <Box
                        key={index}
                        sx={{
                            height: '67px',
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
                            width={'90px'}
                            src={image}
                            alt={`Your image ${index}`}
                        />
                        </Box>
                    ))}
                </Box>
                <form lang="uk" onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleMainInfoSubmit(event)}>
                <FormControl sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography fontFamily={'Gilroy'} fontSize={18} marginBottom={'5px'}>Назва вашого житла</Typography>
                    <TextField 
                        name='name'  
                        id="outlined-basic" 
                        defaultValue={accommodation.name} 
                        required 
                        onChange={handleMainInfoFormChange}/>
                    <Typography fontFamily={'Gilroy'} fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Контактний телефон</Typography>
                    <TextField 
                        name='phone' 
                        id="outlined-basic" 
                        defaultValue={accommodation.phone} 
                        required 
                        helperText={isValidPhone ? '' : 'Телефон має бути у форматі 000-000-0000 без пробусків'}
                        error={!isValidPhone}
                        onChange={handleMainInfoFormChange}/>
                    <Typography fontFamily={'Gilroy'} fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Контактний e-mail</Typography>
                    <TextField 
                        name='email' 
                        id="outlined-basic" 
                        defaultValue={accommodation.email} 
                        required 
                        helperText={isValidEmail ? '' : 'Невалідний емейл'}
                        error={!isValidEmail}
                        onChange={handleMainInfoFormChange}/>
                    <Typography fontFamily={'Gilroy'} fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Додайте опис вашого житла</Typography>
                    <TextField 
                        name='description' 
                        id="outlined-basic" 
                        defaultValue={accommodation.description} 
                        required 
                        helperText={isValidDescription ? '' : 'Опис має містити менше 2000 символів'}
                        error={!isValidDescription}
                        onChange={handleMainInfoFormChange} 
                        multiline/>
                    <Typography fontFamily={'Gilroy'} fontSize={24} fontWeight={500} margin={'30px 5px'}>Додайте інформацію власника</Typography>
                    <Typography fontFamily={'Gilroy'} fontSize={18} marginBottom={'5px'}>Повне ім’я юридичної особи</Typography>
                    <TextField 
                        name='person'  
                        id="outlined-basic" 
                        defaultValue={accommodation.person} 
                        required 
                        onChange={handleMainInfoFormChange}/>
                    <Typography fontFamily={'Gilroy'} fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Код ЄДРПОУ/ІПН</Typography>
                    <TextField 
                        name='reg_code' 
                        id="outlined-basic" 
                        defaultValue={accommodation.reg_code} 
                        required 
                        helperText={isValidRegCode ? '' : 'Має скаладатись із 8-10 цифр'}
                        error={!isValidRegCode}
                        onChange={handleMainInfoFormChange}/>
                    <Typography fontFamily={'Gilroy'} fontSize={18} marginTop={'0px'} marginBottom={'5px'}>Адреса юридичної особи</Typography>
                    <TextField 
                        name='address_owner' 
                        id="outlined-basic" 
                        defaultValue={accommodation.address_owner} 
                        required 
                        onChange={handleMainInfoFormChange}/>
                    <Typography fontFamily={'Gilroy'} fontSize={24} fontWeight={500} margin={'30px 5px'}>Фотографії вашого об’єкту</Typography>
                    <input type="file" onChange={(e)=>{convertFile(e.target.files)}} multiple/>
                    <Button variant="contained" type='submit' sx={{width: '200px', margin: '20px 0px', fontFamily:'Gilroy', textTransform:'none', fontSize:'20px', padding:'10px 30px'}}>Далі</Button>
                    {error ? <Typography fontFamily={'Gilroy'} fontSize={16} color='#EF5151' margin={'20px 0px'}>{error}</Typography>:<></>}
                </FormControl>
                </form>
            </>
            :
            <Typography fontFamily={'Gilroy'} fontSize={24} fontWeight={500} >Основна інформація</Typography>
            }
        </Box>
        </>
    )
}