import React, {useState} from 'react';
import moment from 'moment';
import 'moment/locale/uk';

import {Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Box
} from '@mui/material';

import {UserObject} from "../../TypesAndInterfaces";

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CircularProgress from '@mui/material/CircularProgress';

interface UserId {
  id: string | undefined;
}
export const ViewModal = ({id}: UserId):JSX.Element =>  {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState<UserObject | undefined>();
  const [loading, isLoading] = useState(false);
  moment.locale('uk');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onUserInfo = async () => {
    isLoading(true)
    setOpen(true);
    const fetching = await fetch(`https://cktour.club/api/v1/users/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: 'Bearer ' +  localStorage.getItem('adminToken'),
          'Content-Type': 'application/json'
        }
      });
    const res = await fetching.json();
    setUser(res);
    isLoading(false);
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <RemoveRedEyeIcon onClick={onUserInfo}/>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Загальна інформація"}
        </DialogTitle>
        {loading ?
          <Box sx={{margin: '0 auto'}}><CircularProgress/></Box> :
          <DialogContent>
            {user ?
              <Box>
                <Typography variant='body2'>ПІБ: {user.name}</Typography>
                <Typography variant='body2'>Роль: {user.role}</Typography>
                <Typography variant='body2'>Пошта: {user.email}</Typography>
                <Typography variant='body2'>Створений: {moment(user.created_at).format("dddd, MMM DD HH:mm a")}</Typography>
                <Typography variant='body2'>Останнє редагування: {moment(user.updated_at).format("dddd, MMM DD HH:mm a")}</Typography>
              </Box> :
              null
            }
          </DialogContent>
        }
        <DialogActions>
          <Button onClick={handleClose}>Зачинити</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}