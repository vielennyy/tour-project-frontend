import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import moment from 'moment';
import 'moment/locale/uk';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box, Button
} from '@mui/material';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CircularProgress from "@mui/material/CircularProgress";

import { ChangeStatusModal } from "../ChangeStatusModal";
import { DeleteConfirmModal } from "../../DeleteConfirmModal";

import {UserToken} from "../../../TypesAndInterfaces";

export const FoodsTab = ({token}:UserToken):JSX.Element =>  {
  const fetchUrl = 'https://cktour.club/api/v1/caterings/';
  const [catering, setCatering] = useState<[]>([]);
  const [loading, isLoading] = useState(false);
  moment.locale('uk');

  const fetchingCatering = async () => {
    isLoading(true)
    const fetching = await fetch('https://cktour.club/api/v1/caterings',
      {
        method: "GET",
        headers: { Authorization: 'Bearer ' +  token }
      });

    const json = await fetching.json();
    isLoading(false);
    return setCatering(json.data);
  }

  useEffect(() => {
    fetchingCatering()
  }, [])

  return (
    <Box>
      {loading ?
        <Box sx={{marginTop: 2}}><CircularProgress/></Box> :
        <TableContainer>
          <Table sx={{ minWidth: 1024 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Бізнес користувач</TableCell>
                <TableCell align="right">Тип закладу</TableCell>
                <TableCell align="right">Назва закладу</TableCell>
                <TableCell align="right">Адреса</TableCell>
                <TableCell align="right">Статус</TableCell>
                <TableCell align="right">Номер телефону</TableCell>
                <TableCell align="right">Створено</TableCell>
                <TableCell align="right">Змінено</TableCell>
                <TableCell align="right">Опції</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {catering.map(({id, person, kind, name, address_owner, status, phone, created_at, updated_at}, index)  => (
                <TableRow
                  key={id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {id}
                  </TableCell>
                  <TableCell align="right">{person}</TableCell>
                  <TableCell align="right">{kind}</TableCell>
                  <TableCell align="right">{name}</TableCell>
                  <TableCell align="right">{address_owner}</TableCell>
                  <TableCell align="right">{status}</TableCell>
                  <TableCell align="right">{phone}</TableCell>
                  <TableCell align="right">{moment(created_at).format("MMMM DD HH:mm ")}</TableCell>
                  <TableCell align="right">{moment(updated_at).format("MMMM DD HH:mm ")}</TableCell>
                  <TableCell align="right">
                    <ChangeStatusModal props={catering[index]}/>
                    <Button variant="outlined">
                      <Link to={`/catering/${id}`} target='_blank' style={{width: '100%', color: '#EF5151'}}>
                        <RemoveRedEyeIcon/>
                      </Link>
                    </Button>
                    <DeleteConfirmModal props={{id, fetchUrl}}/>
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
