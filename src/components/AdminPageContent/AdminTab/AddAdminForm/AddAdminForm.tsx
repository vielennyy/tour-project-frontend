import React, { useState} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import {
  Box,
  Button,
  TextField,
  Dialog,
  Typography
} from '@mui/material';

import {RegisterTypes} from "../../../TypesAndInterfaces";
import CloseIcon from '@mui/icons-material/Close';

interface FetchDataType {
  props: () => void;
}

export const AddAdminForm = ({props}:FetchDataType):JSX.Element => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const adminRegistration = async (values:RegisterTypes) => {
    const response = await fetch('https://cktour.club/api/v1/admins/create_admin',
      {
        method: "POST",
        headers: {
          Authorization: 'Bearer ' +  localStorage.getItem('adminToken'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
    if(response.ok) {
      setSuccess(true);
      setError(false)
      setTimeout(() => {
        setSuccess(false);
        formik.resetForm();
        handleClose();
        props();
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
      adminRegistration(values)
    }
  });

  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        Додати нового Адміністратора
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{
          padding: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography>Новий Адміністратор</Typography>
          <CloseIcon onClick={handleClose} sx={{cursor: 'pointer'}}/>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 2,
          padding: 2,
          minWidth: 400
        }}>
          <form onSubmit={formik.handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Ім'я"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Електронна почта"
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
            {error ?
              <Typography sx={{fontSize: 16, fontWeight: 500, marginTop: 2, color: '#EF5151'}}>
                Неправильна почта чи пароль
              </Typography> :
              null
            }
            {success ?
              <Typography sx={{fontSize: 16, fontWeight: 500, marginTop: 2, color: 'green'}}>
                Реєстрація успішна.
              </Typography> :
              null
            }
            <Button color="primary" variant="contained" fullWidth type="submit" sx={{
              width: 200,
              height: 40,
              marginTop: "25px",
              borderRadius: '10px',
            }}>
              Додати
            </Button>
          </form>
        </Box>
      </Dialog>
    </Box>
  );
}