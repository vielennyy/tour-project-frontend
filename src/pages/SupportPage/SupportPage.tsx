import { Link, Typography, Stack, Breadcrumbs, Box, Button } from '@mui/material'
import { useState } from 'react'
import open from './Mask group.svg'
import close from './close.svg'

export default function CustomSeparator() {
    const breadcrumbs = [
      <Link underline="hover" key="1" color="text.primary" fontSize='18' fontWeight={400} href="/" >
        Головна
      </Link>,
      
      <Typography key="3" color="text.primary" fontSize='18' fontWeight={400}>
        Допомога 
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
export const SupportPage = () => {

    const [clicked, setClicked] = useState(false)

    return (
        <Box sx={{
            width: '1200px',
            display: 'flex',
            justifyContent:'center',
            flexDirection: 'column',
            borderRadius: '15px',
            padding: '20px',
            margin: '50px auto'
        }}>
            <CustomSeparator/>
            <Typography variant='h2' alignItems={'center'} textAlign={'center'} margin={'30px 0px'}>Часті запитання</Typography>
            <Box 
                onClick={()=>{setClicked(!clicked)}}
                sx={{
                width: '960px',
                background: '#FAFAFA',
                boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.25)',
                borderRadius: '15px',
                padding: '20px 40px',
                margin: '30px auto',
                cursor: 'pointer'
            }}
            >
                <Box display='flex' justifyContent={'space-between'}>
                    <Typography margin={'40px'}>Який напрямок найцікавіший?</Typography>
                    {clicked ? <img src={close}/> : <img src={open}/>}
                </Box>
                {clicked ? <Typography margin={'40px'}>Усі атракції Черкас і Черкаської області варті уваги і будуть цікаві відвідувачам і гостям. Щоб дослідити цікаві місця для подорожі, ви можете скористатися нашим порталом.</Typography> : <></>}

                
            </Box>
        </Box>
    )

}