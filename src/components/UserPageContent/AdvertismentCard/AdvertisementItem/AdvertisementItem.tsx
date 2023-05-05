import { Accommodation } from "src/components/TypesAndInterfaces"
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { SvgIcon, ListItem } from "@mui/material";
import { useState } from 'react'
import { CreateRoom } from "src/components/CreateRoom";
import { EditAccommodation } from "src/components/EditAdvertisement/Accommodation";

interface myComponentProps {
    props: Accommodation,
}

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

export const CheckingItem = ({props}:myComponentProps) =>{
    const date = new Date(props.updated_at)
    const updatedAt = formatDate(date)
    // const updatedAt = formatDate(date)
    console.log(props.user_id)

    return(
        <Box sx = {{boxShadow: '0px 4px 15px rgba(3, 2, 2, 0.25)',
                    borderRadius: '15px'}} 
            display='flex'
            width={720} 
            border={'none'} 
            margin={'0px 0px 20px 0px'} 
            justifyContent={'space-between'}
            padding={'30px'}
            >
                {/* <ListItem alignItems="flex-start"> */}

                    <ListItemAvatar>
                            {props.images!== undefined && props.images.length > 0 ?
                        <Avatar alt="Remy Sharp" variant="rounded" sx={{ width: 165, height: 165, marginRight: '23px'}} src={props.images[0]} />
                            :
                            <Avatar alt="Remy Sharp" variant="rounded" sx={{ width: 165, height: 165, marginRight: '23px'}} src="/static/images/avatar/1.jpg" />
                        }
                    </ListItemAvatar>
                    <ListItemText
                        primary= {<Typography fontSize={22} fontWeight={500} sx={{marginBottom: '10px'}} color='#222222'>{props.name}</Typography>}                   
                        secondary={<>
                            <Typography fontSize={16} color='#222222' sx={{marginBottom: '10px', maxWidth:'200px'}}>
                            {props.description.slice(0, 150)+' ...'}
                            </Typography>
                            <Typography fontSize={18} color='#777777' sx={{marginBottom: '10px'}}>
                            Останні зміни:  <Typography color='#222222' display='inline' sx={{marginLeft:'5px'}}>{updatedAt}</Typography>
                            </Typography>
                        </>}
                    />
                    <Typography fontSize={16} color='#777777' sx={{marginBottom: '10px'}}>Об’єкт на перевірці</Typography>
                {/* </ListItem> */}
        </Box>
        
    )
}
export const ConfirmedItem = ({props}:myComponentProps) => {
    const date = new Date(props.updated_at)
    const updatedAt = formatDate(date)
    const [addRoomOpen, setAddRoomOpen] = useState(false)
    const [editAccommodationOpen, setEditAccommodationOpen] = useState(false)

    return(
        <Box sx = {{boxShadow: '0px 4px 15px rgba(3, 2, 2, 0.25)',
                    borderRadius: '15px'}} 
            width={720} 
            border={'none'} 
            margin={'0px 0px 20px 0px'} 
            justifyContent={'space-between'}
            padding={'30px'}
            >
                <ListItem alignItems="flex-start">

                    <ListItemAvatar>
                        {props.images!== undefined && props.images.length > 0 ?
                    <Avatar alt="Remy Sharp" variant="rounded" sx={{ width: 165, height: 165, marginRight: '23px'}} src={props.images[0]} />
                        :
                        <Avatar alt="Remy Sharp" variant="rounded" sx={{ width: 165, height: 165, marginRight: '23px'}} src="/static/images/avatar/1.jpg" />
                    }
                    </ListItemAvatar>
                    <ListItemText
                        primary= {<Typography fontSize={22} fontWeight={500} sx={{marginBottom: '10px'}} color='#222222'>{props.name}</Typography>}                   

                        secondary={<>
                            <Typography fontSize={16} color='#222222' sx={{marginBottom: '10px', maxWidth:'220px'}}>
                            {props.description.slice(0, 150)+' ...'}
                            </Typography>
                            <Typography fontSize={18} color='#777777' sx={{marginBottom: '10px'}}>
                            Останні зміни:  <Typography color='#222222' display='inline' sx={{marginLeft:'5px'}}>{updatedAt}</Typography>
                            </Typography>
                        </>}
                    />
                    <Box display='flex' flexDirection={'column'}>
                        {props.kind === "Готель" || props.kind === "Хостел" ? 
                            <>
                            <Button variant="contained" onClick = {()=>{setAddRoomOpen(true)}} sx={{width: '200px', textAlign: 'center', justifyContent: 'center', marginBottom: '20px', textTransform:'none', fontSize:'18px', padding:'10px 20px'}}>Додати номери</Button>
                            {addRoomOpen && <CreateRoom accommodation={props} open={addRoomOpen} setOpen={setAddRoomOpen}/>}
                            </>
                            :
                            <></>
                        }
                        <Button variant="contained" onClick = {()=>{setEditAccommodationOpen(true)}} sx={{width: '200px', marginBottom: '20px', textTransform:'none', fontSize:'18px', padding:'10px 20px'}}>Редагувати</Button>
                        {editAccommodationOpen && <EditAccommodation accommodation={props} open={editAccommodationOpen} setOpen={setEditAccommodationOpen}/>}
                        <Button variant="outlined" href={`/accommodations/${props.id}`} sx={{width: '200px', right: 0, textTransform:'none', fontSize:'18px', padding:'10px 20px', color: '#777777', borderColor:'#777777'}}>Переглянути</Button>
                    </Box>
                </ListItem>
        </Box>
    )
}
