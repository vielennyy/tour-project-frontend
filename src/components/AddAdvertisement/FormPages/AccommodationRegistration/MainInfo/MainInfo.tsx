import { useState, ChangeEvent } from 'react'
import { Box, Typography, FormControl, TextField, Button, Input, Grid } from '@mui/material'
import { MainAccommodationInfoProps } from 'src/components/TypesAndInterfaces'
import house from '../home.svg'
import apartment from '../apartment.svg'
import hostel from '../hostel.svg'
import hotel from '../hotel.svg'
import other from '../other.svg'
import { string } from 'yup'

interface ComponentProps {
    mainInfo: MainAccommodationInfoProps|undefined,
    setMainInfo: React.Dispatch<React.SetStateAction<MainAccommodationInfoProps|undefined>>,
}

export const MainInfo = ({mainInfo, setMainInfo}:ComponentProps) => {
    const [show, setShow] = useState(true)
    const [clicked, setClicked] = useState(false);
    const typeAccommodationImages = [house, hotel, apartment, hostel, other];
    const [clickedIndex, setClickedIndex] = useState(-1);
    const [type, setType] = useState('Інше')
    const userToken = localStorage.getItem('token')

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
        default:
          setType('Інше');
      }
      setFormState( {...formState, kind:type})
  };
  
  const [formState, setFormState] = useState<MainAccommodationInfoProps>({
    name: "",
    description: "",
    address_owner: "",
    phone: "",
    email: "",
    kind: "Інше",
    user_id: Number(localStorage.getItem('id')),
    reg_code: "",
    person: "",
    image_urls: [],
    status: "",
    created_at: "",
    updated_at: "",
  });
  

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
    console.log('Input!')
};
// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(formState)
//     console.log(userToken)
//     fetch(`https://cktour.club/api/v1/accommodations`, {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: "Bearer " + userToken
//               },
//             // { Authorization: "Bearer " + userToken },
//             body: JSON.stringify(formState),
//         })
//         .then(response => response.json())
//         .then(json => console.log(json));
// };
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append("name", formState.name);
    formData.append("description", formState.description);
    formData.append("address_owner", formState.address_owner);
    formData.append("phone", formState.phone);
    formData.append("email", formState.email);
    formData.append("kind", formState.kind);
    // formData.append("user_id", formState.user_id);
    formData.append("reg_code", formState.reg_code);
    formData.append("person", formState.person);
    formState.image_urls.forEach((image:File) => formData.append("images[]", image));

    // setMainInfo(formData)
  
    console.log(formData);
    console.log(userToken);
  
    fetch(`https://cktour.club/api/v1/accommodations`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + userToken,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((json) => 
        setMainInfo(json)
      );
  };
  

const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      uploadFile(file);
    }
  };
  
  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('images', file);
  
    // try {
    //   const response = await fetch('/upload', {
    //     method: 'POST',
    //     body: formData
    //   });
  
    //   const result = await response.json();
    //   console.log('Upload successful:', result);
    // } catch (error) {
    //   console.error('Upload failed:', error);
    // }
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
                    <Input
                        id="image-upload"
                        type="file"
                        name="images"
                        onChange={handleImageUpload}
                        style={{border:'none', height:'200px'}}
                        />
                    {/* <Button
                            variant="contained"
                            component="label"
                            htmlFor="image-upload"
                            >
                            Upload Image
                            </Button> */}
                    {/* <Box sx={{display:'flex', justifyContent:'space-between'}}>
                        <Box sx={{display:'flex', flexDirection:'column', width:'60%'}}>
                            <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Місто</Typography>
                            <TextField name='confirmNewPassword' id="outlined-basic" onChange={handleFormChange}/>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'column'}}>
                            <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Поштовий індекс</Typography>
                            <TextField name='confirmNewPassword' id="outlined-basic" onChange={handleFormChange}/>
                        </Box>
                    </Box> */}
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