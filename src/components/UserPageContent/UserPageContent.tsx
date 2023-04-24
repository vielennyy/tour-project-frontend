import CustomSeparator from "./Breadcrumbs/Breadcrumbs";
import {Box} from '@mui/material';
import {Sidebar} from './Sidebar'

export const UserPageContent = () => {
    return(
        <Box sx={{ maxWidth: '1200px', margin:' 0 auto' }} >
                    <CustomSeparator/>
                    <Box sx={{display: 'flex'}}>
                        <Sidebar/>
                    </Box>
        </Box>
    )
}