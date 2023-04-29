import {Typography, Box, Button} from '@mui/material';
import{ useState } from 'react'
interface Response {
    url: string;
}
export const RatesAndPaymentCard = () => {
  const [response, setResponse] = useState<Response|undefined>()
  const handleButtonClick = async () => {
    try {
      const response = await fetch("https://cktour.club/api/v1/billing_portals", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      
      const json = await response.json();
      setResponse(json);
      
      if (json?.url) {
        window.open(json.url, "_blank", "noopener noreferrer");
      } else {
        throw new Error("No URL found in response.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
 
    return(
        <Box sx={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'left'}}>
            <Typography fontSize={20} fontWeight={400} sx={{marginBottom: '35px', maxWidth:'600px'}}>
            Ваша історія оплати збережена на нашому сайті. Щоб переглянути платежі та редагувати підписки, перейдіть за посиланням:</Typography>
            <Button variant="contained" onClick={handleButtonClick} sx={{width: '300px', margin: '20px 0px', textTransform:'none', fontSize:'20px', padding:'10px 30px', textAlign:'center'}}>Переглянути</Button>
        </Box>
    )
}