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
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CircularProgress from "@mui/material/CircularProgress";

import {UserToken} from "../../../TypesAndInterfaces";

export const AccommodationsTab = ({token}:UserToken):JSX.Element =>  {
  const [accommodations, setAccommodations] = useState<[]>([]);
  const [loading, isLoading] = useState(false);
  moment.locale('uk');

  const fetchingAccommodations = async () => {
    isLoading(true)
    const fetching = await fetch('https://cktour.club/api/v1/accommodations',
        {
          method: "GET",
          headers: { Authorization: 'Bearer ' +  token }
        });
    const json = await fetching.json();
    isLoading(false);
    return setAccommodations(json.data);
  }

  useEffect(() => {
    fetchingAccommodations()
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
              {accommodations.map(({id, person, kind, name, status, created_at, updated_at}) => (
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
                    <TableCell align="right">{moment(created_at).format("dddd, MMM DD HH:mm a")}</TableCell>
                    <TableCell align="right">{moment(updated_at).format("dddd, MMM DD HH:mm a")}</TableCell>
                    <TableCell align="right"><EditIcon/><RemoveRedEyeIcon/><DeleteIcon/></TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </Box>
  );
}
