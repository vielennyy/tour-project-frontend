import { useState, ChangeEvent, useEffect } from 'react'
import { Box, Typography, FormControl, TextField, Button } from '@mui/material'

export const Payment = () => {
    const [show, setShow] = useState(true)
    const [clickedIndex, setClickedIndex] = useState(-1);
    const [type, setType] = useState('Інше')
    const userToken = localStorage.getItem('token')

    const handleButtonClick = () => {
        window.open(
            `https://cktour.club/api/v1/plans?token=${localStorage.getItem("token")}`,
            "_blank",
            "noopener noreferrer"
          );
    }

    return(
        <Box sx={{
            width: '960px',
            background: '#FAFAFA',
            boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.25)',
            borderRadius: '15px',
            padding: '20px',
            margin: '30px auto'
        }}
        >
            {show ?
            <>
                <Typography fontSize={24} fontWeight={500} marginBottom={'30px'}>Оплата</Typography>
                <Typography fontSize={18} fontWeight={400} marginBottom={'30px'}>Щоб додати пропозицію та стати партнером, ви маєте оплатити певний період підписки або скористатися пробним періодом (2 тижні). Після оплати ви перейдете у статус партнера і зможете розміщувати свої оголошення впродовж оплаченого терміну.</Typography>
                <Box display={'flex'} justifyContent={'space-between'} >
                    <Box display={'flex'} flexDirection={'column'} sx={{width: '190px', padding: '20px', background: '#FAFAFA', boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.13)',borderRadius: '15px'}}>
                        <Typography fontSize={19} fontWeight={500}>Пробний період</Typography>
                        <Typography fontSize={36} fontWeight={600}>₴0</Typography>
                        <Button variant="outlined" onClick={handleButtonClick} sx={{width: '150px', alignItems:'center', right: 0, textTransform:'none', fontSize:'16px', padding:'10px 30px', color: '#777777', borderColor:'#777777'}}>Переглянути</Button>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} sx={{width: '190px', padding: '20px', background: '#FAFAFA', boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.13)',borderRadius: '15px'}}>
                        <Typography fontSize={19} fontWeight={500}>1 місяць</Typography>
                        <Typography fontSize={36} fontWeight={600}>₴200</Typography>
                        <Button variant="outlined" onClick={handleButtonClick} sx={{width: '150px', alignItems:'center', right: 0, textTransform:'none', fontSize:'16px', padding:'10px 30px', color: '#777777', borderColor:'#777777'}}>Сплатити</Button>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} sx={{width: '190px', padding: '20px', background: '#FAFAFA', boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.13)',borderRadius: '15px'}}>
                        <Typography fontSize={19} fontWeight={500}>3 місяці</Typography>
                        <Box display={'flex'}>
                            <Typography fontSize={36} fontWeight={600}>₴540</Typography>
                            <Box fontSize={14} sx={{background:'#E8EFF7', textAlign: 'center', borderRadius: '21px', width:'48px', height:'20px'}}>- 10%</Box>
                        </Box>
                        <Button variant="outlined" onClick={handleButtonClick} sx={{width: '150px', alignItems:'center', right: 0, textTransform:'none', fontSize:'16px', padding:'10px 30px', color: '#777777', borderColor:'#777777'}}>Сплатити</Button>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} sx={{width: '190px', padding: '20px', background: '#FAFAFA', boxShadow: '0px 4px 15px rgba(146, 146, 146, 0.13)',borderRadius: '15px'}}>
                        <Typography fontSize={19} fontWeight={500}>6 місяців</Typography>
                        <Box display={'flex'}>
                            <Typography fontSize={36} fontWeight={600}>₴1020</Typography>
                            <Box fontSize={14} sx={{background:'#E8EFF7', textAlign: 'center', borderRadius: '21px', width:'48px', height:'20px'}}>- 15%</Box>
                        </Box>
                        <Button variant="outlined" onClick={handleButtonClick} sx={{width: '150px', alignItems:'center', right: 0, textTransform:'none', fontSize:'16px', padding:'10px 30px', color: '#777777', borderColor:'#777777'}}>Сплатити</Button>
                    </Box>
                </Box>
            </>
            :
            <Typography fontSize={24} fontWeight={500}>Оплата</Typography>
            }
        </Box>
    )
}