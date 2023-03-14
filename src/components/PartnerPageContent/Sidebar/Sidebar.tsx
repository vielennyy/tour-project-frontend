import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import {Link} from '@mui/material';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

export const Sidebar = () => {
    return(
        <Box fontFamily='Inter, normal' maxWidth={200} display="flex" flexDirection={'column'}>
            <Typography color="text.primary" fontSize='25' fontWeight={'bold'} margin={'10px 0'}>
            Профіль 
            </Typography>
            <Link underline="hover" color="inherit" fontSize='25' marginBottom={'10px'} href="/">
            Мої об'єкти
            </Link>
            <Box fontFamily='Inter, normal' display="flex" flexDirection={'column'} marginLeft="15px">
                <Link underline="hover" color="inherit" fontSize='25' marginBottom={'5px'} href="/">
                Чернетки
                </Link>
                <Link underline="hover" color="inherit" fontSize='25' marginBottom={'5px'} href="/">
                Активні
                </Link>
                <Link underline="hover" color="inherit" fontSize='25' fontWeight ='300'marginBottom={'10px'} href="/">
                Неактивні
                </Link>
            </Box>
            <Link underline="hover" color="inherit" fontSize='25' fontWeight ='400' marginBottom={'10px'} href="/">
            Мої повідомлення
            </Link>
            <Link underline="hover" color="inherit" fontSize='25' href="/">
            Мої відгуки
            </Link>
        </Box>
    )
}