import { Marker, MarkerProps } from '@react-google-maps/api';
import { PlaceCoordinates } from 'src/components/TypesAndInterfaces';
import attractionImg from '../MarkerImages/attraction_img.svg'
import React from 'react'
interface myComponentProps{
    position: PlaceCoordinates,
    onClick: any,
}

interface AttractionMarkerProps {
    position: google.maps.LatLngLiteral;
    setZoom: React.Dispatch<React.SetStateAction<number>>;
  }

// const icon = {
//   img: attractionImg,
//   scaledSize: {
//     width: 50,
//     height: 50,
//   }
// }

export const AttractionMarker: React.FC<AttractionMarkerProps> = ({ position, setZoom }: AttractionMarkerProps) => {
    const handleMarkerClick = () => {
        console.log('zoom')
        setZoom(15); // set the zoom level to 15 when the marker is clicked
      };

    return(
        <Marker
        position={position}
        onClick={handleMarkerClick}
        icon={attractionImg}/>
        
        // <></>
    )
}