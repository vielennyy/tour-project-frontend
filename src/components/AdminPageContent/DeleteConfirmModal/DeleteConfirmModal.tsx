import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Typography} from '@mui/material';
import {useState} from "react";

interface UserId {
  id: string | undefined;
  fetchUrl: string | undefined;
  fetchData: () => void;
}

interface ConfirmProps {
  props: UserId
}

export const DeleteConfirmModal = ({props}: ConfirmProps):JSX.Element => {
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const onDelete = async () => {
    const fetching = await fetch(`${props.fetchUrl}${props.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: 'Bearer ' +  localStorage.getItem('adminToken'),
          'Content-Type': 'application/json'
        }
      });
    if(fetching.status === 200) {
      setSuccess(true)
      setTimeout(() => {
        setOpen(false);
        props.fetchData()
      }, 2000);
    }
  }

  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        <DeleteIcon onClick={handleClickOpen}/>
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Видалити?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={onDelete}>Підтвердити</Button>
          <Button onClick={() => setOpen(false)} autoFocus>
            Відхилити
          </Button>
        </DialogActions>
        {success ?
          <Typography sx={{fontSize: 16, fontWeight: 500, marginLeft: 2, marginBottom: 1, color: 'green'}}>
            Успішно!
          </Typography> :
          null
        }
      </Dialog>
    </Box>
  );
}