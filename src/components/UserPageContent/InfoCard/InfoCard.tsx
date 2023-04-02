import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import {Link, SvgIcon} from '@mui/material';
import { PartnerInfoCardProps } from 'src/components/TypesAndInterfaces';
import { ReactComponent as EditIcon } from '../UserPageIcons/edit 1.svg';
import { ReactComponent as LogOut } from '../UserPageIcons/log-out 1.svg';


interface MyComponentProps {
    user: PartnerInfoCardProps;
}

export const InfoCard = ({user}:MyComponentProps) => {
    return(
        <>
        
        <Box sx = {{boxShadow: '0px 4px 15px rgba(3, 2, 2, 0.25)',
borderRadius: '15px'}} maxWidth={800} border={'none'} margin={'20px'} fontFamily='Inter, normal' display="flex" flexDirection={'column'} justifyContent={'space-between'}padding={'30px'}>
            <Box fontSize={22} display="flex" flexDirection={'row'} justifyContent={'space-between'}>
                <Typography fontSize={28} fontWeight={500}>Дані користувача</Typography>
                <Box display="flex" flexDirection={'row'}>
                    <Link underline="hover" color="inherit" fontSize='25' href="/" sx={{marginRight: '10px'}}>
                        <Typography fontSize={22} fontWeight={400}>Редагувати</Typography>
                    </Link>
                    <SvgIcon sx={{marginTop: '5px'}}><EditIcon/></SvgIcon>
                </Box>
                
            </Box>
            <Box margin={'30px'} display="flex" flexDirection={'row'}>

                <Box  display="flex" flexDirection={'column'} justifyContent={'space-between'}>
                    <Typography sx={{marginBottom: '20px'}}>Ім’я</Typography>
                    <Typography sx={{marginBottom: '20px'}}>Прізвище</Typography>
                    <Typography sx={{marginBottom: '20px'}}>Телефон</Typography>
                    <Typography >Email</Typography>
                </Box>
                <Box margin={'0 100px'} display="flex" flexDirection={'column'} justifyContent={'space-between'}>
                    <Typography sx={{marginBottom: '20px'}}>{user.firstName}</Typography>
                    <Typography sx={{marginBottom: '20px'}}>{user.lastName}</Typography>
                    <Typography sx={{marginBottom: '20px'}}>{user.phoneNumber}</Typography>
                    <Typography >{user.email}</Typography>
                </Box>
            </Box>
        </Box>
        <Box sx = {{boxShadow: '0px 4px 15px rgba(3, 2, 2, 0.25)',
borderRadius: '15px'}} maxWidth={800} border={'none'} margin={'20px'} fontFamily='Inter, normal' display="flex" flexDirection={'column'} justifyContent={'space-between'}padding={'30px'}>
            <Box display="flex" flexDirection={'row'} justifyContent={'space-between'}>
                <Typography fontSize={28} fontWeight={500}>Пароль</Typography>
                <Box display="flex" flexDirection={'row'}>
                    <Link underline="hover" color="inherit" fontSize='25' href="/" sx={{marginRight: '10px'}}>
                        <Typography fontSize={22} fontWeight={400}>Редагувати</Typography>
                    </Link>
                    <SvgIcon sx={{marginTop: '5px'}}><EditIcon/></SvgIcon>
                </Box>
            </Box>
            <Box margin={'30px'} fontFamily='Inter, normal' display="flex" flexDirection={'row'}>
                <Typography fontSize={24} color={'#646464'} letterSpacing={'0.335em'}>•••••••••</Typography>
            </Box>
            
        </Box>
        <Box  fontFamily='Inter, normal' margin={'40px'} display="flex" flexDirection={'row'} justifyContent={'right'}>
            <Link underline="hover" color="inherit" fontSize='25' href="/" sx={{marginRight: '10px'}}>
                <Typography fontSize={22} fontWeight={400}>Вийти з акаунту</Typography>
            </Link>
            <SvgIcon sx={{marginTop: '5px'}}><LogOut/></SvgIcon>
        </Box>
    </>
    )
}