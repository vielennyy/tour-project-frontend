import React, { useState} from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Box,
  Typography,
  Link,
  TextField,
  Button } from '@mui/material';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import {LoginTypes} from "../../TypesAndInterfaces";


export const LoginPopup = ():JSX.Element =>  {
  const [error, showError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
      localStorage.setItem('token', res.token)
      localStorage.setItem('id', res.user_id)
      window.location.reload();
    } else {
      showError(true);
    }
  }

  const validationSchema = yup.object({
    email: yup
      // @ts-ignore
      .string('Введіть електронну пошту')
      .email('Введіть валідну (дійсну) електронну пошту')
      .required("Поле обов'язкове для заповнення"),
    password: yup

      // @ts-ignore
      .string("Введіть пароль")
      .min(8, 'Пароль повинен містити мінімум 8 символів')
      .required("Поле обов'язкове для заповнення"),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values: LoginTypes) => {
      login(values)
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
          <Box sx={{
            width: '100%',
            position: 'relative'
          }}>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Пароль"
              type={showPassword ? 'text' : 'password'}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{marginTop: '25px'}}
            />
            <Button fullWidth type="button" sx={{
              width: 20,
              height: 20,
              minWidth: 25,
              position: 'absolute',
              top: '47px',
              right: '14px'
            }}
            onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <RemoveRedEyeIcon/> : <VisibilityOffIcon/>}
            </Button>
          </Box>
          {error ?
            <Typography sx={{fontSize: 16, fontWeight: 500, marginTop: 2, color: '#EF5151'}}>
              Неправильний логін чи пароль
            </Typography> :
            null
          }
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