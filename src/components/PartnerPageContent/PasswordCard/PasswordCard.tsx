import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import {Link} from '@mui/material';

export const PasswordCard = () => {
    return(
        <Box maxWidth={800} border={'1px solid black'} margin={'30px'} fontFamily='Inter, normal' display="flex" flexDirection={'column'} justifyContent={'space-between'}padding={'30px'}>
            <Box  fontFamily='Inter, normal' display="flex" flexDirection={'row'} justifyContent={'space-between'}>
                <Typography>Пароль</Typography>
                <Link underline="hover" color="inherit" fontSize='25' href="/">
                <Typography>Редагувати</Typography>
                </Link>
            </Box>
            <Box margin={'30px'} fontFamily='Inter, normal' display="flex" flexDirection={'row'}>
                <Typography>********</Typography>
            </Box>
                
        </Box>
    )
}