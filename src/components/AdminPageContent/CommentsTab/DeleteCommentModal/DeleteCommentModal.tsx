import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box} from '@mui/material';

interface CommentTypes {
  id: string | undefined;
  commentable_id: string | undefined;
}

interface ConfirmProps {
  props: CommentTypes
}

export const DeleteCommentModal = ({props}: ConfirmProps):JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const onDelete = async () => {
    const fetching = await fetch(`https://cktour.club/api/v1/accommodations/${props.commentable_id}/comments/${props.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: 'Bearer ' +  localStorage.getItem('adminToken'),
          'Content-Type': 'application/json'
        }
      });
    setOpen(false);
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
      </Dialog>
    </Box>
  );
}