import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/uk';

import {
  Box, Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CircularProgress from "@mui/material/CircularProgress";

import { PublishCommentModal } from "./PublishCommentModal";
import { DeleteCommentModal } from "./DeleteCommentModal";

export const CommentsTab = ():JSX.Element =>  {
  const [commentsList, setCommentsList] = useState<[]>([]);

  const [loading, isLoading] = useState(false);
  moment.locale('uk');

  const fetchingComments = async () => {
    isLoading(true)
    const fetching = await fetch('https://cktour.club/api/v1/admins/unpublished_comments',
      {
        method: "GET",
        headers: { Authorization: 'Bearer ' +  localStorage.getItem('adminToken') }
      });
    const json = await fetching.json();
    isLoading(false);
    return setCommentsList(json.data);
  }

  useEffect(() => {
    fetchingComments()
  }, [])

  return (
    <Box>
      {loading ?
        <Box sx={{marginTop: 2}}><CircularProgress/></Box> :
        <TableContainer>
          <Table sx={{ width: 1024 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Коментар</TableCell>
                <TableCell align="right">Об'єкт коментаря</TableCell>
                <TableCell align="right">Статус</TableCell>
                <TableCell align="right">Створено</TableCell>
                <TableCell align="right">Змінено</TableCell>
                <TableCell align="right">Опції</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {commentsList.map(({id, body, commentable_type, commentable_id, created_at, status, updated_at}) => (
                <TableRow
                  key={id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {id}
                  </TableCell>
                  <TableCell align="right">{body}</TableCell>
                  <TableCell align="right">{commentable_type}</TableCell>
                  <TableCell align="right">{status}</TableCell>
                  <TableCell align="right">{moment(created_at).format("MMMM DD HH:mm ")}</TableCell>
                  <TableCell align="right">{moment(updated_at).format("MMMM DD HH:mm ")}</TableCell>
                  <TableCell align="right">
                    <PublishCommentModal props={{id, commentable_id, commentable_type}}/>
                    <Button variant="outlined">
                      <Link to={`/accommodations/${commentable_id}`} target='_blank' style={{width: '24px', height: '24px', color: '#EF5151'}}>
                        <RemoveRedEyeIcon/>
                      </Link>
                    </Button>
                    <DeleteCommentModal props={{id, commentable_id}}/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </Box>
  );
}
