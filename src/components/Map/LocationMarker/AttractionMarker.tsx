import { Marker, MarkerProps } from '@react-google-maps/api';
import { PlaceCoordinates } from 'src/components/TypesAndInterfaces';
import attractionImg from '../MarkerImages/attraction_img.svg'
import { Geolocations } from 'src/components/TypesAndInterfaces';

import React from 'react'
interface myComponentProps{
    position: PlaceCoordinates,
    onClick: any,
}

interface AttractionMarkerProps {
    attraction: Geolocations;
    setZoom: React.Dispatch<React.SetStateAction<number>>;
  }

export const AttractionMarker: React.FC<AttractionMarkerProps> = ({ attraction, setZoom }: AttractionMarkerProps) => {
    const handleMarkerClick = () => {
        console.log('zoom')
        setZoom(15); // set the zoom level to 15 when the marker is clicked
      };
      const position = {
        lat: +attraction.latitude,
        lng: +attraction.longitude,
      }
    return(
        <Marker
        position={position}
        icon={attractionImg}
        onClick={()=> {window.open(`/attractions/${attraction.geolocationable_id}`, '_blank')}}
        clickable={true}
        />
    )
}