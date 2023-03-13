import { Pagination } from '@mui/material';
import Box from '@mui/material/Box';

export const PagesPagination = (props) => {
    return(
        <>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                typography: 'body1',
                margin: '50px auto',
            }}
        >    
            <Pagination count={props.count}/>
        </Box>
        </>
    )
}