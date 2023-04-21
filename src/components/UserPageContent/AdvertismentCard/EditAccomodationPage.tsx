import {
    Box,
    Typography,
    Stack,
    Breadcrumbs, 
    Link as LinkMUI
} from '@mui/material'
import { Link } from 'react-router-dom'


export const EditAccommodation = () => {
    return(
        <Box sx={{background:"white", placeItems: 'center', margin: '120px auto', width:'960px'}}>
            <CustomSeparator/>
                <Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>    
                    <Link to='/registration/accommodation'> 
                    <Box sx={{
                        display:'flex', 
                        flexDirection: 'column', 
                        // alignItems: 'center', 
                        // maxWidth:'300px', 
                        justifyContent: 'center', 
                        padding: '20px 30px',
                        margin:'30px 5px', 
                        background: '#F4F6F8',
                        boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.25)', 
                        borderRadius: '15px',
                        cursor: 'pointer'
                    }}
                    >
                        <Typography fontSize={28} fontWeight={400}>Додати номери</Typography>
                    </Box>
                    </Link>
                    <Box sx={{
                        display:'flex', 
                        flexDirection: 'column',  
                        // maxWidth:'300px', 
                        margin:'0px 5px', 
                        padding: '20px 30px',
                        background: '#F4F6F8',
                        boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.25)', 
                        borderRadius: '15px',
                        cursor: 'pointer'}}
                    >
                        <Typography fontSize={28} fontWeight={400}>Редагувати інформацію житла</Typography>
                    </Box>
            </Box>
            </Box>
    )
}

function CustomSeparator() {
    const breadcrumbs = [
      <LinkMUI underline="hover" key="1" color="text.primary" fontSize='18' fontWeight={400} href="/" >
        Головна
      </LinkMUI>,
      <LinkMUI underline="hover" key="2" color="text.primary" fontSize='18' fontWeight={400} href="/" >
      Особистий кабінет
        </LinkMUI>,
      <Typography key="3" color="text.primary" fontSize='18' fontWeight={400}>
        Редагування оголошення
      </Typography>,
    ];
  
    return (
      <Stack margin={'20px 0'} spacing={2}>
        <Breadcrumbs separator={<Typography sx={{ color: '#EF5151' }}>•</Typography>}  aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    );
  }