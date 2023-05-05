import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import {Typography,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from '@mui/icons-material/Close';

import tv from '../../../../../assets/icons/Room/tv.png';
import conditioner from '../../../../../assets/icons/Room/conditioner.png';
import hair from '../../../../../assets/icons/Room/heir.png';

import {Room} from "../../../../TypesAndInterfaces";
import {RoomAmenities} from "../../../../TypesAndInterfaces";

interface RoomTypes {
  room: Room
  image_urls: any
}

interface RoomProps {
  props?: RoomTypes
}


export const ShowDetailsModal = ({props}:RoomProps) => {
  const [amenities, setAmenities] = useState<RoomAmenities | undefined>();
  const [open, setOpen] = useState(false);
  const {id} = useParams();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchingAmenities = async () => {
    const fetching = await fetch(`https://cktour.club/api/v1/accommodations/${id}/rooms/${props?.room.id}/amenities`,
      {
        method: "GET"
      });
    const json = await  fetching.json();
    return setAmenities(json[0].data);
  }

  useEffect(() => {
    if(props?.room.id) {
      fetchingAmenities()
    }
  }, [props?.room.id])

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={{
        border: 'none',
        paddingRight: 0
      }}>
        <Typography variant='h6' sx={{
          textTransform: 'none'
        }}>
          Деталі
        </Typography>
        <ArrowForwardIcon color={"primary"}/>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth='xl'
      >
        <DialogContent sx={{
          width: '100%'
        }}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: '70% 30%',
            position: 'relative',
            width: '100%'
          }}>
            <Button onClick={handleClose} sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              minWidth: 20,
              color: "inherit",
              padding: 0
            }}>
              <CloseIcon/>
            </Button>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 1,
              borderRight: '1px solid rgba(117, 118, 120, 0.56)',
              paddingRight: 2,
              minWidth: 630
            }}>
              {props?.image_urls.map((image:any) =>
                <img src={image} alt='luks' style={{width: '300px', height: '200px', objectFit: 'cover', borderRadius: '5px'}}/>
              )}
            </Box>
            <Box sx={{
              paddingLeft: 3,
              minWidth: 300
            }}>
              <Typography variant='h4'>
                {props?.room.name}
              </Typography>
              <Typography variant='body2' sx={{
                marginTop: 2
              }}>
                {props?.room.description}
              </Typography>
              <Typography variant='h6' sx={{
                marginTop: 1
              }}>
                {`${props?.room.price_per_night}грн  за 1 ніч`}
              </Typography>
                <Box>
                  <Typography variant='body2' sx={{
                    marginTop: 2
                  }}>
                    Зручності номеру
                  </Typography>
                  {amenities?.tv ?
                    <Box sx={{display: 'flex', marginTop: 2}}>
                      <img src={tv} alt='pay_icon' style={{width: '30px', height: '30px'}}/>
                      <Typography variant='body2' sx={{marginLeft: 2}}>
                        Телевізор
                      </Typography>
                    </Box> :
                    null
                  }
                  {amenities?.conditioner ?
                    <Box sx={{display: 'flex', marginTop: 2}}>
                      <img src={conditioner} alt='pay_icon' style={{width: '30px', height: '30px'}}/>
                      <Typography variant='body2' sx={{marginLeft: 2}}>
                        Кондиціонер
                      </Typography>
                    </Box> :
                    null
                  }
                  {amenities?.hair_dryer ?
                    <Box sx={{display: 'flex', marginTop: 2}}>
                      <img src={hair} alt='pay_icon' style={{width: '30px', height: '30px'}}/>
                      <Typography variant='body2' sx={{marginLeft: 2}}>
                        Фен
                      </Typography>
                    </Box> :
                    null
                  }
                </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}