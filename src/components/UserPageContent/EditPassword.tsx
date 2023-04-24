import {Box, Button, TextField, Typography, FormControl} from '@mui/material';
import { useState } from 'react'
import { useParams } from 'react-router-dom';

export const EditPassword = () => {
    const [isCorrectInput, setIsCorrectInput] = useState(false)
    const changePasswordToken = useParams<{ token: string }>()
    const token = changePasswordToken.token

    interface FormData {
        email: string;
        newPassword: string;
        confirmNewPassword: string;
    }

    const [formState, setFormState] = useState<FormData>({
        email: '',
        newPassword: "",
        confirmNewPassword: "",
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
            if(formState.newPassword && formState.confirmNewPassword && formState.newPassword === formState.confirmNewPassword) {
                const resetPasswordData = {
                    token: token,
                    email: formState.email,
                    password: formState.newPassword,
                }
                console.log(resetPasswordData);
                fetch(`https://cktour.club/api/v1/password/reset`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                      },
                    body: JSON.stringify(resetPasswordData),
                })
                .then(response => {
                    if (response.ok) {
                        setIsCorrectInput(true)
                    }
                    return response.json();
                  })
                  .then(json => console.log(json))
                  .catch(error => console.log("Error:", error));
            }
        console.log("submit");
    };

    return(
        <Box sx = {{boxShadow: '0px 4px 15px rgba(3, 2, 2, 0.25)',
                        borderRadius: '15px'}} maxWidth={800} width={700}
                        height={600}
                        border={'none'} margin={'20px auto'} 
                        display="flex" flexDirection={'column'} 
                        justifyContent={'center'}
                        alignItems={'center'}
                        padding={'30px'}>
            {isCorrectInput ?
            <>
                <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Вітаю! Ваш пароль успішно змінено. Увійдіть у свій власний кабінет</Typography>
                <Button variant="contained" href='/' sx={{width: '200px', margin: '20px 0px', textTransform:'none', fontSize:'20px', padding:'10px 30px'}}>На головну</Button>
            </>
            :
            <>
                <Typography fontSize={28} fontWeight={500} marginBottom={'20px'}>Форма для зміни паролю</Typography>
                <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
                    <FormControl sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography fontSize={18} marginBottom={'5px'}>Електронна пошта</Typography>
                        <TextField name='email'  id="outlined-basic" onChange={handleFormChange}/>
                        <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Новий пароль</Typography>
                        <TextField name='newPassword' id="outlined-basic" type="password" onChange={handleFormChange}/>
                        <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Повторіть пароль</Typography>
                        <TextField name='confirmNewPassword' id="outlined-basic" type="password" onChange={handleFormChange}/>
                    </FormControl>
                <Button variant="contained" type='submit' sx={{width: '200px', display: 'flex', margin: '20px auto', textTransform:'none', fontSize:'20px', padding:'10px 30px'}}>Зберегти</Button>
                </form>
            </>
            }
        </Box>
    )
}
