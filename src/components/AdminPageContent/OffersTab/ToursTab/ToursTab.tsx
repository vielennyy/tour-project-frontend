import React, {useState, useEffect} from 'react';
import moment from 'moment';
import 'moment/locale/uk';

import {Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CircularProgress from "@mui/material/CircularProgress";


import {UserToken} from "../../../TypesAndInterfaces";


function createData(
  id: number,
  partner: string,
  title: string,
  description: string,
  price: number,
  startAt: string,
  status: string,
  createAt: string,
  editedAt: string
) {
  return { id, partner, title, description, price, startAt, status, createAt, editedAt};
}

const rows = [
  createData(1, 'PartnerThird', 'Мошни', 'Мандрівка Мошнами', 300, '30.03.2023 10:00', 'Очікує', '18.03.2023', '18.03.2023')
];

export const ToursTab = ({token}:UserToken):JSX.Element =>  {
  const [tours, setTours] = useState<[]>([]);
  const [loading, isLoading] = useState(false);
  moment.locale('uk');

  const fetchingTours = async () => {
    isLoading(true)
    const fetching = await fetch('https://cktour.club/api/v1/tours',
      {
        method: "GET",
        headers: { Authorization: 'Bearer ' +  localStorage.getItem('adminToken') }
      });
    const json = await fetching.json();
    isLoading(false);
    return setTours(json.data);
  }

  useEffect(() => {
    fetchingTours()
  }, [])

  return (
    <TableContainer>
      <Table sx={{ minWidth: 1024 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Бізнес користувач</TableCell>
            <TableCell align="right">Назва туру</TableCell>
            <TableCell align="right">Опис маршруту</TableCell>
            <TableCell align="right">Ціна</TableCell>
            <TableCell align="right">Дата/Час</TableCell>
            <TableCell align="right">Статус</TableCell>
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
              <TableCell align="right">{row.partner}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.startAt}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.createAt}</TableCell>
              <TableCell align="right">{row.editedAt}</TableCell>
              <TableCell align="right"><EditIcon/><RemoveRedEyeIcon/><DeleteIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
