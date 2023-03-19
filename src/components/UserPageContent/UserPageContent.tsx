import CustomSeparator from "./Breadcrumbs/Breadcrumbs";
import {Box} from '@mui/material';
import {Sidebar} from './Sidebar'
import { InfoCard } from "./InfoCard";
import { PartnerInfoCardProps } from "../TypesAndInterfaces";



export const UserPageContent = () => {

    const user:PartnerInfoCardProps = {
        isCompany: true,
        firstName: "Анастасія",
        lastName: "Андрощук",
        phoneNumber: "+38 (097) 00 11 111",
        email: "an.androshchuk@gmail.com",
    }
    return(
        <>
            <Box sx={{ height: '100vh', maxWidth: '1200px', margin:' 0 auto' }} >
                <CustomSeparator/>
                <Box sx={{display: 'flex'}}>
                    <Sidebar/>
                    <Box margin={'0 auto'}>
                        <InfoCard user={user}/>
                    </Box>
                </Box>
            </Box>
        </>
    )
}