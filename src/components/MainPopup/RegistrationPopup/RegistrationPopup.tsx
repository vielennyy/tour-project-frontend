import React, {useContext, useEffect, useState} from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';

import {
  Box,
  Typography,
  Button,
  TextField,
  Link } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {RegisterTypes} from "../../TypesAndInterfaces";


export const RegistrationPopup = ():JSX.Element =>  {
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState({});

  const registration = async () => {
    const response = await fetch(`https://cktour.club/api/v1/users`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
  }

  useEffect(() => {
    registration();
  }, [values])

  const validationSchema = yup.object({
    email: yup
      // @ts-ignore
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup

      // @ts-ignore
      .string("Enter your password")
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: 'Tourist',
      email: 'tourist1@test.com',
      password: 'User123!',
    },
    validationSchema: validationSchema,
    onSubmit: (values: RegisterTypes) => {
      setValues(() => ({
        name: values.name,
        email: values.email,
        password: values.password
      }))
      // setTimeout(() => {
      //   registration()
      // }, 500)
    }
  });
  console.log(values)
  return (
    <Box sx={{
      padding: '30px',
      paddingBottom: 0
    }}>
      <Typography sx={{fontSize: 16, fontWeight: 500}}>Реєстрація</Typography>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 2
      }}>
        <form onSubmit={formik.handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>
          {/*<Box sx={{*/}
          {/*  display: 'flex',*/}
          {/*  marginTop: 3,*/}
          {/*  gap: '10px'*/}
          {/*}}>*/}
          {/*  <TextField*/}
          {/*    fullWidth*/}
          {/*    id="name"*/}
          {/*    name="name"*/}
          {/*    label="Ім'я"*/}
          {/*    value={formik.values.name}*/}
          {/*    onChange={formik.handleChange}*/}
          {/*    error={formik.touched.email && Boolean(formik.errors.email)}*/}
          {/*    helperText={formik.touched.email && formik.errors.email}*/}
          {/*  />*/}
          {/*  <TextField*/}
          {/*    fullWidth*/}
          {/*    id="surname"*/}
          {/*    name="surname"*/}
          {/*    label="Призвіще"*/}
          {/*    value={formik.values.surname}*/}
          {/*    onChange={formik.handleChange}*/}
          {/*    error={formik.touched.password && Boolean(formik.errors.password)}*/}
          {/*    helperText={formik.touched.password && formik.errors.password}*/}
          {/*  />*/}
          {/*</Box>*/}
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Ім'я та призвіще"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Електронна пошта"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{marginTop: "25px"}}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Пароль"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{marginTop: '15px'}}
          />
          <Button color="primary" variant="contained" fullWidth type="submit" sx={{
            width: 200,
            height: 40,
            marginTop: "25px",
            borderRadius: '10px',
          }}>
            Реєстрація
          </Button>
        </form>
      </Box>
    </Box>
  );
}
// onClick={registration}

// <Box sx={{
//   display: 'flex',
//   justifyContent: 'space-between',
//   marginTop: '50px'
// }}>
//   <TextField
//     required={true}
//     label="Ім'я"
//     id="outlined-size-normal"
//     placeholder={"Ім'я"}
//     type="text"
//     sx={{width: '160px'}}/>
//   <TextField
//     required={true}
//     label="Призвіще"
//     id="outlined-size-normal"
//     placeholder={"Призвіще"}
//     type="text"
//     sx={{width: '160px'}}/>
// </Box>
// <Box>
//   <TextField
//     hiddenLabel={true}
//     required={true}
//     label="Електронна почта"
//     id="outlined-size-normal"
//     placeholder={'E-mail'}
//     fullWidth
//     type="email"
//     sx={{marginTop: "35px"}}/>
//   <TextField
//     required={true}
//     label="Пароль"
//     id="outlined-size-normal"
//     placeholder={"Пароль"}
//     fullWidth
//     type="password"
//     sx={{marginTop: '35px'}}/>
// </Box>
// <Box sx={{
//   display: 'flex',
//   alignItems: 'center',
//   marginTop: 2
// }}>
//   <Button variant="contained" sx={{
//     background: '#FF3939',
//     width: 200,
//     height: 40,
//     margin: "0 auto",
//     color: '#ffffff',
//     marginTop: "20px",
//     borderRadius: '10px'
//   }}>Реєстрація</Button>
// </Box>