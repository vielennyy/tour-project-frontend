import Box from '@mui/material';

export const ItemPage = () => {
    return(
        <>
            <Box sx={{display: 'flex'}}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                    <>
                        <HalfRating/>
                        <ButtonLink label = {'comments'}/>
                    </>
                </CardContent>
            </Box>
        </>
    )
}