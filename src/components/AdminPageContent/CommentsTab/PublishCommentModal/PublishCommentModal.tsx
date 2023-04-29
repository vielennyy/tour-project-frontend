import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import {Box} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
interface PublishComment {
  id: string;
  commentable_type: string;
  commentable_id: string;
}

interface PublishCommentProps {
  props: PublishComment
}

export const PublishCommentModal = ({props}:PublishCommentProps):JSX.Element => {
  const [open, setOpen] = React.useState(false);
  // const type = `${props.commentable_type}s`;
  const handleClickOpen = () => {
    setOpen(true);
  };
  // console.log(type)
  const onCommentUpdate = async () => {
    const fetching = await fetch(`https://cktour.club/api/v1/${props.commentable_type.toLowerCase()}s/${props.commentable_id}/comments/${props.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: 'Bearer ' +  localStorage.getItem('adminToken'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'published'})
      });
    setOpen(false);
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
          <Button onClick={onCommentUpdate}>Підтвердити</Button>
          <Button onClick={() => setOpen(false)} autoFocus>
            Відхилити
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}