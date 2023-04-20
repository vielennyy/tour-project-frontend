import { Accommodation } from "src/components/TypesAndInterfaces"
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { SvgIcon, ListItem } from "@mui/material";

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
    console.log(date)
    const updatedAt = formatDate(date)

    // const updatedAt = formatDate(date)

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
                    <Avatar alt="Remy Sharp" variant="rounded" sx={{ width: 165, height: 165, marginRight: '23px'}} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary= {<Typography fontSize={22} fontWeight={500} sx={{marginBottom: '10px'}} color='#222222'>{props.name}</Typography>}                   

                        secondary={<>
                            <Typography fontSize={16} color='#222222' sx={{marginBottom: '10px', maxWidth:'450px'}}>
                            {props.description}
                            </Typography>
                            <Typography fontSize={18} color='#777777' sx={{marginBottom: '10px'}}>
                            Останні зміни:  <Typography color='#222222' display='inline' sx={{marginLeft:'5px'}}>{updatedAt}</Typography>
                            </Typography>
                        </>}
                    />
                    <Typography fontSize={18} color='#777777' sx={{marginBottom: '10px'}}>Об’єкт на перевірці</Typography>
                </ListItem>
        </Box>
        
    )
}
export const ConfirmedItem = ({props}:myComponentProps) => {
    console.log(props)
    const date = new Date(props.updated_at)
    console.log(date)
    const updatedAt = formatDate(date)
      
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
                    <Avatar alt="Remy Sharp" variant="rounded" sx={{ width: 165, height: 165, marginRight: '23px'}} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary= {<Typography fontSize={22} fontWeight={500} sx={{marginBottom: '10px'}} color='#222222'>{props.name}</Typography>}                   

                        secondary={<>
                            <Typography fontSize={16} color='#222222' sx={{marginBottom: '10px', maxWidth:'450px'}}>
                            {props.description}
                            </Typography>
                            <Typography fontSize={18} color='#777777' sx={{marginBottom: '10px'}}>
                            Останні зміни:  <Typography color='#222222' display='inline' sx={{marginLeft:'5px'}}>{updatedAt}</Typography>
                            </Typography>
                        </>}
                    />
                    <Box display='flex' flexDirection={'column'}>
                    <Button variant="contained"  sx={{width: '200px', marginBottom: '20px', textTransform:'none', fontSize:'20px', padding:'10px 30px'}}>Редагувати</Button>
                    <Button variant="outlined" sx={{width: '200px', right: 0, textTransform:'none', fontSize:'20px', padding:'10px 30px', color: '#777777', borderColor:'#777777'}}>Переглянути</Button>
                    </Box>

                </ListItem>
        </Box>
    )
}
export const AdvertisementItem = ({props}:myComponentProps) => {
    
      
      
    
    return(
        <>
            
            <CheckingItem props={props}/>
            <ConfirmedItem props={props}/>
        </>
        
    )
}