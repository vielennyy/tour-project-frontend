import { OrderItem } from "./OrderItem.tsx"
import { RoomBookingProps } from "src/components/TypesAndInterfaces";
import Typography from '@mui/material/Typography';

export const OrdersCard = () => {
    const booking: RoomBookingProps = {
        id: 1,
        userId: 2,
        roomId: 3,
        numberOfPeople: 4,
        checkIn: new Date('2022-04-01'),
        checkOut: new Date('2022-04-05'),
        confirmation: true,
        note: 'Additional note for the booking',
      };

    return (
        <>
        <Typography fontSize={28} fontWeight={500} sx={{marginBottom: '35px'}}>Мої бронювання</Typography>
        <OrderItem props={booking}/>
        </>
    )
}