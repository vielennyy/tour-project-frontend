import {Box, Button, Dialog, DialogContent, Link, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {useFormik} from "formik";

import CloseIcon from "@mui/icons-material/Close";

interface CommentType {
  body: string;
}

export const AddComment = ():JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onCommentAdd = async (body:CommentType) => {
    console.log(body)
    // const formData = new FormData();
    // formData.append('body', body);
    const res = await fetch(`https://cktour.club/api/v1/accommodations/5/comments`,
      {
        method: "POST",
        headers: {
          Authorization: 'Bearer ' +  localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then(() => handleClose());
  }
  const formik = useFormik({
    initialValues: {
      body: ''
    },
    onSubmit: (body:CommentType) => {
      onCommentAdd(body)
    }
  });

  return(
  <Box>
    <Button onClick={handleClickOpen} sx={{
        background: '#FFFFFF',
        padding: '18px',
        borderRadius: '7px',
        width: 280,
        maxHeight: 60,
        marginLeft: 4,
        border: '1px solid #EF5151'
    }}>
       <Typography sx={{ margin: '0 20px', color: '#EF5151', fontSize: 18, fontWeight: 700, textTransform: 'none'}}>
        Написати відгук
       </Typography>
    </Button>
    <Dialog open={open} onClose={handleClose}>
      <Box sx={{
        position: 'relative',
        width: 400,
        padding: 3
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography variant="h4">
            Додати відгук
          </Typography>
          <Button onClick={handleClose} sx={{
            minWidth: 20,
            color: "inherit",
            width: 14,
            height: 14
          }}>
            <CloseIcon/>
          </Button>
        </Box>
        <form onSubmit={formik.handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>
          <TextField
            fullWidth
            id="body"
            name="body"
            label="Ваш коментар"
            type="text"
            onChange={formik.handleChange}
            sx={{marginTop: "25px", fontSize: 14, }}
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
  )
}