import { Marker } from '@react-google-maps/api';
import { PlaceCoordinates } from 'src/components/TypesAndInterfaces';

interface myComponentProps{
    position: PlaceCoordinates
}

export const LocationMarker = ({position}:myComponentProps) => {
    return(
        <Marker position={position}/>
    )
}