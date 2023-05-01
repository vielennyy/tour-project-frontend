import {useEffect, useState} from "react";

import {Box, Button, Typography} from "@mui/material";
import moment from 'moment';
import 'moment/locale/uk';

import rating from '../../../../assets/image/accommodations/Rating.png';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { CommentType } from "../../../TypesAndInterfaces";
import { User} from "../../../TypesAndInterfaces";

interface CommentProps {
  comment: CommentType;
}
export const Comment = ({comment}:CommentProps):JSX.Element => {
  const [user, setUser] = useState<User>()
  moment.locale('uk');

  useEffect( () => {
    fetch(`https://cktour.club/api/v1/users/${comment.user_id}`,
      {
        method: "GET",
        headers: { Authorization: 'Bearer ' +  localStorage.getItem('token') }
      })
      .then(response => response.json())
      .then(result => setUser(result))
  }, [])

  return(
    <Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Typography variant='h5'>
          {user ? user.name : "Ім'я приховане"}
        </Typography>
        <Typography variant='h5' sx={{
          color: '#777777',
          fontSize: 16
        }}>
          {/*3 квітня 2023*/}
          {moment(comment.created_at).format("DD MMMM YYYY HH:mm ")}
        </Typography>
      </Box>
      <img src={rating} alt='rating' style={{width: '150px', height: '25px', marginTop: '16px'}}/>
      <Typography variant='body2' sx={{marginTop: 2}}>
        {comment.body}
      </Typography>
    </Box>
  )
}