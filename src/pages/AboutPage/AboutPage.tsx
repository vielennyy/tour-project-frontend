import { Link, Typography, Stack, Breadcrumbs, Box } from '@mui/material'
import img from './Card photo.png'

export default function CustomSeparator() {
    const breadcrumbs = [
      <Link underline="hover" key="1" color="text.primary" fontSize='18' fontWeight={400} href="/" >
        Головна
      </Link>,
      
      <Typography key="3" color="text.primary" fontSize='18' fontWeight={400}>
        Про нас 
      </Typography>,
    ];
  
    return (
      <Stack margin={'0px 0'} spacing={2}>
        <Breadcrumbs separator={<Typography sx={{ color: '#EF5151' }}>•</Typography>}  aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    );
  }
export const AboutPage = () => {

    return (
        <Box sx={{
            width: '1200px',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '15px',
            padding: '20px',
            margin: '50px auto'
        }}>
            <CustomSeparator/>
            <Typography variant='h2' margin={'30px 0px'}>Про нас</Typography>
            <Box display={'flex'} justifyContent={'space-between'}>
                <Box maxWidth={'30%'}>
                    <Typography sx={{ margin: '20px 0px', fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>Черкаська область та місто Черкаси зокрема сповнені великою кількістю цікавих туристичних атракцій. </Typography>
                    <Typography sx={{ margin: '20px 0px', fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>Нажаль, не всі з них якісно представлені для широкого загалу в мережі. Навіть знаючи про існування певних атракцій, туристи не здогадуються про можливість прокладання якісного маршруту між ними з можливістю спланувати ночівлю та смачний перекус.</Typography>
                    <Typography sx={{ margin: '20px 0px', fontFamily: 'Gilroy', fontWeight: '500', fontSize: '28px', lineHeight: '34px'}}>Наша мета</Typography>
                    <Typography sx={{ margin: '20px 0px', fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>Основна мета порталу — полегшити власникам бізнесу продаж своїх послуг, а мандрівникам — пошук найкращих варіантів для подорожей.</Typography>
                </Box>
                <img src={img}/>
            </Box>
        </Box>
    )

}