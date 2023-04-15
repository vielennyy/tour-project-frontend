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

import {UserToken} from "../../../TypesAndInterfaces";

function createData(
  id: number,
  partner: string,
  type: string,
  title: string,
  latitude: string,
  longitude: string,
  status: string,
  createAt: string,
  editedAt: string
) {
  return { id, partner, type, title, latitude, longitude, status, createAt, editedAt};
}

const rows = [
  createData(1, 'PartnerSecond', 'FastFood', 'McDonald`s', '231231231', '231231231', 'Очікує', '18.03.2023', '18.03.2023')
];

export const FoodsTab = ({token}:UserToken):JSX.Element =>  {
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

  // useEffect(() => {
  //   fetchingCatering()
  // }, [])
  // console.log(catering)

  return (
    <TableContainer>
      <Table sx={{ minWidth: 1024 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Бізнес користувач</TableCell>
            <TableCell align="right">Тип житла</TableCell>
            <TableCell align="right">Назва закладу</TableCell>
            <TableCell align="right">Широта</TableCell>
            <TableCell align="right">Довгота</TableCell>
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
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.latitude}</TableCell>
              <TableCell align="right">{row.longitude}</TableCell>
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
