import React, {useContext, useEffect, useState} from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import {UserContext} from "../../../UserContext";

import { Box,
  Typography,
  Link,
  TextField,
  Button } from '@mui/material';
import {ResetPopup} from "../ResetPopup";
import {LoginTypes} from "../../TypesAndInterfaces";


export const LoginPopup = ():JSX.Element =>  {
  const [values, setValues] = useState({});

  const {user, setUser} = useContext(UserContext);


  const login = async (values:LoginTypes) => {
    const response = await fetch(`https://cktour.club/api/v1/auth/login`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

    const res = await response.json();
    if(response.status === 200) {
      // @ts-ignore
      // setUser(() => {
      //   return ({
      //     isAuthorize: true,
      //     id: res.user_id,
      //     token: res.token
      //   });
      // });
      localStorage.setItem('token', res.token)
      localStorage.setItem('id', res.user_id)
      window.location.reload();
    }
  }
  //
  // useEffect(() => {
  // }, [localStorage.getItem('token')])


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
      email: 'tourist@test.com',
      password: 'User123!',
    },
    validationSchema: validationSchema,
    onSubmit: (values: LoginTypes) => {
      login(values)
      // setTimeout(() => {
      //   setValues(values);
      // }, 500)
      // setTimeout(() => {
      //   login();
      // }, 500)
    }
  });

  return (
    <Box sx={{
      padding: '30px',
      paddingBottom: 0
    }}>
      <Typography sx={{fontSize: 16, fontWeight: 500}}>Вхід</Typography>

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 2
      }}>
        <form onSubmit={formik.handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>
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
            sx={{marginTop: '25px'}}
          />
          <Button color="primary" variant="contained" fullWidth type="submit" sx={{
            width: 200,
            height: 40,
            marginTop: "25px",
            borderRadius: '10px',
          }}>
            Вхід
          </Button>
        </form>
      </Box>
    </Box>
  );
}

// email: 'tourist@test.com',
//   password: 'User123!',
//
// <TextField
//   hiddenLabel={true}
//   required={true}
//   label="Електронна почта"
//   id="outlined-size-normal"
//   placeholder={'E-mail'}
//   fullWidth
//   type="email"
//   sx={{marginTop: "50px"}}/>
// <Box sx={{
//   marginTop: "15px",
//   display: "flex",
//   justifyContent: "flex-end"
// }}>
//   <Link
//     component="button"
//     variant="body2">
//     <ResetPopup/>
//   </Link>
// </Box>
// <TextField
//   required={true}
//   label="Пароль"
//   id="outlined-size-normal"
//   placeholder={"Пароль"}
//   fullWidth
//   type="password"
//   sx={{marginTop: '15px'}}/>
// <Button variant="contained" sx={{
//   background: '#FF3939',
//   width: 200,
//   height: 40,
//   margin: "0 auto",
//   color: '#ffffff',
//   marginTop: "20px",
//   borderRadius: '10px'
// }}>Вхід
// </Button>