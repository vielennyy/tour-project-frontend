import { Marker, MarkerProps } from '@react-google-maps/api';
import { PlaceCoordinates } from 'src/components/TypesAndInterfaces';
import accommodationImg from '../MarkerImages/accommodation_img.svg';
import { Geolocations } from 'src/components/TypesAndInterfaces';
import React from 'react'
interface myComponentProps{
    position: PlaceCoordinates,
    onClick: any,
}

interface AccommodationMarkerProps {
    accommodation: Geolocations;
    setZoom: React.Dispatch<React.SetStateAction<number>>;
  }

export const AccommodationMarker: React.FC<AccommodationMarkerProps> = ({ accommodation, setZoom }: AccommodationMarkerProps) => {
    const handleMarkerClick = () => {
        console.log('zoom')
        setZoom(15); // set the zoom level to 15 when the marker is clicked
      };

      const position = {
        lat: +accommodation.latitude,
        lng: +accommodation.longitude,
      }

    return(
        <Marker
        position={position}
        title={''}
        onClick={()=> {window.open(`/accommodations/${accommodation.geolocationable_id}`, '_blank')}}
        clickable={true}
        icon={accommodationImg}/>
    )
}