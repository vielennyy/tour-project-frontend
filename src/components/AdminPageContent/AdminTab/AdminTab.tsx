import React, {useState, useEffect} from 'react';
import moment from 'moment';
import 'moment/locale/uk';

import {Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Box,
  TableRow} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import {AddAdminForm} from "./AddAdminForm";
import {DeleteConfirmModal} from "../DeleteConfirmModal";
import CircularProgress from '@mui/material/CircularProgress';

import {UserToken} from "../../TypesAndInterfaces";

export const AdminTab = ({token}:UserToken):JSX.Element =>  {
  const [admins, setAdmins] = useState<[]>([]);
  const [loading, isLoading] = useState(false);
  moment.locale('uk');
  const fetchingUsers = async () => {
    isLoading(true)
    const fetching = await fetch('https://cktour.club/api/v1/users?role=admin',
      {
        method: "GET",
        headers: { Authorization: 'Bearer ' +  token }
      });
    const json = await fetching.json();
    isLoading(false);
    return setAdmins(json);
  }

  useEffect(() => {
    fetchingUsers()
  }, [])

  console.log(admins)
  return (
    <Box>
      <AddAdminForm token={token}/>
      {loading ?
        <Box sx={{marginTop: 2}}><CircularProgress/></Box> :
        <TableContainer>
          <Table sx={{ width: 1024 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">ПІБ</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Створено</TableCell>
                <TableCell align="right">Опції</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {admins.map(({id, name, email, created_at}) => (
                  <TableRow
                      key={id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {id}
                    </TableCell>
                    <TableCell align="right">{name}</TableCell>
                    <TableCell align="right">{email}</TableCell>
                    <TableCell align="right">{moment(created_at).format("dddd, MMM DD HH:mm a")}</TableCell>
                    <TableCell align="right" sx={{display: 'flex', flexDirection: 'row-reverse'}}><EditIcon/><RemoveRedEyeIcon/><DeleteConfirmModal/></TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </Box>
  );
}
