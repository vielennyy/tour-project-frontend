import { Link, Typography, Stack, Breadcrumbs, Box } from '@mui/material'

export default function CustomSeparator() {
    const breadcrumbs = [
      <Link underline="hover" key="1" color="text.primary" fontSize='18' fontWeight={400} href="/" >
        Головна
      </Link>,
      
      <Typography key="3" color="text.primary" fontSize='18' fontWeight={400}>
        Контакти 
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
export const ContactPage = () => {

    return (
        <Box sx={{
            width: '1200px',
            display: 'flex',
            flexDirection: 'column',
            // boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.25)',
            borderRadius: '15px',
            padding: '20px',
            margin: '50px auto'
            // marginBottom: '50px'
        }}>
            <CustomSeparator/>
            <Typography variant='h2' margin={'30px 0px'}>Контакти</Typography>
            <Box display={'flex'} justifyContent={'space-between'}>
                <Box maxWidth={'50%'}>
                    <Typography sx={{ margin: '20px 0px', fontFamily: 'Gilroy', fontWeight: '500', fontSize: '28px', lineHeight: '34px'}}>Контакти туристичного порталу Черкаської області</Typography>
                    <Typography sx={{ margin: '20px 0px', fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>0-800-21-1948 (дзвінок безкоштовний, щодня з 9:00 до 21:00)</Typography>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>cherkasy.tourist@support.com</Typography>
                </Box>
                <Box maxWidth={'50%'}>
                    <Typography sx={{ margin: '20px 0px', fontFamily: 'Gilroy', fontWeight: '500', fontSize: '28px', lineHeight: '34px'}}>Адреса і контакти офісу туристичного порталу Черкаської області</Typography>
                    <Typography sx={{ margin: '20px 0px', fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>м. Черкаси, бул. Шевченка, 250а</Typography>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>Понеділок-п'ятниця, з 9:30 до 18:00</Typography>                </Box>
            </Box>
        </Box>
    )

}