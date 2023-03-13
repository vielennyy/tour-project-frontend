import { ItemsGrid } from "../../components/ItemsGrid"
import { SearchInput } from '../../atom/SearchInput'
import { BasicSelect } from '../../atom/BasicSelect'
import Box from '@mui/material/Box';
import { PagesPagination } from '../../atom/PagesPagination'

export const ToursPage = () => {
    return(
        <>
            <Box sx = {{display: 'flex', width: '800px', margin: 0}}>
                <SearchInput/>
                <BasicSelect/>
            </Box>
            <ItemsGrid/>
            <PagesPagination count={10}/>
        </>
    )
}