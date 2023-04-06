import {Box} from '@mui/material';
import {Typography, TextField, Button, FormControl} from '@mui/material';
import {Link, SvgIcon} from '@mui/material';
import { User } from 'src/components/TypesAndInterfaces';
import { ReactComponent as EditIcon } from '../UserPageIcons/edit 1.svg';
import { ReactComponent as LogOut } from '../UserPageIcons/log-out 1.svg';
import { useState } from 'react';

interface MyComponentProps {
    user: User;
}

interface InfoBoxProps {
    user: User;
    editMode: boolean;
    setInfoEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  }

export const InfoCard = ({user}:MyComponentProps) => {
    const [ infoEditMode, setInfoEditMode ] = useState(false)
    const [ passwordEditMode, setPasswordEditMode ] = useState(false)

    const handleInfoEditMode = () => {
        setInfoEditMode(!infoEditMode)
    }

    const handlePasswordEditMode = () => {
        setPasswordEditMode(!passwordEditMode)
    }

    return(
       <>   
            {infoEditMode ? 
                <EditInfoBox user={user} editMode={infoEditMode} setInfoEditMode={setInfoEditMode} /> 
                : 
                <InfoBox user={user} editMode={infoEditMode} setInfoEditMode={setInfoEditMode}/>
            }

            {passwordEditMode ? <></> : <PasswordBox/>}
            
            <Exit/>
        </>
    )
}

// TODO editPassword component
// TODO get textField values and send it to the database
// Todo validate TextField

const Exit = () => {
    return (
        <Box  
                margin={'40px'} 
                display="flex" 
                flexDirection={'row'} 
                justifyContent={'right'}
            >
                        <Link underline="hover" color="inherit" fontSize='25' href="/" sx={{marginRight: '10px'}}>
                            <Typography fontSize={22} fontWeight={400}>Вийти з акаунту</Typography>
                        </Link>
                        <SvgIcon sx={{marginTop: '5px'}}><LogOut/></SvgIcon>
        </Box>
    )
}

const InfoBox = ({user, editMode, setInfoEditMode}:InfoBoxProps) => {
    return (
        <>
        <Box sx = {{boxShadow: '0px 4px 15px rgba(3, 2, 2, 0.25)',
                    borderRadius: '15px'}} 
                    maxWidth={800} 
                    border={'none'} 
                    margin={'20px'} 
                    display="flex" 
                    flexDirection={'column'} 
                    justifyContent={'space-between'}
                    padding={'30px'}>
            <Box 
                fontSize={22} 
                display="flex" 
                flexDirection={'row'} 
                justifyContent={'space-between'}
            >
                <Typography fontSize={28} fontWeight={500}>Дані користувача</Typography>
                <Box display="flex" flexDirection={'row'}>
                    <Link 
                        underline="hover" 
                        color="inherit" 
                        fontSize='25' 
                        onClick={() => {setInfoEditMode(!editMode)}} 
                        sx={{marginRight: '10px', cursor: 'pointer'}}
                    >
                        <Typography fontSize={22} fontWeight={400}>Редагувати</Typography>
                    </Link>
                    <SvgIcon sx={{marginTop: '5px'}}><EditIcon/></SvgIcon>
                </Box>
            </Box>

            <Box 
                margin={'30px'} 
                display="flex" 
                flexDirection={'row'}
            >

                <Box  
                    display="flex" 
                    flexDirection={'column'} 
                    justifyContent={'space-between'}
                >
                    <Typography sx={{marginBottom: '20px'}}>Ім’я</Typography>
                    <Typography sx={{marginBottom: '20px'}}>Телефон</Typography>
                    <Typography >Email</Typography>
                </Box>
                <Box 
                    margin={'0 100px'} 
                    display="flex" 
                    flexDirection={'column'} 
                    justifyContent={'space-between'}
                >
                    <Typography sx={{marginBottom: '20px'}}>{user.name}</Typography>
                    <Typography sx={{marginBottom: '20px'}}>{user.phone}</Typography>
                    <Typography >{user.email}</Typography>
                </Box>
            </Box>
        </Box>
    </>
    )
}

const PasswordBox = () => {
    return(
        <Box sx = {{boxShadow: '0px 4px 15px rgba(3, 2, 2, 0.25)',
                    borderRadius: '15px'}} 
                    maxWidth={800} border={'none'} 
                    margin={'20px'} fontFamily='Inter, normal' 
                    display="flex" flexDirection={'column'} 
                    justifyContent={'space-between'}padding={'30px'}>
            <Box display="flex" flexDirection={'row'} justifyContent={'space-between'}>
                <Typography fontSize={28} fontWeight={500}>Пароль</Typography>
                    <Box display="flex" flexDirection={'row'}>
                        <Link underline="hover" color="inherit" fontSize='25' href="/" sx={{marginRight: '10px', cursor: 'pointer'}}>
                            <Typography fontSize={22} fontWeight={400}>Редагувати</Typography>
                        </Link>
                        <SvgIcon sx={{marginTop: '5px'}}><EditIcon/></SvgIcon>
                    </Box>
            </Box>
            <Box margin={'30px'} fontFamily='Inter, normal' display="flex" flexDirection={'row'}>
                <Typography fontSize={24} color={'#646464'} letterSpacing={'0.335em'}>•••••••••</Typography>
            </Box>
                    
        </Box>
    )
}

const EditInfoBox = ({user, editMode, setInfoEditMode}:InfoBoxProps) => {

    interface FormData {
        firstName: string;
        lastName: string;
        phoneNumber: string;
        email: string;
      }

    const [formState, setFormState] = useState<FormData>({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        
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
        const formData = {
          name: formState.firstName,
          lastName: formState.lastName,
          phoneNumber: formState.phoneNumber,
          email: formState.email,
        };
        console.log(formData)
        console.log('submit')
    };

    return(
        <Box sx = {{boxShadow: '0px 4px 15px rgba(3, 2, 2, 0.25)',
                        borderRadius: '15px'}} maxWidth={800} width={700}
                        border={'none'} margin={'20px'} 
                        display="flex" flexDirection={'column'} 
                        padding={'30px'}>
            <Box fontSize={22} display="flex" flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} marginBottom={'30px'}>
                <Typography fontSize={28} fontWeight={500}>Дані користувача</Typography>
                <Box display="flex" flexDirection={'row'} >
                    <Link underline="hover" color="inherit" fontSize='25' onClick={() => {setInfoEditMode(!editMode)}} sx={{marginRight: '10px', cursor: 'pointer'}}>
                        <Typography fontSize={22} fontWeight={400}>Скасувати</Typography>
                    </Link>
                    <SvgIcon sx={{marginTop: '5px'}}><EditIcon/></SvgIcon>
                </Box>
            </Box>
            <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
                <FormControl sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography fontSize={18} marginBottom={'5px'}>Ім’я та прізвище</Typography>
                    <TextField id="outlined-basic" defaultValue={user.name} onChange={handleFormChange}/>
                    <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Телефон</Typography>
                    <TextField id="outlined-basic" defaultValue={user.phone} onChange={handleFormChange}/>
                    <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Email</Typography>
                    <TextField id="outlined-basic" defaultValue={user.email} onChange={handleFormChange}/>
                </FormControl>
                <Button variant="contained" type='submit' sx={{width: '200px', margin: '20px 0px', textTransform:'none', fontSize:'20px', padding:'10px 30px'}}>Зберегти</Button>
            </form>
        </Box>

 )
}