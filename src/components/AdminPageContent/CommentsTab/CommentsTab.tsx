import * as React from 'react';

import {Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function createData(
  id: number,
  name: string,
  email: string,
  text: string,
  status: string,
  createAt: string,
) {
  return { id, name, email, text, status, createAt};
}

const rows = [
  createData(1, 'Кравченко Ілля Володимирович', 'ddallmour@gmail.com', 'Дуже смачна кухня', 'Очікує','18.03.2023')
];

export const CommentsTab = ():JSX.Element =>  {
  return (
    <TableContainer>
      <Table sx={{ width: 1024 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Нік користувача</TableCell>
            <TableCell align="right">Email користувача</TableCell>
            <TableCell align="right">Текст коментаря</TableCell>
            <TableCell align="right">Статус</TableCell>
            <TableCell align="right">Створено</TableCell>
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
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.text}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.createAt}</TableCell>
              <TableCell align="right"><RemoveRedEyeIcon/><DeleteIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
