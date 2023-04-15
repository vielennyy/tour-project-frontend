import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
interface UserId {
  id: string | undefined;
}

export const ChangeStatusModal = ({id}: UserId):JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    console.log(id)
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const onAttractionUpdate = async () => {
    const fetching = await fetch(`https://cktour.club/api/v1/accommodations/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: 'Bearer ' +  localStorage.getItem('adminToken'),
          'Content-Type': 'application/json'
        }
      });
    setOpen(false);
  }

  return (
    <Box>
      <CheckCircleOutlineIcon onClick={handleClickOpen} sx={{cursor: 'pointer'}}/>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Опублікувати?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={onAttractionUpdate}>Підтвердити</Button>
          <Button onClick={() => setOpen(false)} autoFocus>
            Відхилити
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}