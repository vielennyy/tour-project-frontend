import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/uk';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Box,
  TableRow, Button
} from '@mui/material';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CircularProgress from "@mui/material/CircularProgress";

import { ChangeStatusModal } from "../ChangeStatusModal";
import { DeleteConfirmModal } from "../../DeleteConfirmModal";
import { PreviewModal} from "../PreviewModal";

export const AccommodationsTab = ():JSX.Element =>  {
  const fetchUrl = 'https://cktour.club/api/v1/accommodations/';
  const [accommodations, setAccommodations] = useState<[]>([]);
  const [loading, isLoading] = useState(false);
  moment.locale('uk');

  const fetchData = async () => {
    isLoading(true)
    const fetching = await fetch('https://cktour.club/api/v1/accommodations',
        {
          method: "GET",
          headers: { Authorization: 'Bearer ' +  localStorage.getItem('adminToken') }
        });
    const json = await fetching.json();
    isLoading(false);
    return setAccommodations(json.data);
  }
  useEffect(() => {
    fetchData()
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
                <TableCell align="right">Тип житла</TableCell>
                <TableCell align="right">Назва закладу</TableCell>
                {/*<TableCell align="right">Широта</TableCell>*/}
                {/*<TableCell align="right">Довгота</TableCell>*/}
                <TableCell align="right">Статус</TableCell>
                <TableCell align="right">Створено</TableCell>
                <TableCell align="right">Змінено</TableCell>
                <TableCell align="right">Опції</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accommodations.map(({id, person, kind, name, status, created_at, updated_at}, index) => (
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
                    {/*<TableCell align="right">{row.latitude}</TableCell>*/}
                    {/*<TableCell align="right">{row.longitude}</TableCell>*/}
                    <TableCell align="right">{status}</TableCell>
                    <TableCell align="right">{moment(created_at).format("MMMM DD HH:mm ")}</TableCell>
                    <TableCell align="right">{moment(updated_at).format("MMMM DD HH:mm ")}</TableCell>
                    <TableCell align="right">
                      <ChangeStatusModal props={accommodations[index]}/>
                      {/*<Button variant="outlined">*/}
                      {/*  <Link to={`/accommodations/${id}`} target='_blank' style={{width: '24px', height: '24px', color: '#EF5151'}}>*/}
                      {/*    <RemoveRedEyeIcon/>*/}
                      {/*  </Link>*/}
                      {/*</Button>*/}
                      <PreviewModal props={accommodations[index]}/>
                      <DeleteConfirmModal props={{id, fetchUrl, fetchData}}/>
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

