import Box from "@mui/material/Box";
import { PartnerPageContent } from "src/components/PartnerPageContent";

export const PartnerPage = () => {
    return(
        <Box sx={{
            width: {xs: '100%', md: '1024px'},
            m: '0 auto'
            }}>
            <PartnerPageContent/>
        </Box>
    )
}