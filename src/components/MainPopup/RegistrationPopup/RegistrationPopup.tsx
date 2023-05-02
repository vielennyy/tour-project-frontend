import React, {useContext, useEffect, useState} from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';

import {
  Box,
  Typography,
  Button,
  TextField,
  Link } from "@mui/material";

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import {RegisterTypes} from "../../TypesAndInterfaces";

export const RegistrationPopup = ({backToLoginPopup}:any):JSX.Element =>  {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const registration = async (values:RegisterTypes) => {
    const response = await fetch(`https://cktour.club/api/v1/users`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
    if(response.ok) {
      setSuccess(true);
      setError(false)
      setTimeout(() => {
        backToLoginPopup();
      }, 3000)
    } else {
      setError(true)
    }
  }

  const validationSchema = yup.object({
    name: yup
      // @ts-ignore
      .string('Enter your name')
      .min(2, 'Name should be of minimum 2 characters length')
      .required("Поле обов'язкове для заповнення"),

    email: yup
      // @ts-ignore
      .string('Enter your email')
      .email('Enter a valid email')
      .required("Поле обов'язкове для заповнення"),
    password: yup

      // @ts-ignore
      .string("Enter your password")
      .min(8, 'Password should be of minimum 8 characters length')
      .required("Поле обов'язкове для заповнення"),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values: RegisterTypes) => {
      registration(values);
    }
  });
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
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Ім'я та призвіще"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
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
              Неправильна почта чи пароль
            </Typography> :
            null
          }
          {success ?
            <Typography sx={{fontSize: 16, fontWeight: 500, marginTop: 2, color: 'green'}}>
              Ви успішно зарееструвалися!
            </Typography> :
            null
          }
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