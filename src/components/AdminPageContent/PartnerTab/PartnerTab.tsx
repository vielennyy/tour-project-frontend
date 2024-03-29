import React, {useState, useEffect} from 'react';
import moment from 'moment';
import 'moment/locale/uk';

import {Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Box,
  TableRow} from '@mui/material'
import CircularProgress from "@mui/material/CircularProgress";

import { DeleteConfirmModal } from "../DeleteConfirmModal";
import { ViewModal } from "../ViewModal";

export const PartnerTab = ():JSX.Element =>  {
  const fetchUrl = 'https://cktour.club/api/v1/users/';
  const [partners, setPartners] = useState<[]>([]);
  const [loading, isLoading] = useState(false);
  moment.locale('uk');

  const fetchData = async () => {
    isLoading(true)
    const fetching = await fetch('https://cktour.club/api/v1/users?role=partner',
        {
          method: "GET",
          headers: { Authorization: 'Bearer ' +  localStorage.getItem('adminToken')  }
        });
    const json = await fetching.json();
    isLoading(false);
    return setPartners(json);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Box>
      {loading ?
      <Box sx={{marginTop: 2}}><CircularProgress/></Box> :
      <TableContainer>
        <Table sx={{ width: 1200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Ім'я</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Створено</TableCell>
              <TableCell align="right">Змінено</TableCell>
              <TableCell align="right">Опції</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {partners.map(({id, name, email, created_at, updated_at}) => (
                <TableRow
                    key={id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {id}
                  </TableCell>
                  <TableCell align="right">{name}</TableCell>
                  <TableCell align="right">{email}</TableCell>
                  <TableCell align="right">{moment(created_at).format("MMMM DD HH:mm ")}</TableCell>
                  <TableCell align="right">{moment(updated_at).format("MMMM DD HH:mm ")}</TableCell>
                  <TableCell align="right" sx={{display: 'flex'}}><DeleteConfirmModal props={{id, fetchUrl, fetchData}}/><ViewModal id={id}/></TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>}
    </Box>
  );
}