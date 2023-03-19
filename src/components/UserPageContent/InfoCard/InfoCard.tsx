import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import {Link} from '@mui/material';
import { PartnerInfoCardProps } from 'src/components/TypesAndInterfaces';

interface MyComponentProps {
    user: PartnerInfoCardProps;
}



export const InfoCard = ({user}:MyComponentProps) => {
    return(
        <>
        
        <Box maxWidth={800} border={'1px solid black'} margin={'20px'} fontFamily='Inter, normal' display="flex" flexDirection={'column'} justifyContent={'space-between'}padding={'30px'}>
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
                    <Typography>{user.firstName}</Typography>
                    <Typography>{user.lastName}</Typography>
                    <Typography>{user.phoneNumber}</Typography>
                    <Typography>{user.email}</Typography>
                </Box>
            </Box>
        </Box>
        <Box maxWidth={800} border={'1px solid black'} margin={'20px'} fontFamily='Inter, normal' display="flex" flexDirection={'column'} justifyContent={'space-between'}padding={'30px'}>
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
        <Box  fontFamily='Inter, normal' margin={'40px'} display="flex" flexDirection={'row'} justifyContent={'right'}>
                <Link underline="hover" color="inherit" fontSize='25' href="/">
                <Typography>Видалити акаунт</Typography>
                </Link>
        </Box>
    </>
    )
}