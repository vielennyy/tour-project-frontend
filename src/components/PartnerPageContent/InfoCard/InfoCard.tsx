import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import {Link} from '@mui/material';

export const InfoCard = () => {
    return(
        <Box maxWidth={800} border={'1px solid black'} margin={'30px'} fontFamily='Inter, normal' display="flex" flexDirection={'column'} justifyContent={'space-between'}padding={'30px'}>
            <Box  fontFamily='Inter, normal' display="flex" flexDirection={'row'} justifyContent={'space-between'}>
                <Typography>Дані користувача</Typography>
                <Link underline="hover" color="inherit" fontSize='25' href="/">
                <Typography>Редагувати</Typography>
                </Link>
            </Box>
            <Box margin={'30px'} fontFamily='Inter, normal' display="flex" flexDirection={'row'}>

                <Box fontFamily='Inter, normal' display="flex" flexDirection={'column'} justifyContent={'space-between'}>
                    <Typography>Ім’я</Typography>
                    <Typography>Прізвище</Typography>
                    <Typography>Телефон</Typography>
                    <Typography>Email</Typography>
                </Box>
                <Box margin={'0 100px'} fontFamily='Inter, normal' display="flex" flexDirection={'column'} justifyContent={'space-between'}>
                    <Typography>Анастасія</Typography>
                    <Typography>Андрощук</Typography>
                    <Typography>+38 (097) 00 11 111</Typography>
                    <Typography>an.androshchuk@gmail.com</Typography>
                </Box>
            </Box>
        </Box>
    )
}