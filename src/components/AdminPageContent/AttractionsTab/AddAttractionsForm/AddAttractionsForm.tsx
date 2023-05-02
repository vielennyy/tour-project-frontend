import React, {ChangeEvent, useEffect, useState} from 'react';

import {
  Box,
  Button,
  TextField,
  Dialog,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useFormik } from 'formik';

interface FetchDataType {
  props: () => void;
}

interface Values {
  name: string;
  description: string;
}

const initialValues = {
  name: '',
  description: '',
}
export const AddAttractionsForm = ({props}:FetchDataType):JSX.Element => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [file, setFile] = useState<File>(new File(['file'], "image.png", {type: 'image/png'}));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onAttractionAdded = async (values: Values) => {
    const formData = new FormData();
    console.log(values, file);
    formData.append('title', values.name);
    formData.append('description', values.description);
    formData.append('image', file);

    const response = await fetch('https://cktour.club/api/v1/attractions',
      {
        method: "POST",
        headers: {
          Authorization: 'Bearer ' +  localStorage.getItem('adminToken'),
        },
        body: formData
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
      onAttractionAdded(values);
    }
  });

  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        Додати
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 2
        }}>
          <Typography variant='h6'>Додати атракцію</Typography>
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
              id="name"
              name="name"
              label="Заголовок"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
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
                id="image"
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
                Атракція додана успішно.
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