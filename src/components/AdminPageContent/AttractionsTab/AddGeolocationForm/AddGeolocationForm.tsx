import React, {useState} from 'react';
import { useFormik } from 'formik';

import {Box,
  Button,
  TextField,
  Dialog,
  Typography} from '@mui/material';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CloseIcon from '@mui/icons-material/Close';

interface ValuesProps {
  props: {
    id: string;
    fetchData: () => void;
  }
}

interface GeolocationObject {
  locality: string,
  latitude: number,
  longitude: number,
  street: string,
  suite: string,
  zip_code: string
}

export const AddGeolocationForm = ({props}:ValuesProps):JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const addGeolocation = async (values: GeolocationObject) => {
    const fetching = await fetch(`https://cktour.club/api/v1/attractions/${props.id}/geolocations`,
      {
        method: "POST",
        headers: {
          Authorization: 'Bearer ' +  localStorage.getItem('adminToken'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
    if(fetching.ok) {
      setSuccess(true);
      setError(false)
      setTimeout(() => {
        setSuccess(false);
        formik.resetForm();
        handleClose();
        props.fetchData();
      }, 3000)
    } else {
      setError(true)
    }
  }

  const formik = useFormik({
    initialValues: {
      locality: '',
      street: '',
      suite: '',
      latitude: 0,
      longitude: 0,
      zip_code: ''
    },
    onSubmit: (values:GeolocationObject) => {
      addGeolocation(values);
    }
  });

  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        <AddLocationIcon/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 2
        }}>
          <Typography variant='h6'>Додати геолокацію</Typography>
          <CloseIcon  onClick={handleClose} sx={{cursor: 'pointer'}}/>
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
              id="locality"
              name="locality"
              type="text"
              label="Місцевість"
              value={formik.values.locality}
              onChange={formik.handleChange}
              sx={{marginTop: "25px"}}
            />
            <TextField
              fullWidth
              id="street"
              name="street"
              type="text"
              label="Вулиця"
              value={formik.values.street}
              onChange={formik.handleChange}
              sx={{marginTop: "25px"}}
            />
            <TextField
              fullWidth
              id="suite"
              name="suite"
              type="text"
              label="Номер"
              value={formik.values.suite}
              onChange={formik.handleChange}
              sx={{marginTop: "25px"}}
            />
            <TextField
              fullWidth
              id="latitude"
              name="latitude"
              type="text"
              label="Широта"
              value={formik.values.latitude}
              onChange={formik.handleChange}
              sx={{marginTop: "25px"}}
            />
            <TextField
              fullWidth
              id="longitude"
              name="longitude"
              type="text"
              label="Довгота"
              value={formik.values.longitude}
              onChange={formik.handleChange}
              sx={{marginTop: "25px"}}
            />
            <TextField
              fullWidth
              id="zip_code"
              name="zip_code"
              type="text"
              label="ЗІП код"
              value={formik.values.zip_code}
              onChange={formik.handleChange}
              sx={{marginTop: "25px"}}
            />
            {error ?
              <Typography sx={{fontSize: 16, fontWeight: 500, marginTop: 2, color: '#EF5151'}}>
                Заповніть всі поля коректно
              </Typography> :
              null
            }
            {success ?
              <Typography sx={{fontSize: 16, fontWeight: 500, marginTop: 2, color: 'green'}}>
                Геолокація додана успішно
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
