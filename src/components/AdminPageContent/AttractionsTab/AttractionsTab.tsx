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
import CircularProgress from '@mui/material/CircularProgress';

import { DeleteConfirmModal } from "../DeleteConfirmModal";
import { AddAttractionsForm } from "./AddAttractionsForm";
import { EditAttractionForm } from "./EditAttractionForm";
import { AddGeolocationForm } from "./AddGeolocationForm";

export const AttractionsTab = ():JSX.Element =>  {
  const fetchUrl = 'https://cktour.club/api/v1/attractions/';
  const [attractions, setAttractions] = useState<[]>([]);
  const [loading, isLoading] = useState(false);
  moment.locale('uk');

  const fetchData = async () => {
    isLoading(true)
    const fetching = await fetch('https://cktour.club/api/v1/attractions',
        {
          method: "GET",
          headers: { Authorization: 'Bearer ' +  localStorage.getItem('adminToken')  }
        });
    const json = await fetching.json();
    isLoading(false);
    return setAttractions(json);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Box>
      <AddAttractionsForm props={fetchData}/>
      {loading ?
        <Box sx={{marginTop: 2}}><CircularProgress/></Box> :
        <TableContainer>
          <Table sx={{ minWidth: 1024 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Заголовок</TableCell>
                <TableCell align="right">Опис</TableCell>
                <TableCell align="right">Широта</TableCell>
                <TableCell align="right">Довгота</TableCell>
                <TableCell align="right">Створено</TableCell>
                <TableCell align="right">Змінено</TableCell>
                <TableCell align="right">Опції</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attractions.map(({id, title, description, geolocations, created_at, updated_at, image_url}) => (
                  <TableRow
                      key={id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {id}
                    </TableCell>
                    <TableCell align="right">{title}</TableCell>
                    <TableCell align="right">{description}</TableCell>
                    <TableCell align="right">{geolocations[0] ? geolocations[0]["latitude"] : 'Невказано' }</TableCell>
                    <TableCell align="right">{geolocations[0] ? geolocations[0]["longitude"] : 'Невказано' }</TableCell>
                    <TableCell align="right">{moment(created_at).format("MMMM DD HH:mm ")}</TableCell>
                    <TableCell align="right">{moment(updated_at).format("MMMM DD HH:mm ")}</TableCell>
                    <TableCell align="right">
                      <Button variant="outlined">
                        <Link to={`/attractions/${id}`} target='_blank' style={{width: '24px', height: '24px', color: '#EF5151'}}>
                          <RemoveRedEyeIcon/>
                        </Link>
                      </Button>
                      {geolocations[0] ?
                        null :
                        <AddGeolocationForm props={{id, fetchData}}/>
                      }
                      <EditAttractionForm props={{title, description, id, image_url, geolocations, fetchData}}/>
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

