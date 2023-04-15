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
}

interface ValuesProps {
  props: {
    title: string;
    description: string;
    id: string;
  }
}

export const EditAttractionForm = ({props}:ValuesProps):JSX.Element => {
  const initialValues = {
    title: props.title,
    description: props.description,
  }
  const [file, setFile] = useState<File>(new File(['file'], "image.png", {type: 'image/png'}));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onAttractionAdded = (values: Values) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('image', file);

    fetch(`https://cktour.club/api/v1/attractions/${props.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: 'Bearer ' +  localStorage.getItem('adminToken')
        },
        body: formData
      }).then(() => handleClose());
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
              id="name"
              name="name"
              label="Заголовок"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            <TextField
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
