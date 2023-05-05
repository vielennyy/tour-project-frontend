import {
    Box,
    Typography
} from '@mui/material'
import { useEffect } from 'react'
import apartment from './apartment.jpg'
import catering from './catering.jpg'
import tour from './tour.jpg'
import { Link } from 'react-router-dom'

export const TypeAdvertisement = () => {
    // useEffect(() => {
    //     fetch(`https://cktour.club/api/v1/users/${localStorage.getItem('id')}`, {
    //         method: "GET",
    //         headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
    //       })
    //       .then(response => response.json())
    //       .then(json => console.log(json));
    //   }, []);
    return(
        <Box sx={{background:"white", placeItems: 'center', margin: '120px auto', width:'960px'}}>
            <Typography fontSize={46} fontWeight={700} zIndex={3} color={'#000'} sx={{marginBottom: '20px', textAlign: 'center'}}>Оберіть тип пропозиції, яку хочете зареєструвати</Typography>
                <Box sx={{display: 'flex', justifyContent:'space-between'}}>    
                    <Link to='/registration/accommodation'> 
                    <Box sx={{
                        display:'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        maxWidth:'300px', 
                        justifyContent: 'center', 
                        margin:'0px 5px', 
                        background: '#F4F6F8',
                        boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.25)', 
                        borderRadius: '15px',
                        cursor: 'pointer'
                    }}
                    >
                        <img src={apartment} width='300px' alt="" />
                        <Typography fontSize={28} fontWeight={600} textAlign={'center'} marginTop={'10px'}>Реєстрація житла</Typography>
                        <Typography fontSize={20} fontWeight={400} textAlign={'center'} marginTop={'10px'}>Оберіть тип пропозиції, яку ви реєструєте</Typography>
                    </Box>
                    </Link>
                    <Box sx={{
                        display:'flex', 
                        flexDirection: 'column',  
                        maxWidth:'300px', 
                        margin:'0px 5px', 
                        background: '#F4F6F8',
                        boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.25)', 
                        borderRadius: '15px',
                        cursor: 'pointer'}}
                    >
                        <img src={catering} width='300px' alt="" />
                        <Typography fontSize={28} fontWeight={600} textAlign={'center'} marginTop={'10px'}>Реєстрація закладу</Typography>
                        <Typography fontSize={20} fontWeight={400} textAlign={'center'} marginTop={'10px'}>Ресторани, кафе, їдальні тощо</Typography>
                    </Box>
                    <Box sx={{
                        display:'flex', 
                        flexDirection: 'column', 
                        maxWidth:'300px', 
                        margin:'0px 5px', 
                        background: '#F4F6F8',
                        boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.25)', 
                        borderRadius: '15px',
                        cursor: 'pointer'}}
                    >
                        <img src={tour} width='300px' alt="" />
                        <Typography fontSize={28} fontWeight={600} textAlign={'center'} marginTop={'10px'}>Реєстрація туру</Typography>
                        <Typography fontSize={20} fontWeight={400} textAlign={'center'} marginTop={'10px'}>Екскурсії, турпоходи, подорожі</Typography>
                    </Box>
            </Box>
            </Box>
    )
}