import { Pagination } from '@mui/material'
import { ItemsGrid } from "../../components/ItemsGrid"
import { SearchInput } from '../../components/SearchInput'
import { Footer } from '../../components/Footer'
import { BasicSelect } from '../../components/BasicSelect'
import Box from '@mui/material/Box';

export const ToursPage = () => {
    return(
        <>
            <Box sx = {{display: 'flex', width: '800px', margin: 0}}>
                <SearchInput/>
                <BasicSelect/>
            </Box>
            <ItemsGrid/>
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
            <Pagination count={10}/>
            </Box>
            {/* <h1>Hello</h1> */}
            <Footer/>
            {/* <h1>Hello</h1> */}

        </>
    )
}