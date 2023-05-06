import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
interface AccomodationProps {
  props: {
    id: string;
  };
}

export const ChangeStatusModal = ({props}: AccomodationProps):JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  console.log(props)
  const onAttractionUpdate = async () => {
    const fetching = await fetch(`https://cktour.club/api/v1/accommodations/${props.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: 'Bearer ' +  localStorage.getItem('adminToken')
        },
        body: JSON.stringify({...props, status: 'published'})
      });
    // setOpen(false);
    console.log(fetching)
  }

  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        <CheckCircleOutlineIcon/>
      </Button>
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