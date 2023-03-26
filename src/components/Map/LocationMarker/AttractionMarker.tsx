import { Marker } from '@react-google-maps/api';
import { PlaceCoordinates } from 'src/components/TypesAndInterfaces';
import attractionImg from '../MarkerImages/attraction_img.svg'

interface myComponentProps{
    position: PlaceCoordinates
}

export const AttractionMarker = ({position}:myComponentProps) => {
    return(
        <Marker position={position}
            icon={attractionImg}/>
        
        // <></>
    )
}