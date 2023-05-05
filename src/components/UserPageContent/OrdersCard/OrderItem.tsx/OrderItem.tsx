import { Reservation, Room } from "src/components/TypesAndInterfaces"
import { Link, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Box, Button, Chip } from '@mui/material';
import { useState, useEffect } from 'react'
import { SvgIcon } from "@mui/material";
import { ReactComponent as LocationIcon } from '../../UserPageIcons/Location icon.svg';

interface RoomBooking {
    id: number;
    room_id: number;
    user_id: number;
    full_name: string;
    phone: string;
    number_of_peoples: number;
    check_in: string;
    check_out: string;
    confirmation: string;
    note: string;
    created_at: string;
    updated_at: string;
  }

  interface myComponentProps {
    key: number,
    props: Reservation
  }

interface RoomResponce {
    room: Room,
    image_urls: string[],
}

export const OrderItem = ({props, ...rest}:myComponentProps) => {
    function formatDate(date:Date) {
        const months = [
          "січня",
          "лютого",
          "березня",
          "квітня",
          "травня",
          "червня",
          "липня",
          "серпня",
          "вересня",
          "жовтня",
          "листопада",
          "грудня"
        ];
      
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
      
        return `${day} ${months[monthIndex]} ${year}`;
      }
      
    const checkIn = new Date(props.check_in)
    
    const checkOut = new Date(props.check_out)
    
    console.log(props)

    const [room, setRoom] = useState<RoomResponce>()

    const fetchRoom = async () => {
        const fetching = await fetch(`https://cktour.club/api/v1/accommodations/${props.id}/rooms/${props.room_id}`,
          {
            method: "GET"
          });
        const json = await  fetching.json();
        return setRoom(json.data);
      }
    
      useEffect(() => {
        fetchRoom()
      }, [])


    console.log(room?.image_urls !== undefined)
    return(
        <Link href={`/accommodations/${room?.room.accommodation_id}`} underline="none">
        <Box sx = {{boxShadow: '0px 4px 15px rgba(3, 2, 2, 0.25)',
                    borderRadius: '15px', cursor: 'pointer'}} 
            width={720} 
            border={'none'} 
            margin={'0px'} 
            display="flex" 
            flexDirection={'column'} 
            justifyContent={'space-between'}
            padding={'30px'}
            
            >
                <ListItem alignItems="flex-start">

                <ListItemAvatar>
                    {room !== undefined ?  
                        <Avatar alt="Remy Sharp" variant="rounded" sx={{ width: 165, height: 165, marginRight: '23px'}} src={room.image_urls[0]} />
                        :
                        <Avatar alt="Remy Sharp" variant="rounded" sx={{ width: 165, height: 165, marginRight: '23px'}} src="/static/images/avatar/1.jpg" />
                    }
                </ListItemAvatar>
                <Box sx={{display:'flex', flexDirection: 'column'}}>
                <ListItemText
                primary= {<Typography fontSize={22} fontWeight={500} sx={{marginBottom: '10px'}} color='#222222'>{room?.room.name}</Typography>}                   

                secondary={<>
                    <Typography fontSize={22} color='#777777' sx={{marginBottom: '10px'}}>
                    {formatDate(checkIn) + ' - ' + formatDate(checkOut)}
                    </Typography>
                    <Typography fontSize={16} color='#777777' sx={{marginBottom: '10px'}}>
                    {formatDate(checkIn) + ' - ' + formatDate(checkOut)}
                    </Typography>
                    
</>
                }
                />
                <Box sx={{display:'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', flexDirection: 'column'}}>
                        {/* <Typography fontSize={20} color='#222222' sx={{ display: 'flex', marginBottom: '10px', alignItems: 'center', fontSize: 20, color: '#222222' }}>
                            <SvgIcon sx={{marginTop:'0px'}}><LocationIcon/></SvgIcon>
                            Умань
                        </Typography> */}
                        <Chip label={'Заброньовано'} icon={<></>} variant="outlined" sx={{borderRadius: '6px'}}/>
                    </Box>
                <Button variant="contained"  sx={{width: '300px', position: 'absolute', bottom: 0, right: 0, textTransform:'none', fontSize:'20px'}}>Залишити коментар</Button>
                </Box>
                </Box>
                </ListItem>
        </Box>
    </Link>  
    )
}
