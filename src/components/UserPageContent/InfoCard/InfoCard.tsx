import {Box} from '@mui/material';
import {Typography, TextField, Button, FormControl} from '@mui/material';
import {Link, SvgIcon} from '@mui/material';
import { User, UserContextTypes } from 'src/components/TypesAndInterfaces';
import { ReactComponent as EditIcon } from '../UserPageIcons/edit 1.svg';
import { ReactComponent as LogOut } from '../UserPageIcons/log-out 1.svg';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from 'src/UserContext';
import { localStorageAvailable } from '@mui/x-data-grid/utils/utils';

// TODO editPassword component
// TODO get textField values and send it to the database
// Todo validate TextField

interface EditInfoBoxProps {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User|undefined>>,
    userId: number|null,
    userToken: string|null,
    editMode: boolean;
    setInfoEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  }

interface EditPasswordBoxProps {
    user: User; 
    userToken: string|null;  
    passwordEditMode: boolean;
    setPasswordEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  }

  interface InfoBoxProps {
    user: User;
    // editMode: boolean;
    // setInfoEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  }

export const InfoCard = () => {
    // const [ infoEditMode, setInfoEditMode ] = useState(false)
    const [ passwordEditMode, setPasswordEditMode ] = useState(false)
    const userId = Number(localStorage.getItem('id'))
    const userToken = localStorage.getItem('token')

    // const handleInfoEditMode = () => {
    //     setInfoEditMode(!infoEditMode)
    // }

    const handlePasswordEditMode = () => {
        setPasswordEditMode(!passwordEditMode)
    }

    const [user, setUser] = useState<User>();

    useEffect(() => {
        fetch(`https://cktour.club/api/v1/users/${userId}`, {
            method: "GET",
            headers: { Authorization: 'Bearer ' +  userToken }
          })
          .then(response => response.json())
          .then(json => setUser(json));
      }, [user]);



    return (
        <Box sx={{}}>
          {user ? (
            <>
              {/* {infoEditMode ? (
                <EditInfoBox
                  user={user as User}
                  setUser={setUser}
                  userId={userId}
                  userToken={userToken}
                  editMode={infoEditMode}
                  setInfoEditMode={setInfoEditMode}
                />
              ) : ( */}
                <InfoBox
                  user={user as User}
                //   editMode={infoEditMode}
                //   setInfoEditMode={setInfoEditMode}
                />
              {/* )} */}
              {passwordEditMode ? <EditPasswordBox user={user as User}
                  userToken={userToken}
                  passwordEditMode={passwordEditMode}
                  setPasswordEditMode={setPasswordEditMode}></EditPasswordBox>
                  : 
                  <PasswordBox user={user as User}
                  userToken={userToken}
                  passwordEditMode={passwordEditMode}
                  setPasswordEditMode={setPasswordEditMode}/>}
              <Exit />
            </>
          ) : (
            <>
            <Exit /></>
          )}
        </Box>
      );
}



const Exit = () => {
    return (
        <Box  
                margin={'40px'} 
                display="flex" 
                flexDirection={'row'} 
                justifyContent={'right'}
            >
                        <Link underline="hover" color="inherit" fontSize='25' href='/' onClick={() => {localStorage.removeItem('token')}} sx={{marginRight: '10px'}}>
                            <Typography fontSize={22} fontWeight={400}>Вийти з акаунту</Typography>
                        </Link>
                        <SvgIcon sx={{marginTop: '5px'}}><LogOut/></SvgIcon>
        </Box>
    )
}

const InfoBox = ({user}:InfoBoxProps) => {
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
                    {/* <Link 
                        underline="hover" 
                        color="inherit" 
                        fontSize='25' 
                        onClick={() => {setInfoEditMode(!editMode)}} 
                        sx={{marginRight: '10px', cursor: 'pointer'}}
                    >
                        <Typography fontSize={22} fontWeight={400}>Редагувати</Typography>
                    </Link> */}
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
                    <Typography >Email</Typography>
                </Box>
                <Box 
                    margin={'0 100px'} 
                    display="flex" 
                    flexDirection={'column'} 
                    justifyContent={'space-between'}
                >
                    <Typography sx={{marginBottom: '20px'}}>{user.name}</Typography>
                    <Typography >{user.email}</Typography>
                </Box>
            </Box>
        </Box>
    </>
    )
}

