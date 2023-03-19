import * as React from 'react';

import {Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Box,
  TableRow} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import {AddImageForm} from "./AddImageForm";

function createData(
  id: number,
  thumb: string,
  name: string,
  latitude: string,
  longitude: string,
  tags: string,
  createAt: string,
  editedAt: string
) {
  return { id, thumb, name, latitude, longitude, tags, createAt, editedAt};
}

const rows = [
  createData(1, 'image.png', 'Main-background', '23123123', '231231231', 'гори', '18.03.2023', '18.03.2023')
];

export const GalleryTab = ():JSX.Element =>  {
  return (
    <Box>
      <AddImageForm/>
      <TableContainer>
        <Table sx={{ minWidth: 1024 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">thumb</TableCell>
              <TableCell align="right">Заголовок</TableCell>
              <TableCell align="right">Широта</TableCell>
              <TableCell align="right">Довгота</TableCell>
              <TableCell align="right">Теги</TableCell>
              <TableCell align="right">Створено</TableCell>
              <TableCell align="right">Змінено</TableCell>
              <TableCell align="right">Опції</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.thumb}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.latitude}</TableCell>
                <TableCell align="right">{row.longitude}</TableCell>
                <TableCell align="right">{row.tags}</TableCell>
                <TableCell align="right">{row.createAt}</TableCell>
                <TableCell align="right">{row.editedAt}</TableCell>
                <TableCell align="right"><EditIcon/><RemoveRedEyeIcon/><DeleteIcon/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
