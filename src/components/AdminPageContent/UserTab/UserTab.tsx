import * as React from 'react';

import {Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function createData(
  id: number,
  name: string,
  email: string,
  createAt: string,
  editedAt: string,
) {
  return { id, name, email, createAt, editedAt };
}

const rows = [
  createData(1, 'Ddallmour', 'ddallmour@gmail.com', '18.03.2023', '19.03.2023')
];

export const UserTab = ():JSX.Element =>  {
  return (
    <TableContainer>
      <Table sx={{ width: 1024 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Нік</TableCell>
            <TableCell align="right">Email</TableCell>
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
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.createAt}</TableCell>
              <TableCell align="right">{row.editedAt}</TableCell>
              <TableCell align="right"><RemoveRedEyeIcon/><DeleteIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}