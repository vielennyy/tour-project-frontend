import CustomSeparator from "./Breadcrumbs/Breadcrumbs";
import {Box} from '@mui/material';
import {Sidebar} from './Sidebar'
import { InfoCard } from "./InfoCard";
import { PartnerInfoCardProps } from "../TypesAndInterfaces";

interface MyComponentProps{
    changePassword: boolean
  }

export const UserPageContent = ({changePassword}:MyComponentProps) => {
    return(
        <>
            <Box sx={{ maxWidth: '1200px', margin:' 0 auto' }} >
                <CustomSeparator/>
                <Box sx={{display: 'flex'}}>
                    <Sidebar changePassword={changePassword}/>
                </Box>
            </Box>
        </>
    )
}