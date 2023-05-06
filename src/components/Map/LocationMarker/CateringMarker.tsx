import { Marker, MarkerProps } from '@react-google-maps/api';
import { PlaceCoordinates } from 'src/components/TypesAndInterfaces';
import cateringImg from '../MarkerImages/catering_img.svg'
import { Geolocations } from 'src/components/TypesAndInterfaces';

import React from 'react'
interface myComponentProps{
    position: PlaceCoordinates,
    onClick: any,
}

interface CateringMarkerProps {
    catering: Geolocations;
    setZoom: React.Dispatch<React.SetStateAction<number>>;
}

export const CateringMarker: React.FC<CateringMarkerProps> = ({ catering, setZoom }: CateringMarkerProps) => {
    const handleMarkerClick = () => {
        console.log('zoom')
        setZoom(15); // set the zoom level to 15 when the marker is clicked
      };
      const position = {
        lat: +catering.latitude,
        lng: +catering.longitude,
      }
    return(
        <Marker
        position={position}
        icon={cateringImg}
        clickable={true}
        />
    )
}