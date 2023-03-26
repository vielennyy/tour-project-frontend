import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import locationIcon from "./Location icon.svg"
import { MapItemCard } from "../../../TypesAndInterfaces"
import { HalfRating } from 'src/atom/HalfRating';
import { useState } from 'react';


export const PlaceItem = (props: MapItemCard) => {
    const [showMore, setShowMore] = useState<boolean>(false)

    const handleItemClick = () => {
        setShowMore(!showMore)
    }

    const type = props.coordinates[0].coordinatable_type
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
        <ListItem onClick={handleItemClick} sx={{cursor: 'pointer'}} alignItems="flex-start">
      <ListItemAvatar>
            <Avatar alt="Remy Sharp" variant="rounded" sx={{width: '70px', height: '70px', marginRight: '40px'}} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
            primary={props.title}
            secondary={
                <React.Fragment>
                <HalfRating/>
                <Typography
                    sx={{ display: 'block' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    {props.coordinates[0].coordinatable_type}
                </Typography>
                <img src={locationIcon}/>
                {"Черкаси"}
                </React.Fragment>
            }/>
      </ListItem>
        {/* {!showMore ? 
      <ListItem onClick={handleItemClick} sx={{cursor: 'pointer'}} alignItems="flex-start">
      <ListItemAvatar>
            <Avatar alt="Remy Sharp" variant="rounded" sx={{width: '70px', height: '70px', marginRight: '40px'}} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
            primary={props.title}
            secondary={
                <React.Fragment>
                <HalfRating/>
                <Typography
                    sx={{ display: 'block' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    {props.coordinates[0].coordinatable_type}
                </Typography>
                <img src={locationIcon}/>
                {"Черкаси"}
                </React.Fragment>
            }/>
      </ListItem>
        : 
        <ListItem onClick={handleItemClick} sx={{cursor: 'pointer', display: 'flex', flexDirection: 'column'}} alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="Remy Sharp" variant="rounded" sx={{width: '280px', height: '210px', margin: '0px 0px'}} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
            primary={props.title}
            secondary={
                <React.Fragment>
                <HalfRating/>
                <Typography
                    sx={{ display: 'block' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    {props.coordinates[0].coordinatable_type}
                </Typography>
                <img src={locationIcon}/>
                {"Черкаси"}
                </React.Fragment>
            }/>
      </ListItem>
        } */}
        
      <Divider variant="inset" component="li" sx={{marginLeft: '120px'}}/>
     </List>
  );
}