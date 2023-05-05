import {Box, Typography} from "@mui/material";
import moment from 'moment';
import 'moment/locale/uk';

import rating from '../../../../assets/image/accommodations/Rating.png';

import { CommentType } from "../../../TypesAndInterfaces";

interface CommentProps {
  comment: CommentType;
}
export const Comment = ({comment}:CommentProps):JSX.Element => {
  moment.locale('uk');

  return(
    <Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Typography variant='h5'>
          {comment.attributes.name ? comment.attributes.name : "Ім'я приховане"}
        </Typography>
        <Typography variant='h5' sx={{
          color: '#777777',
          fontSize: 16
        }}>
          {moment(comment.attributes.created_at).format("DD MMMM YYYY HH:mm ")}
        </Typography>
      </Box>
      <img src={rating} alt='rating' style={{width: '150px', height: '25px', marginTop: '16px'}}/>
      <Typography variant='body2' sx={{marginTop: 2}}>
        {comment.attributes.body}
      </Typography>
    </Box>
  )
}