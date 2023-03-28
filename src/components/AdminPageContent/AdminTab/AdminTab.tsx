import React, {useState, useEffect} from 'react';

import {Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Box,
  Button,
  TableRow} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import {AddAdminForm} from "./AddAdminForm";
import {DeleteConfirmModal} from "../DeleteConfirmModal";
import utils from "../../../utils/utils";

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
  const [users, setUsers] = useState<[]>([]);
  const {getUsers: getUsers} = utils();

  const handleLogin = () => {
    const res = fetch(`http://164.92.135.103/api/v1/auth/login`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": "admin@test.com",
          "password": "Admin123!"
        })
      })
    console.log(res)
    return res
  }

  const fetchingUsers = async () => {
    const response = await fetch(`http://164.92.135.103/api/v1/auth/login`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": "admin@test.com",
          "password": "Admin123!"
        })
      })
    const token = await response.json();
    const fetching = await fetch('http://164.92.135.103/api/v1/users',
      {
        method: "GET",
        headers: { Authorization: 'Bearer ' +  token.token }
      });
    const json = await fetching.json();
    return setUsers(json);
  }

  return (
    <Box>
      <Button onClick={fetchingUsers}>
        Click
      </Button>
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
