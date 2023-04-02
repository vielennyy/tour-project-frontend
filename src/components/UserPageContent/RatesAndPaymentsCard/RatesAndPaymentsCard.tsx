// import Typography from '@mui/material/Typography';

// export const RatesAndPaymentCard = () => {
//     return(
//         <>
//             <Typography fontSize={28} fontWeight={500} sx={{marginBottom: '35px'}}>Тарифні плани</Typography>
//             <Typography fontSize={20} fontWeight={400} sx={{marginBottom: '35px'}}>
//             Для можливості безобмежно публікувати ваші оголошення, наш сервіс пропонує вам обрати один з можливих варіантів:
//             </Typography>
//         </>
//     )
// }
import Typography from '@mui/material/Typography';

export const RatesAndPaymentCard = () => {
    
    return(
        <>
        <Typography fontSize={28} fontWeight={500} sx={{marginBottom: '35px'}}>Тарифні плани</Typography>
            <Typography fontSize={20} fontWeight={400} sx={{marginBottom: '35px', maxWidth:'600px'}}>
            Для можливості безобмежно публікувати ваші оголошення, наш сервіс пропонує вам обрати один з можливих варіантів:
            </Typography>
        </>
    )
}