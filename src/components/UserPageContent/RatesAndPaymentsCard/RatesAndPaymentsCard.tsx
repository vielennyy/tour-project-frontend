import {Typography, Box, Button} from '@mui/material';

export const RatesAndPaymentCard = () => {
  
  const handleButtonClick = () => {
        window.open(`https://cktour.club/api/v1/plans?token=${localStorage.getItem('token')}`, '_blank', 'noopener noreferrer');
    }
 
    return(
        <Box sx={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Typography fontSize={28} fontWeight={500} sx={{marginBottom: '35px'}}>Тарифні плани</Typography>
            <Typography fontSize={20} fontWeight={400} sx={{marginBottom: '35px', maxWidth:'600px'}}>
            Для можливості безобмежно публікувати ваші оголошення, наш сервіс пропонує вам обрати один з можливих варіантів:
            </Typography>
            <Button variant="contained" onClick={handleButtonClick} sx={{width: '300px', margin: '20px 0px', textTransform:'none', fontSize:'20px', padding:'10px 30px', textAlign:'center'}}>Переглянути плани оплати</Button>
        </Box>
    )
}