import {
    Box,
    Typography
} from '@mui/material'
import apartment from './apartment.jpg'
import catering from './catering.jpg'
import tour from './tour.jpg'

export const TypeAdvertisement = () => {
    return(
        <Box sx={{background:"white", placeItems: 'center', margin: '120px 0px'}}>
            <Typography fontSize={46} fontWeight={700} zIndex={3} color={'#000'} sx={{marginBottom: '20px', textAlign: 'center'}}>Оберіть тип пропозиції, яку хочете зареєструвати</Typography>
            <Box sx={{display:'flex', justifyContent: 'center'}}>
                <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center', maxWidth:'250px', justifyContent: 'center', margin:'0px 5px'}}>
                    <img src={apartment} alt="" />
                    </Box>
                    <Typography fontSize={24} fontWeight={500} textAlign={'center'}>Оберіть тип пропозиції, яку ви реєструєте</Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center', maxWidth:'250px', justifyContent: 'center', margin:'0px 5px'}}>
                    <img src={catering} alt="" />
                    <Typography fontSize={24} fontWeight={500} textAlign={'center'}>Надайте інформацію про свій бізнес</Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center', maxWidth:'250px', justifyContent: 'center', margin:'0px 5px'}}>
                    <img src={tour} alt="" />
                    <Typography fontSize={24} fontWeight={500} textAlign={'center'}>Зачекайте затвердження вашої реєстрації</Typography>
                </Box>
        </Box>
        // </Box>
    )
}