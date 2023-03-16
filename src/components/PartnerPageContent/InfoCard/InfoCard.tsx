import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import {Link} from '@mui/material';
import { PartnerInfoCardProps } from 'src/components/TypesAndInterfaces';

interface MyComponentProps {
    partner: PartnerInfoCardProps;
}

const OwnerDataVerification = ({partner}:MyComponentProps) => {
    return(
        <Box maxWidth={800} border={'1px solid black'} margin={'20px'} fontFamily='Inter, normal' display="flex" flexDirection={'column'} justifyContent={'space-between'}padding={'30px'}>
            <Box  fontFamily='Inter, normal' display="flex" flexDirection={'row'} justifyContent={'space-between'}>
                <Typography>Верифікаційні дані власника</Typography>
                <Link underline="hover" color="inherit" fontSize='25' href="/">
                <Typography>Редагувати</Typography>
                </Link>
            </Box>
            <Box margin={'30px'} fontFamily='Inter, normal' display="flex" flexDirection={'row'}>

                <Box fontFamily='Inter, normal' display="flex" flexDirection={'column'} justifyContent={'space-between'}>
                    <Typography>ПІБ юридичної особи</Typography>
                    <Typography>Код ЄДРПОУ</Typography>
                    <Typography>Адреса юридичної особи</Typography>
                    <Typography>Поштовий індекс</Typography>
                </Box>
                <Box margin={'0 100px'} fontFamily='Inter, normal' display="flex" flexDirection={'column'} justifyContent={'space-between'}>
                    <Typography>{partner.legalEntityName}</Typography>
                    <Typography>{partner.EDRPOUcode}</Typography>
                    <Typography>{partner.legalEntityAdress}</Typography>
                    <Typography>{partner.ZIPcode}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export const InfoCard = ({partner}:MyComponentProps) => {
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
                    <Typography>{partner.isCompany ? "Назва" : "Ім’я"}</Typography>
                    <Typography>{partner.isCompany ? "Ім’я представника" : "Прізвище"}</Typography>
                    <Typography>Телефон</Typography>
                    <Typography>Email</Typography>
                </Box>
                <Box margin={'0 100px'} fontFamily='Inter, normal' display="flex" flexDirection={'column'} justifyContent={'space-between'}>
                    <Typography>{partner.firstName}</Typography>
                    <Typography>{partner.lastName}</Typography>
                    <Typography>{partner.phoneNumber}</Typography>
                    <Typography>{partner.email}</Typography>
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
        {partner.isCompany ? <OwnerDataVerification partner={partner}/> : <></>}
        <Box  fontFamily='Inter, normal' margin={'40px'} display="flex" flexDirection={'row'} justifyContent={'right'}>
                <Link underline="hover" color="inherit" fontSize='25' href="/">
                <Typography>Вийти з акаунту</Typography>
                </Link>
        </Box>
    </>
    )
}