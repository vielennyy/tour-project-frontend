import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { AttractionMarker } from './LocationMarker/AttractionMarker';
import { defaultTheme } from './Theme';
import { Box } from '@mui/material'
import { MapItemCard,  PlaceCoordinates} from '../TypesAndInterfaces';
import { useState, useEffect } from 'react';

const API_KEY:string = process.env.REACT_APP_API_KEY as string;

// 49.44428388879221, 32.05884117728714 - Черкаси
// 49.450667076940356, 32.06501776303598 - Долина троянд
// 49.464469193130824, 32.02882401610382 - Сосновий бір
// 49.41699817985301, 32.02273163007198 - Черкаський зоопарк


const containerStyle = {
    width: '100vw',
    height: '86vh'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const cherkassy = {
    lat: 49.44428388879221,
    lng: 32.05884117728714,
  }
  
  const defaultOptions = {
    // panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    // scaleControl: false,
    streetViewControl: false,
    // rotateControl: false,
    // clickableIcons: false,
    // keyboardShortcuts: false,
    // scrollwheel: false,
    // disableDoubleClickZoom: false,
    fullscreenControl: false,
    // language: 'uk',
    minZoom: 8,
    maxZoom: 15,
    styles: defaultTheme,
  }

export const Map = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        language: 'uk'
      })
    
      const [map, setMap] = React.useState<google.maps.Map | null>(null)
    
      const onLoad = React.useCallback(function callback(map: google.maps.Map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(cherkassy);
        map.fitBounds(bounds);
    
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
        setMap(null)
      }, [])

      const [attractions, setAttractions] = useState<MapItemCard[]>([]);
      
      useEffect(() => {
        fetch('http://164.92.135.103/api/v1/attractions')
          .then(response => response.json())
          .then(json => setAttractions(json));
      }, []);

      console.log(attractions)

      const [accommodations, setAccommodations] = useState<MapItemCard[]>([]);

      useEffect(() => {
        fetch('http://164.92.135.103/api/v1/accommodations')
          .then(response => response.json())
          .then(json => setAccommodations(json));
      }, []);

      console.log(accommodations)

      
      const attractionsCoordinatesList: PlaceCoordinates[] = [];
      
      attractions.forEach((attraction) => {
        const lat = +attraction.coordinates[0].latitude;
        const lng = +attraction.coordinates[0].longitude;
        attractionsCoordinatesList.push({ lat, lng });
      });


    return (isLoaded ? (
        <Box>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={cherkassy}
            zoom={10}
            
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultOptions}
          >
            {attractionsCoordinatesList.map(attraction => <AttractionMarker position={attraction}/>)}
              
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
        </Box>
        
    ) : <></>
    )
}