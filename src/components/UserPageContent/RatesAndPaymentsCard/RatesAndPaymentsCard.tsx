import {Typography, Box, Button} from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';


export const RatesAndPaymentCard = () => {

    // FETCH HTML PAGE
    
    // const [html, setHtml] = useState("");

    // useEffect(() => {
    //     fetch('https://cktour.club/api/v1/plans/show')
    //     .then((response) => response.text())
    //     .then((html) => setHtml(html))
    //     .catch((error) => console.log(error));
    // }, []);

    // ADD HTML PAGE AS A STRING

    // const htmlPaynentPage=`<!DOCTYPE html>
    // <html>
    // <head>
    //     <meta charset="UTF-8">
    //     <title>Тарифні плани</title>
    //     <link href="https://fonts.cdnfonts.com/css/whitney-2" rel="stylesheet">
    //     <style>
    //       body {
    //         justify-content: center;
    //         align-items: center;
    //         height: 100vh;
    //       }
    //       h1 {
    //         font-family: 'Whitney Semibold', sans-serif;
    //         font-style: normal;
    //         weight: 500;
    //         font-size: 36px;
    //         line-height: 34px;
    //         text-align: center
    //       }
    //       stripe-pricing-table {
    //         margin-top: 50px;
    //       }
    //     </style>
    //   </head>
    //   <body>
    //     <h1>Для можливості безобмежно публікувати ваші оголошення,</h1>
    //     <h1>наш сервіс пропонує вам обрати один з можливих варіантів:</h1>
    //     <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
    //     <stripe-pricing-table
    //       pricing-table-id="prctbl_1Mu0HmKMPswHJCi9QdRKbYeS"
    //       publishable-key="pk_test_51MkBDbKMPswHJCi9hC2NSnYhNtVL9qKWDfMtCNxQMefYyXAZE96v7hICYbiNYlntyrQOVBGZdTZBGsxE7tmO9dXQ00DQCkLt8t">
    //     </stripe-pricing-table>
    //   </body>
    // </html>`


    return(
        <Box sx={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Typography fontSize={28} fontWeight={500} sx={{marginBottom: '35px'}}>Тарифні плани</Typography>
            <Typography fontSize={20} fontWeight={400} sx={{marginBottom: '35px', maxWidth:'600px'}}>
            Для можливості безобмежно публікувати ваші оголошення, наш сервіс пропонує вам обрати один з можливих варіантів:
            </Typography>
            <Button variant="contained" type='submit' href='https://cktour.club/api/v1/plans/show' sx={{width: '300px', margin: '20px 0px', textTransform:'none', fontSize:'20px', padding:'10px 30px', textAlign:'center'}}>Переглянути плани оплати</Button>
            {/* <Box dangerouslySetInnerHTML={{ __html: html }} /> */}
        </Box>
    )
}