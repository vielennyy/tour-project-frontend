import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { LocationMarker } from './LocationMarker';

const API_KEY:string = process.env.REACT_APP_API_KEY as string;

// 49.44428388879221, 32.05884117728714 - Черкаси
// 49.450667076940356, 32.06501776303598 - Долина троянд
// 49.464469193130824, 32.02882401610382 - Сосновий бір
// 49.41699817985301, 32.02273163007198 - Черкаський зоопарк


const containerStyle = {
    width: '980px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const cherkassy = {
    lat: 49.44428388879221,
    lng: 32.05884117728714,
  }

  const roseValley = {
    lat: 49.450667076940356,
    lng: 32.06501776303598,
  }

  const sosnivskiy = {
    lat: 49.464469193130824,
    lng: 32.02882401610382,
  }

  const zoo = {
    lat: 49.41699817985301,
    lng: 32.02273163007198,
  }
  
  const defaultOptions = {
    // panControl: true,
    zoomControl: false,
    // mapTypeControl: false,
    // scaleControl: false,
    // streetViewControl: false,
    // rotateControl: false,
    // clickableIcons: false,
    // keyboardShortcuts: false,
    // scrollwheel: false,
    // disableDoubleClickZoom: false,
    // fullscreenControl: false,
    // language: 'uk',
    minZoom: 8,
    maxZoom: 18,

  }

export const Map = () => {
    console.log(API_KEY)
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
    return (isLoaded ? (
        
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={cherkassy}
          zoom={10}
          
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={defaultOptions}
        >
            <LocationMarker position={cherkassy}/>
            <LocationMarker position={roseValley}/>
            <LocationMarker position={sosnivskiy}/>
            <LocationMarker position={zoo}/>
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>
    )
}