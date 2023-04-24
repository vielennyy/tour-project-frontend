import { useState, ChangeEvent, useEffect } from 'react'
import { Box, Typography, FormControl, TextField, Button } from '@mui/material'
import { MainAccommodationInfoProps } from 'src/components/TypesAndInterfaces'
import house from '../../../../../assets/icons/accommodation/home.svg'
import apartment from '../../../../../assets/icons/accommodation/apartment.svg'
import hostel from '../../../../../assets/icons/accommodation/hostel.svg'
import hotel from '../../../../../assets/icons/accommodation/hotel.svg'
import other from '../../../../../assets/icons/accommodation/other.svg'

interface ComponentProps {
    mainInfo: MainAccommodationInfoProps|undefined,
    setMainInfo: React.Dispatch<React.SetStateAction<MainAccommodationInfoProps|undefined>>,
}

interface FormDataValues {
    name: string,
    description: string,
    address_owner: string,
    phone: string,
    email: string,
    kind: string,
    user_id: number,
    reg_code: string,
    person: string,
    images: File[]
};

export const MainInfo = ({mainInfo, setMainInfo}:ComponentProps) => {
    const [show, setShow] = useState(true)
    const typeAccommodationImages = [house, hotel, apartment, hostel, other];
    const [clickedIndex, setClickedIndex] = useState(-1);
    const [type, setType] = useState('Інше')
    const userToken = localStorage.getItem('token')

    const [formState, setFormState] = useState<FormDataValues>({
        name: "",
        description: "",
        address_owner: "",
        phone: "",
        email: "",
        kind: "Інше",
        user_id: Number(localStorage.getItem('id')),
        reg_code: "",
        person: "",
        images: []
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

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
        ...formState,
        kind: type,
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

    // const handleFileLoad = (event:ChangeEvent<HTMLInputElement>) => {
    //     // @ts-ignore
    //     const uploadedFile:File[] = []
    //     (event.target as HTMLInputElement).files.map((file:File) =>
    //         uploadedFile.push(file)
    //     )
    //     // const uploadedFile = (event.target as HTMLInputElement).files;
    //     console.log(uploadedFile)
    //     setFormState({
    //         ...formState,
    //         images: uploadedFile
    //       });
    // }
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { name, description, address_owner, phone, email, kind, user_id, reg_code, person, images} = formState;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('address_owner', address_owner);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('kind', kind);
        formData.append('user_id', user_id.toString());
        formData.append('reg_code', reg_code);
        formData.append('person', person);
        if (images !== undefined) {
            for (let i = 0; i < images.length; i++) {
                formData.append('images[]', images[i]);
            }
        }
        // console.log(images)
        console.log(formState)
        fetch(`https://cktour.club/api/v1/accommodations`, {
                method: "POST",
                headers: {
                    // 'Content-Type': 'application/json',
                    // 'Content-Type': 'multipart/form-data',
                    // 'accept': '*/*',
                    Authorization: "Bearer " + userToken
                },
                body: formData})
                // JSON.stringify(formState)})
            .then(response => response.json())
            .then(json => setMainInfo(json))
            .catch(error => console.error('Error:', error));
        // setShow(false)
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
            {show ?
            <>
                <Typography fontSize={24} fontWeight={500}>Оберіть тип житла, який ви реєструєте:</Typography>
                <Box sx={{display:'flex', justifyContent:'space-between', '& *': { cursor: 'pointer' }}}>
                    {typeAccommodationImages.map((image, index) => (
                        <Box
                        key={index}
                        sx={{
                            height: '105px',
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
                            width={'150px'}
                            src={image}
                            alt={`Your image ${index}`}
                        />
                        </Box>
                    ))}
                </Box>
                <form lang="uk" onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
                <FormControl sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography fontSize={18} marginBottom={'5px'}>Назва вашого житла</Typography>
                    <TextField name='name'  id="outlined-basic" required onChange={handleFormChange}/>
                    <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Контактний телефон</Typography>
                    <TextField name='phone' id="outlined-basic" required onChange={handleFormChange}/>
                    <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Контактний e-mail</Typography>
                    <TextField name='email' id="outlined-basic" required onChange={handleFormChange}/>
                    <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Додайте опис вашого житла</Typography>
                    <TextField name='description' id="outlined-basic" required onChange={handleFormChange} multiline/>
                    <Typography fontSize={24} fontWeight={500}>Додайте інформацію власника</Typography>
                    <Typography fontSize={18} marginBottom={'5px'}>Повне ім’я юридичної особи</Typography>
                    <TextField name='person'  id="outlined-basic" required onChange={handleFormChange}/>
                    <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Код ЄДРПОУ/ІПН</Typography>
                    <TextField name='reg_code' id="outlined-basic" required onChange={handleFormChange}/>
                    <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Адреса юридичної особи</Typography>
                    <TextField name='address_owner' id="outlined-basic" required onChange={handleFormChange}/>
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
    )
}