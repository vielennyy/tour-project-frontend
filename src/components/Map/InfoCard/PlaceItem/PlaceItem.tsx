import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box, Button, Link } from '@mui/material'
import locationIcon from "./Location icon.svg"
import arrow from "./Arrow.svg"
import { Attraction } from "../../../TypesAndInterfaces"
import { HalfRating } from 'src/atom/HalfRating';
import { useState } from 'react';

interface myComponentProps {
    place: Attraction;
    showMore: boolean;
    setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PlaceItem = (props: Attraction) => {
    const [showMore, setShowMore] = useState<boolean>(false)

    const handleItemClick = () => {
        setShowMore(!showMore)
    }
    
    const geolocations = props.geolocations;
    if (geolocations && geolocations.length > 0) {
        const type = props.geolocations[0].geolocationable_type
    }

    return (
        <>
        {showMore ?
            <MorePlaceInfo place={props} showMore={showMore} setShowMore={setShowMore}/>
            :
            <ShortPlaceInfo place={props} showMore={showMore} setShowMore={setShowMore}/>
        }
        </>
  );
}

const ShortPlaceInfo = ({place, showMore, setShowMore}:myComponentProps) => {

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            <ListItem onClick={() => { setShowMore(!showMore) }} sx={{ cursor: 'pointer', boxShadow: '0px 4px 15px rgba(3, 2, 2, 0.25)', borderRadius: '15px' }} alignItems="flex-start">
                <ListItemAvatar>
                    {place.image_url ?
                    <Avatar alt="Remy Sharp" variant="rounded" sx={{ width: '70px', height: '70px', marginRight: '40px' }} src={place.image_url} />
                    :
                    <Avatar alt="Remy Sharp" variant="rounded" sx={{ width: '70px', height: '70px', marginRight: '40px' }} src="/static/images/avatar/1.jpg" />
                }
                </ListItemAvatar>
                <ListItemText
                    primary={place.title}
                    secondary={
                    <React.Fragment>
                    <HalfRating/>
                    {place.geolocations.length > 0 && place.geolocations[0] && place.geolocations[0].geolocationable_type ?
                        <Typography
                        sx={{ display: 'block' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {place.geolocations[0].geolocationable_type}
                    </Typography>
                        :
                        <></>
                    }
                    {place.geolocations.length > 0 && place.geolocations[0] && place.geolocations[0].locality ?
                        <>
                        <img src={locationIcon}/>
                        <Typography
                            sx={{ display: 'block' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {place.geolocations[0].locality}
                        </Typography>
                        </>
                        :
                        <></>
                        
                    }
                    </React.Fragment>
      }
    />
  </ListItem>
</List>
)}

  

const MorePlaceInfo = ({place, showMore, setShowMore}:myComponentProps) => {

    return(
            <ListItem sx={{cursor: 'pointer', marginBottom: '10px', display: 'flex', flexDirection: 'column', boxShadow: '0px 4px 15px rgba(3, 2, 2, 0.25)',
            borderRadius: '15px'}} alignItems="flex-start">
                <Box sx={{ width: "100%", height: "100%", display: 'flex', justifyContent: "center", alignItems: "center"}}>
                {place.image_url ?
                    <Avatar alt="Remy Sharp" variant="rounded" sx={{width: '300px', height: '210px', margin: '10px 0px 0px 0px'}} src={place.image_url} />
                    :
                    <Avatar alt="Remy Sharp" variant="rounded" sx={{width: '300px', height: '210px', margin: '10px 0px 0px 0px'}} src="/static/images/avatar/1.jpg" />
                }</Box>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '10px 0px'
                }}>
                    <Typography fontSize={18} fontWeight={500}>{place.title}</Typography>
                    {place.geolocations.length > 0 && place.geolocations[0] && place.geolocations[0].geolocationable_type ?
                        <Typography fontSize={14} fontWeight={300}>{place.geolocations[0].geolocationable_type}</Typography>
                        :
                        <></>
                    }
                </Box>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <HalfRating/>
                    {place.geolocations.length > 0 && place.geolocations[0] && place.geolocations[0].locality ?
                        <Typography fontSize={15} fontWeight={400}>
                        <img src={locationIcon}/>
                        {place.geolocations[0].locality}
                        </Typography>
                        :
                        <></>
                    }
                    
                </Box>
                <Typography fontSize={15} fontWeight={400}>{place.description.slice(0, 150) + '...'}</Typography>
                
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Button variant="contained"  sx={{width: '200px', margin: '20px 0px', textTransform:'none', fontSize:'15px', padding:'5px 10px'}}>Дізнитись більше</Button>
                    <Typography fontSize={15} fontWeight={400} display={'flex'} alignItems={'center'}>
                        
                        <Link onClick={()=>{setShowMore(!showMore)}} sx={{cursor: 'pointer', color:'#222222', marginRight:'10px'}}>Згорнути</Link>
                        <img src={arrow}/>
                    </Typography>
                </Box>
        </ListItem>
        
    )

}

