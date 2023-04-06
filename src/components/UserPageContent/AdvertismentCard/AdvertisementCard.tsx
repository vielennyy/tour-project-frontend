import Typography from '@mui/material/Typography';
import { Accommodation } from 'src/components/TypesAndInterfaces';
import { AdvertisementItem } from './AdvertisementItem';

interface myComponentProps {
    isActive: boolean,
}

export const AdvertisementCard = (isActive :myComponentProps) => {
    const advertisement: Accommodation = {
        id: 1,
        name: "Hotel Selena Family Resort",
        description:
            "Цей готель розташований у тихому місці поруч з Дніпром. Інфраструктура готелю налічує літню терасу і ресторан. Гостям пропонується оренда велосипедів, тенісні корти, SUP-борди, прогулянки по Дніпру, рибалка, а також лазні на дровах з виходом на річку, а також можливість користуватися різноманітними спортивними майданчиками",
        kind: "hotel",
        status: "published",
        created_at: new Date('2022-03-26'),
        updated_at: new Date('2022-03-26'),
        phone: "0472545454",
        email: "selena@sample.com",
        user_id: 1,
        reg_code: "41643586",
        address_owner: "Байди Вишневецького, 15 Черкаси 18001",
        person: "Кононенко Іван Васильович",
      };
    return(
        <>
        <Typography fontSize={28} fontWeight={500} sx={{marginBottom: '35px'}}>Мої оголошення</Typography>
        <AdvertisementItem props={advertisement}/>
        </>
    )
}