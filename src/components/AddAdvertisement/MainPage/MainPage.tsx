import background from './Queen-Room 1.jpg'
import star from'./Group 659.svg'
import info from './Group 655.svg'
import clock from './Group 657.svg'
import ready from './Group 658.svg'
import {
    Box,
    Typography, Button,
} from '@mui/material'
import { TypeAdvertisement } from '../TypeAdvertisementPage'
export const MainPage = () => {
    return(
        <>
        <Box sx={{height:'600px', width: '100vw', display: 'grid', placeItems: 'center', position: 'relative'}}>
            <img src={background} alt="" style={{gridArea: '1/1', width: '100%', height: '600px'}} />
            <Box zIndex={3} position={'absolute'} sx={{maxWidth:'60vw', textAlign: 'center'}}>
                <Typography fontSize={70} fontWeight={700} zIndex={3} color={'#fff'}>Зареєструйте свій об’єкт</Typography>
                <Typography fontSize={26} fontWeight={400} zIndex={3} color={'#fff'}>Наш сайт є надійним та зручним ресурсом для розміщення оголошень. Не зволікайте і виводьте свій бізнес на новий рівень!</Typography>
                <Button variant="contained"  sx={{width: '300px', textTransform:'none', fontSize:'20px', marginTop:'30px', marginBottom:'100px'}}>Додати пропозицію</Button>
            <Typography fontSize={20} fontWeight={400} zIndex={3} color={'#fff'} sx={{maxWidth:'480px', textAlign: 'center', margin: '0 auto'}}>Після додавання пропозиції ваш акаунт перейде в статус партнера. Дізнатися більше</Typography>
            </Box>
        </Box>
        <Box sx={{background:"white", placeItems: 'center', margin: '120px 0px'}}>
            <Typography fontSize={46} fontWeight={700} zIndex={3} color={'#000'} sx={{marginBottom: '20px', textAlign: 'center'}}>Як зареєструвати свій об’єкт?</Typography>
            <Box sx={{display:'flex', justifyContent: 'center'}}>
                <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center', maxWidth:'300px', justifyContent: 'center', margin:'0px 5px'}}>
                    <img src={star} width='100px' alt="" />
                    <Typography fontSize={24} fontWeight={500} textAlign={'center'}>Оберіть тип пропозиції, яку ви реєструєте</Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center', maxWidth:'300px', justifyContent: 'center', margin:'0px 5px'}}>
                    <img src={info} alt="" />
                    <Typography fontSize={24} fontWeight={500} textAlign={'center'}>Надайте інформацію про свій бізнес</Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center', maxWidth:'300px', justifyContent: 'center', margin:'0px 5px'}}>
                    <img src={clock} alt="" />
                    <Typography fontSize={24} fontWeight={500} textAlign={'center'}>Зачекайте затвердження вашої реєстрації</Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center', maxWidth:'300px', justifyContent: 'center', margin:'0px 5px'}}>
                    <img src={ready} alt="" />
                    <Typography fontSize={24} fontWeight={500} textAlign={'center'}>Готово! Ваше оголошення додано на сайт</Typography>
                </Box>
            </Box>
        </Box>
        <TypeAdvertisement/>
        </>
    )
} 