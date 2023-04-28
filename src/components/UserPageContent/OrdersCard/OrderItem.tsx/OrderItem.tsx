import { Reservation } from "src/components/TypesAndInterfaces"
import ListItem from '@mui/material/ListItem';
import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { SvgIcon } from "@mui/material";
import { ReactComponent as LocationIcon } from '../../UserPageIcons/Location icon.svg';

interface myComponentProps {
    props: Reservation,
}

export const OrderItem = ({props}:myComponentProps) => {
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
    
      
    
    return(
        <Box sx = {{boxShadow: '0px 4px 15px rgba(3, 2, 2, 0.25)',
                    borderRadius: '15px'}} 
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
                <Avatar alt="Remy Sharp" variant="rounded" sx={{ width: 165, height: 165, marginRight: '23px'}} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <Box sx={{display:'flex', flexDirection: 'column'}}>
                <ListItemText
                primary= {<Typography fontSize={22} fontWeight={500} sx={{marginBottom: '10px'}} color='#222222'>{props.note}</Typography>}                   

                secondary={<>
                    <Typography fontSize={22} color='#777777' sx={{marginBottom: '10px'}}>
                    {formatDate(checkIn) + ' - ' + formatDate(checkOut)}
                    </Typography>
                    
</>
                }
                />
                <Box sx={{display:'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', flexDirection: 'column'}}>
                        <Typography fontSize={20} color='#222222' sx={{ display: 'flex', marginBottom: '10px', alignItems: 'center', fontSize: 20, color: '#222222' }}>
                            <SvgIcon sx={{marginTop:'0px'}}><LocationIcon/></SvgIcon>
                            Умань
                        </Typography>
                        <Chip label="Заброньовано" icon={<></>} variant="outlined" sx={{borderRadius: '6px'}}/>
                    </Box>
                <Button variant="contained"  sx={{width: '300px', position: 'absolute', bottom: 0, right: 0, textTransform:'none', fontSize:'20px'}}>Залишити коментар</Button>
                </Box>
                </Box>
                </ListItem>
        </Box>
        
    )
}
