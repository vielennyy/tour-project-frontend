import { Link, Typography, Stack, Breadcrumbs, Box } from '@mui/material'

export default function CustomSeparator() {
    const breadcrumbs = [
      <Link underline="hover" key="1" color="text.primary" fontSize='18' fontWeight={400} href="/" >
        Головна
      </Link>,
      
      <Typography key="3" color="text.primary" fontSize='18' fontWeight={400}>
        Умови користування 
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
export const TermsAndConditions = () => {

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
            <Typography variant='h2' margin={'30px 0px'}>Умови користування порталом</Typography>
            <Box>
                <Box>
                    <Typography sx={{ margin: '20px 0px', fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>Вітаємо на нашому туристичному порталі Черкаської області!</Typography>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>Нижче наведені умови користування нашим порталом. Будь ласка, уважно прочитайте ці умови перед використанням нашого сайту.</Typography>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>1. Загальні положення: </Typography>
                </Box>
                <Box marginLeft={'20px'}>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>1.1. Термін "портал" використовується для позначення сайту, що знаходиться за адресою https://tour-project-frontend.vercel.app. </Typography>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>1.2. Портал є джерелом інформації про туристичні об'єкти та події Черкаської області, а також надає можливість забронювати житло на території області. </Typography>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>1.3. У разі використання нашого порталу, Ви погоджуєтеся з усіма умовами користування.</Typography>
                </Box>
                <Typography sx={{margin: '20px 0px', fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>2. Користування порталом:  </Typography>
                <Box marginLeft={'20px'}>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>2.1. Користування порталом заборонено особам, які не досягли 18 років.</Typography>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>2.2. Для користування порталом Вам необхідно мати доступ до Інтернету та сумісного з порталом браузера.</Typography>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>2.3. Портал не несе відповідальності за можливі збої в роботі мережі Інтернет, зумовлені технічними проблемами, технічними роботами, програмними помилками або іншими причинами, що перебувають поза межами контролю порталу.</Typography>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>2.4. Заборонено використовувати портал для розміщення порнографічних матеріалів, матеріалів з ознаками насильства, виклику до расової, національної, релігійної, політичної ненависті або інших матеріалів, що не відповідають загальновизнаним моральним та етичним нормам.</Typography>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>2.5. Портал залишає за собою право відмовити в доступі до свого контенту користувачеві, який порушує правила користування порталом.</Typography>
                </Box>
                <Typography sx={{margin: '20px 0px', fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>3. Бронювання житла:  </Typography>
                
                <Box marginLeft={'20px'}>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>3.1. Наш портал надає можливість забронювати житло на території Черкаської області.</Typography>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>3.2. Бронювання здійснюється через співпрацю з готелями, мотелями, гостьовими будинками та іншими подібними закладами на території області.</Typography>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>3.3. Наш портал не несе відповідальності за якість надання послуг з бронювання житла, а також за зміни цін та умов забронювання з боку зазначених закладів.</Typography>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>3.4. При бронюванні житла через наш портал, користувач зобов'язується дотримуватися умов та правил, що встановлюються зазначеним закладом.</Typography>

                </Box>
                <Typography sx={{margin: '20px 0px', fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>4. Інформативний сайт: </Typography>
                <Box marginLeft={'20px'}>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>4.1. Наш портал є інформативним сайтом, що надає інформацію про туристичні об'єкти та події Черкаської області.</Typography>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>4.2. Інформація, що надається на порталі, є загальною та може містити неточності або зміни, які не завжди відображаються вчасно.</Typography>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>4.3. Портал не несе відповідальності за можливі зміни в інформації про туристичні об'єкти та події на території області.</Typography>
                </Box>
                <Typography sx={{margin: '20px 0px', fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>5. Зміни умов користування: </Typography>
                <Box marginLeft={'20px'}>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>5.1. Наш портал залишає за собою право змінювати умови користування без попереднього повідомлення.</Typography>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>5.2. У разі зміни умов користування, вони набувають чинності з моменту їх публікації на порталі.</Typography>
                </Box>
                <Typography sx={{margin: '20px 0px', fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>6. Контакти: </Typography>
                <Box marginLeft={'20px'}>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight: 400, fontSize: '20px', lineHeight: '150%'}}>6.1. У разі виникнення питань або пропозицій щодо роботи нашого порталу, Ви можете звернутися до нас за адресою електронної пошти, яка зазначена на порталі.</Typography>
                </Box>
            </Box>
        </Box>
    )

}