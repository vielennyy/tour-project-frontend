import CustomSeparator from "./Breadcrumbs/Breadcrumbs";
import {Box} from '@mui/material';
import {Sidebar} from './Sidebar'
import { InfoCard } from "./InfoCard";
import { PasswordCard } from "./PasswordCard";

export const PartnerPageContent = () => {
    return(
        <>
            <Box sx={{ height: '100vh', maxWidth: '1200px', margin:' 0 auto' }} >
                <CustomSeparator/>
                <Box sx={{display: 'flex'}}>
                    <Sidebar/>
                    <Box margin={'0 auto'}>
                        <InfoCard/>
                        <PasswordCard/>
                    </Box>
                </Box>
            </Box>
        </>
    )
}