const PasswordBox = ({user, userToken, passwordEditMode, setPasswordEditMode}:EditPasswordBoxProps) => {
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
                        <Link underline="hover" color="inherit" fontSize='25' onClick={()=>{setPasswordEditMode(!passwordEditMode)}} sx={{marginRight: '10px', cursor: 'pointer'}}>
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

const EditPasswordBox = ({user, userToken, passwordEditMode, setPasswordEditMode}:EditPasswordBoxProps) => {
    // console.log(user)
    const [isCorrectInput, setIsCorrectInput] = useState(false)
    interface FormData {
        prevPassword: string;
        newPassword: string;
        confirmNewPassword: string;
    }
    const [formState, setFormState] = useState<FormData>({
        prevPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formState.prevPassword && formState.prevPassword === user.password_digest) {
            if(formState.newPassword && formState.confirmNewPassword && formState.newPassword === formState.confirmNewPassword) {
                const resetPasswordData = {
                    email: user.email,
                    password: formState.newPassword,
                }
                console.log(resetPasswordData);
                fetch(`https://cktour.club/api/v1/password/reset`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                        "accept": "*/*",
                        "Content-Type": "application/json"
                      },
                    body: JSON.stringify(resetPasswordData),
                })
                .then(response => {
                    if (!response.ok) {
                      throw new Error(response.statusText);
                    }
                    return response.json();
                  })
                  .then(json => console.log(json))
                  .catch(error => console.log("Error:", error));
            }
            else setIsCorrectInput(false)
        } 
        else setIsCorrectInput(false)
          
        if(isCorrectInput){
            setPasswordEditMode(!passwordEditMode);
        }
        else setPasswordEditMode(passwordEditMode)
        console.log("submit");
          
        // fetch(`https://cktour.club/api/v1/users/${userId}`, {
        //     method: "PUT",
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: "Bearer " + userToken
        //       },
        //     // { Authorization: "Bearer " + userToken },
        //     body: JSON.stringify(formData),
        // })
        // .then(response => response.json())
        // .then(json => setUser(json));
    
    };


    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        

        setFormState({
          ...formState,
          [event.target.name]: event.target.value,
        });
        console.log('Input!')
    };

    return(
        <Box sx = {{boxShadow: '0px 4px 15px rgba(3, 2, 2, 0.25)',
                        borderRadius: '15px'}} maxWidth={800} width={700}
                        border={'none'} margin={'20px'} 
                        display="flex" flexDirection={'column'} 
                        padding={'30px'}>
            <Box fontSize={22} display="flex" flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} marginBottom={'30px'}>
                <Typography fontSize={28} fontWeight={500}>Пароль</Typography>
                <Box display="flex" flexDirection={'row'} >
                    <Link underline="hover" color="inherit" fontSize='25' onClick={() => {setPasswordEditMode(!passwordEditMode)}} sx={{marginRight: '10px', cursor: 'pointer'}}>
                        <Typography fontSize={22} fontWeight={400}>Скасувати</Typography>
                    </Link>
                    <SvgIcon sx={{marginTop: '5px'}}><EditIcon/></SvgIcon>
                </Box>
            </Box>
            <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
                <FormControl sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography fontSize={18} marginBottom={'5px'}>Старий пароль</Typography>
                    <TextField name='prevPassword'  id="outlined-basic" type="password" onChange={handleFormChange}/>
                    <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Новий пароль</Typography>
                    <TextField name='newPassword' id="outlined-basic" type="password" onChange={handleFormChange}/>
                    <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Повторіть пароль</Typography>
                    <TextField name='confirmNewPassword' id="outlined-basic" type="password" onChange={handleFormChange}/>
                </FormControl>
                <Button variant="contained" type='submit' sx={{width: '200px', margin: '20px 0px', textTransform:'none', fontSize:'20px', padding:'10px 30px'}}>Зберегти</Button>
            </form>
        </Box>
    )
}

// const EditInfoBox = ({user, setUser, userId, userToken, editMode, setInfoEditMode}:EditInfoBoxProps) => {

//     interface FormData {
//         name: string;
//         phoneNumber: string;
//         email: string;
//       }

//     const [formState, setFormState] = useState<FormData>({
//         name: "",
//         phoneNumber: "",
//         email: "",
//       });

    // const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setFormState({
    //       ...formState,
    //       [event.target.name]: event.target.value,
    //     });
    //     console.log('Input!')
    // };

   
    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
          
    //     const formData = {
    //         name: formState.name,
    //         phone: formState.phoneNumber,
    //         email: formState.email,
    //     };
          
    //     setInfoEditMode(!editMode);
    //     console.log(formData);
    //     console.log("submit");
          
    //     fetch(`https://cktour.club/api/v1/users/${userId}`, {
    //         method: "PUT",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: "Bearer " + userToken
    //           },
    //         // { Authorization: "Bearer " + userToken },
    //         body: JSON.stringify(formData),
    //     })
    //     .then(response => response.json())
    //     .then(json => setUser(json));
    
    // };

//     return(
        // <Box sx = {{boxShadow: '0px 4px 15px rgba(3, 2, 2, 0.25)',
        //                 borderRadius: '15px'}} maxWidth={800} width={700}
        //                 border={'none'} margin={'20px'} 
        //                 display="flex" flexDirection={'column'} 
        //                 padding={'30px'}>
        //     <Box fontSize={22} display="flex" flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} marginBottom={'30px'}>
        //         <Typography fontSize={28} fontWeight={500}>Дані користувача</Typography>
        //         <Box display="flex" flexDirection={'row'} >
        //             <Link underline="hover" color="inherit" fontSize='25' onClick={() => {setInfoEditMode(!editMode)}} sx={{marginRight: '10px', cursor: 'pointer'}}>
        //                 <Typography fontSize={22} fontWeight={400}>Скасувати</Typography>
        //             </Link>
        //             <SvgIcon sx={{marginTop: '5px'}}><EditIcon/></SvgIcon>
        //         </Box>
        //     </Box>
        //     <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
        //         <FormControl sx={{display: 'flex', flexDirection: 'column'}}>
        //             <Typography fontSize={18} marginBottom={'5px'}>Ім’я та прізвище</Typography>
        //             <TextField name='name'  id="outlined-basic" defaultValue={user.name} onChange={handleFormChange}/>
        //             <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Телефон</Typography>
        //             <TextField name='phoneNumber' id="outlined-basic" defaultValue={user.phone} onChange={handleFormChange}/>
        //             <Typography fontSize={18} marginTop={'20px'} marginBottom={'5px'}>Email</Typography>
        //             <TextField name='email' id="outlined-basic" defaultValue={user.email} onChange={handleFormChange}/>
        //         </FormControl>
        //         <Button variant="contained" type='submit' sx={{width: '200px', margin: '20px 0px', textTransform:'none', fontSize:'20px', padding:'10px 30px'}}>Зберегти</Button>
        //     </form>
        // </Box>

//  )
// }