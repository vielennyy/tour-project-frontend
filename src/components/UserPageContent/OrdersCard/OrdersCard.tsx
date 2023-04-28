import { OrderItem } from "./OrderItem.tsx"
import { RoomBookingProps, Reservation } from "src/components/TypesAndInterfaces";
import Typography from '@mui/material/Typography';
import {useState, useEffect} from 'react'


export const OrdersCard = () => {
    const [bookings, setBookings] = useState<Reservation[]|undefined>()
    
    useEffect(() => {
        fetch(`https://cktour.club/api/v1/users/${localStorage.getItem('id')}/bookings`, {
            method: "GET",
            headers: { Authorization: 'Bearer ' +  localStorage.getItem('token') }
        })
          .then(response => response.json())
          .then(json => setBookings(json.data));
      }, []);

      console.log(bookings)

    return (
        <>
        <Typography fontSize={28} fontWeight={500} sx={{marginBottom: '35px'}}>Мої бронювання</Typography>
        {bookings && Array.isArray(bookings) && bookings.length > 0 ? (
        <>
        {bookings.map((booking) => (
            <OrderItem key={booking.id} props={booking} />
        ))}
        </>
        ):
        <Typography>У Вас поки що немає бронювань</Typography>
        }
        
        </>
    )
}