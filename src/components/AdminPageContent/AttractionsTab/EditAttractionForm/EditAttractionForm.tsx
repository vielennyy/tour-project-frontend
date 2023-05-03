import React, {ChangeEvent, useState} from 'react';

import {Box,
  Button,
  TextField,
  Dialog,
  Typography} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

import { useFormik } from 'formik';

interface Values {
  title: string;
  description: string;
  latitude: string;
  longitude: string;
  image: any;
}

interface ValuesProps {
  props: {
    title: string;
    description: string;
    id: string;
    image_url: string;
    geolocations: any;
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

export const EditAttractionForm = ({props}:ValuesProps):JSX.Element => {
  const [file, setFile] = useState<File>(new File(['file'], "image.png", {type: 'image/png'}));
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  let geolocationObject:GeolocationObject = {
    locality: "string",
    latitude: 0,
    longitude: 0,
    street: "string",
    suite: "string",
    zip_code: "string"
  };

  let latitudeValue;
  let longitudeValue;

  if(props.geolocations.length > 0 ) {
    const {latitude, longitude} = props.geolocations[0];
    geolocationObject = props.geolocations[0];
    latitudeValue = latitude;
    longitudeValue = longitude;
  }

  const initialValues = {
    title: props.title,
    description: props.description,
    latitude: latitudeValue,
    longitude: longitudeValue
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onAttractionAdded = async (values: Values) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('image', file);

    const fetching = await fetch(`https://cktour.club/api/v1/attractions/${props.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: 'Bearer ' +  localStorage.getItem('adminToken')
        },
        body: formData
      })

    if(fetching.ok){
      geolocationUpdate(values)
    }
  }

  const geolocationUpdate = async (values: Values) => {
    const geolocationBody = {...geolocationObject,
      latitude: values.latitude,
      longitude: values.longitude
    }
    console.log('2', geolocationBody)
    const fetching = await fetch(`https://cktour.club/api/v1/attractions/${props.id}/geolocations/${props.geolocations[0].id}`,
      {
        method: "PUT",
        headers: {
          Authorization: 'Bearer ' +  localStorage.getItem('adminToken')
        },
        body: JSON.stringify(geolocationBody)
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

  const handleFileLoad = (event:ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const uploadedFile = (event.target as HTMLInputElement).files[0];
    setFile(uploadedFile);
  }

  const formik = useFormik({
    initialValues: {...initialValues,
      image: file
    },
    onSubmit: (values:Values) => {
      console.log('1', values)
      onAttractionAdded(values);
    }
  });

  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        <EditIcon/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 2
        }}>
          <Typography variant='h6'>Редагувати атракцію</Typography>
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
              id="title"
              name="title"
              type="text"
              label="Заголовок"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            {props.geolocations.length > 0 ?
              <Box>
                <TextField
                  fullWidth
                  id="latitude"
                  name="latitude"
                  type="number"
                  label="Широта"
                  value={formik.values.latitude}
                  onChange={formik.handleChange}
                  sx={{marginTop: "25px"}}
                />
                <TextField
                  fullWidth
                  id="longitude"
                  name="longitude"
                  type="number"
                  label="Довгота"
                  value={formik.values.longitude}
                  onChange={formik.handleChange}
                  sx={{marginTop: "25px"}}
                />
              </Box> :
              null
            }
            <TextField
              multiline
              rows={4}
              fullWidth
              id="description"
              name="description"
              label="Опис"
              value={formik.values.description}
              onChange={formik.handleChange}
              sx={{marginTop: "25px"}}
            />
            <Box sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              padding: '25px 0 0 0 '
            }}>
              <input
                id="file"
                name="image"
                type="file"
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleFileLoad(event)}
              />
            </Box>
            {error ?
              <Typography sx={{fontSize: 16, fontWeight: 500, marginTop: 2, color: '#EF5151'}}>
                Заповніть всі поля коректно
              </Typography> :
              null
            }
            {success ?
              <Typography sx={{fontSize: 16, fontWeight: 500, marginTop: 2, color: 'green'}}>
                Атракція оновлена успішно
              </Typography> :
              null
            }
            <Button color="primary" variant="contained" fullWidth type="submit" sx={{
              width: 200,
              height: 40,
              marginTop: "25px",
              borderRadius: '10px',
            }}>
              Редагувати
            </Button>
          </form>
        </Box>
      </Dialog>
    </Box>
  );
}
