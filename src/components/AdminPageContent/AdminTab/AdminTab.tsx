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

import {AddAdminForm} from "./AddAdminForm";
import {DeleteConfirmModal} from "../DeleteConfirmModal";

function createData(
  id: number,
  fullname: string,
  email: string,
  createAt: string,
) {
  return { id, fullname, email, createAt};
}

const rows = [
  createData(1, 'Кравченко Ілля Володимирович', 'ddallmour@gmail.com', '18.03.2023')
];

export const AdminTab = ():JSX.Element =>  {
  return (
    <Box>
      <AddAdminForm/>
      <TableContainer>
        <Table sx={{ width: 1024 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Нік</TableCell>
              <TableCell align="right">Email</TableCell>
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
                <TableCell align="right">{row.fullname}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.createAt}</TableCell>
                <TableCell align="right" sx={{display: 'flex', flexDirection: 'row-reverse'}}><EditIcon/><RemoveRedEyeIcon/><DeleteConfirmModal/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
