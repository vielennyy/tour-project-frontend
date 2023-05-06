import { Marker, MarkerProps } from '@react-google-maps/api';
import { PlaceCoordinates } from 'src/components/TypesAndInterfaces';
import tourImg from '../MarkerImages/tour_img.svg'
import { Geolocations } from 'src/components/TypesAndInterfaces';

import React from 'react'
interface myComponentProps{
    tour: PlaceCoordinates,
    onClick: any,
}

interface TourMarkerProps {
    tour: Geolocations;
    setZoom: React.Dispatch<React.SetStateAction<number>>;
}

export const TourMarker: React.FC<TourMarkerProps> = ({ tour, setZoom }: TourMarkerProps) => {
    const handleMarkerClick = () => {
        console.log('zoom')
        setZoom(15); // set the zoom level to 15 when the marker is clicked
      };
      const position = {
        lat: +tour.latitude,
        lng: +tour.longitude,
      }
    return(
        <Marker
        position={position}
        icon={tourImg}
        clickable={true}
        />
    )
}