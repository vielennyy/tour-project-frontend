import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';


import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import {Accommodation} from "../../../TypesAndInterfaces";
import {Box, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface AccomodationProps {
  props: Accommodation
}
export const PreviewModal = ({props}:AccomodationProps):JSX.Element =>  {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
          <RemoveRedEyeIcon/>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth='lg'
      >
        <DialogContent>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: '70% 30%',
            position: 'relative'
          }}>
            <Button onClick={handleClose} sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              minWidth: 20,
              color: "inherit",
              padding: 0,
              marginTop: 1
            }}>
              <CloseIcon/>
            </Button>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 1,
              borderRight: '1px solid rgba(117, 118, 120, 0.56)',
              paddingRight: 2,
              minWidth: 630
            }}>
              {props.images.map((image:any) =>
                <img src={image} alt='luks' style={{width: '300px', height: '200px', objectFit: 'cover', borderRadius: '5px'}}/>
              )}
            </Box>
            <Box sx={{
              paddingLeft: 3,
              minWidth: 300
            }}>
              <Typography variant='h4'>
                {props.name}
              </Typography>
              <Typography variant='body2' sx={{
                marginTop: 2
              }}>
                Вид: {props.kind}
              </Typography>
              <Typography variant='body2' sx={{
                marginTop: 2
              }}>
                Опис: {props.description}
              </Typography>
              <Typography variant='body2' sx={{
                marginTop: 2
              }}>
                Користувач: {props.person}
              </Typography>
              <Typography variant='body2' sx={{
                marginTop: 2
              }}>
                Номер телефону: {props.phone}
              </Typography>
              <Typography variant='body2' sx={{
                marginTop: 2
              }}>
                Поштовий адрес: {props.email}
              </Typography>
              <Typography variant='body2' sx={{
                marginTop: 2
              }}>
                Код ЄДРПОУ: {props.reg_code}
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}