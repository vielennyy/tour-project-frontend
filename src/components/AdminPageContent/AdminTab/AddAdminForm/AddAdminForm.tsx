import React, {useEffect, useState} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import {Box,
  Button,
  TextField,
  Dialog,
  DialogTitle} from '@mui/material';

import {UserToken} from "../../../TypesAndInterfaces";

export const AddAdminForm = ({token}:UserToken):JSX.Element => {
  const [values, setValues] = useState({});
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onAdminAdded = async () => {
    const fetching = await fetch('https://cktour.club/api/v1/admins/create_admin',
      {
        method: "POST",
        headers: {
          Authorization: 'Bearer ' +  token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
  }

  useEffect(() => {
    onAdminAdded();
    setTimeout(() => {
      handleClose();
    }, 1000)
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
      name: 'admin',
      email: 'admin@test.com',
      password: 'User123!',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setValues(values)
      // setTimeout(() => {
      //   onAdminAdded()
      // }, 500)
    }
  });
  console.log(values)
  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        Додати нового Адміністратора
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Новий адміністратор</DialogTitle>
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
              Додати
            </Button>
          </form>
        </Box>
      </Dialog>
    </Box>
  );
}