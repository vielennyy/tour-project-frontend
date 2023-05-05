import React, {useState} from "react";
import { useFormik } from 'formik';
import { useParams} from "react-router-dom";
import DatePicker from "react-datepicker";

import {
  Box,
  Dialog,
  DialogContent,
  Button,
  Typography,
  TextField
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import "react-datepicker/dist/react-datepicker.css";

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
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const {id} = useParams();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onBooking = async (values: FormValues) => {
    const body = {
      "number_of_peoples": values.number,
      "check_in": startDate.toISOString().slice(0, 10),
      "check_out": endDate.toISOString().slice(0, 10),
      "note": values.note,
      "phone": values.phone,
      "full_name": values.name,
      "room_id": 0
    }

    const response = await fetch(`https://cktour.club/api/v1/accommodations/${id}/rooms/${props}/bookings`,
      {
        method: "POST",
        headers: {
          Authorization: 'Bearer ' +  localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

    if(response.ok) {
      setSuccess(true);
      setError(false)
      setTimeout(() => {
        setSuccess(false);
        formik.resetForm();
        handleClose();
      }, 3000)
    } else {
      setError(true)
    }
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
          {/*<LocalizationProvider dateAdapter={AdapterDayjs}>*/}
          {/*  <DemoContainer components={['DatePicker', 'DatePicker']} sx={{*/}
          {/*  }}>*/}
          {/*    <DatePicker label={'Дата заселення'} views={['day']} onChange={handleStartDay}/>*/}
          {/*    <DatePicker label={'Дата від’їзду'} views={['day']} onChange={handleEndDay}/>*/}
          {/*  </DemoContainer>*/}
          {/*</LocalizationProvider>*/}
          <Box sx={{
            display: 'flex'
          }}>
            <Box sx={{
              marginRight: 1
            }}>
              <Typography variant="body2" sx={{marginTop: 2}}>
                Дата заїзду
              </Typography>
              <DatePicker selected={startDate} onChange={(date: Date) => {
                setStartDate(date);
              }} />
            </Box>
            <Box>
              <Typography variant="body2" sx={{marginTop: 2}}>
                Дата виїзду
              </Typography>
              <DatePicker selected={endDate} onChange={(date: Date) => {
                setEndDate(date);
              }} />
            </Box>
          </Box>
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
              {error ?
                <Typography sx={{fontSize: 16, fontWeight: 500, marginTop: 2, color: '#EF5151'}}>
                  Відбулася помилка
                </Typography> :
                null
              }
              {success ?
                <Typography sx={{fontSize: 16, fontWeight: 500, marginTop: 2, color: 'green'}}>
                  Бронювання пройшло успішно
                </Typography> :
                null
              }
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