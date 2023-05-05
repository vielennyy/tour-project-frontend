import React, {useState, useEffect} from "react";
import { useParams} from "react-router-dom";

import {Box, Typography} from "@mui/material";

import { Comment } from "./Comment";
import { AddComment } from "../../AddComment";
import { CommentType } from "../../TypesAndInterfaces";

import star from '../../../assets/image/accommodations/Star.png';
export const AccommodationComments = ():JSX.Element => {
  const [commentList, setCommentList] = useState<[]>([])
  const [rate, setRate] = useState()
  const {id} = useParams();

  const fetchingComments = async () => {
    const fetching = await fetch(`https://cktour.club/api/v1/accommodations/${id}/comments`,
      {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
      });
    const json = await fetching.json();
    return setCommentList(json.data);
  }

  useEffect(() => {
    fetchingComments()
  }, [])

  useEffect( () => {
    fetch(`https://cktour.club/api/v1/accommodations/${id}/rates`,
      {
        method: "GET"
      })
      .then(response => response.json())
      .then(result => setRate(result))
  }, [])

  return(
    <Box sx={{
      marginTop: 8
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'end'
      }}>
        <img src={star} alt='star_logo' style={{width: '30px', height: '30px'}}/>
        <Typography variant='h5' sx={{marginLeft: 2}}>
          {rate}
        </Typography>
        <span style={{color: 'red', marginLeft: '8px'}}>·</span>
        <Typography variant='h5' sx={{marginLeft: 1}}>
          {commentList.length} відгуків
        </Typography>
      </Box>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        marginTop: 2,
        columnGap: '100px',
        rowGap: '40px'
      }}>
        {commentList.length > 0 ?
          commentList.map((comment: CommentType) =>
            <Comment key={comment.id} comment={comment}/>
          )
          :
          <Typography>Немає жодного коментаря</Typography>
        }
      </Box>
      {localStorage.getItem('token') ? <AddComment/> : null}
    </Box>
  )
}

// <Button sx={{
//   background: '#FFFFFF',
//   padding: '18px',
//   borderRadius: '7px',
//   width: 280,
//   maxHeight: 60,
//   marginLeft: 4,
//   border: '1px solid #EF5151'
// }}
//         variant="contained">
//   <Typography sx={{ margin: '0 20px', color: '#EF5151', fontSize: 18, fontWeight: 700, textTransform: 'none'}}>
//     Написати відгук
//   </Typography>
// </Button>

// <Button sx={{
//   background: '#EF5151',
//   padding: '18px',
//   borderRadius: '7px',
//   width: 280,
//   maxHeight: 60,
// }}
//         variant="contained">
//   <Typography sx={{ margin: '0 20px', color: '#FFFFFF', fontSize: 18, fontWeight: 700, textTransform: 'none'}}>
//     Читати всі відгуки
//   </Typography>
// </Button>