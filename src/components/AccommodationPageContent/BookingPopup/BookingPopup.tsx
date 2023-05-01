import React, {useEffect, useState} from "react";
import { useFormik } from 'formik';
import { useParams} from "react-router-dom";

import {
  Box,
  Dialog,
  DialogContent,
  Button,
  Typography, TextField, Link
} from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CloseIcon from '@mui/icons-material/Close';

interface FormValues {
  name: string;
  phone: string;
  note: string;
  number: any;
}

interface RoomId {
  props: any;
}

export const BookingPopup = ({props}:RoomId):JSX.Element => {
  const [open, setOpen] = useState(false);
  const {id} = useParams();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onBooking = (values: FormValues) => {
    const formData = new FormData();
    formData.append('full_name', values.name);
    formData.append('phone', values.phone);
    formData.append('note', values.note);
    formData.append('number_of_peoples', values.number);
    formData.append('check_in', '2023-05-10');
    formData.append('check_out', '2023-05-15');
    formData.append('room_id', props);

    fetch(`https://cktour.club/api/v1/accommodations/${id}/rooms/${props}/bookings`,
      {
        method: "POST",
        headers: {
          Authorization: 'Bearer ' +  localStorage.getItem('token')
        },
        body: formData
      }).then(() => handleClose());
  }

  const handleStartDay = (event:any) => {
    const start = event['$d'].toISOString().slice(0, 10);
  }
  const handleEndDay = (event:any) => {
    const end = event['$d'].toISOString().slice(0, 10);
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      note: '',
      number: 0
    },
    onSubmit: (values:FormValues) => {
      onBooking(values)
    }
  });

  return (
    <Box>
      <Button onClick={handleClickOpen} sx={{
        textTransform: 'none',
        padding: '0 20px',
        background: 'rgba(255, 255, 255, 0.15)',
        height: 45,
        width: 140,
        borderRadius: '9px',
        boxShadow: '0px 4px 15px rgba(155, 155, 155, 0.25)'
      }}>
        <Typography variant="body2" color='primary'>
          Бронювати
        </Typography>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{
          width: '100%',
          padding: 3
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Typography variant="h4">
              Бронювання номеру
            </Typography>
            <Button onClick={handleClose} sx={{
              minWidth: 20,
              color: "inherit"
            }}>
              <CloseIcon/>
            </Button>
          </Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']} sx={{
            }}>
              <DatePicker label={'Дата заселення'} views={['day']} onChange={handleStartDay}/>
              <DatePicker label={'Дата від’їзду'} views={['day']} onChange={handleEndDay}/>
            </DemoContainer>
          </LocalizationProvider>
          <DialogContent sx={{padding: 0}}>
            <Typography variant="h4" sx={{marginTop: 2}}>
              Введіть свої дані
            </Typography>
            <form onSubmit={formik.handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Ім'я, прізвище"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                sx={{marginTop: "25px"}}
              />
              <TextField
                fullWidth
                id="number"
                name="number"
                type="number"
                label="Гості"
                value={formik.values.number}
                onChange={formik.handleChange}
                sx={{marginTop: "25px"}}
              />
              <TextField
                fullWidth
                id="phone"
                name="phone"
                label="Телефон"
                type="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                sx={{marginTop: '15px'}}
              />
              <TextField
                fullWidth
                id="note"
                name="note"
                label="Додайте свої побажання"
                type="text"
                value={formik.values.note}
                onChange={formik.handleChange}
                sx={{marginTop: '15px'}}
              />
              <Button color="primary" variant="contained" fullWidth type="submit" sx={{
                width: 200,
                height: 40,
                marginTop: "25px",
                borderRadius: '10px',
              }}>
                Бронювати
              </Button>
            </form>
          </DialogContent>
        </Box>
      </Dialog>
    </Box>
  )
}