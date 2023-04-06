import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { AttractionMarker } from './LocationMarker/AttractionMarker';
import { defaultTheme } from './Theme';
import { Box } from '@mui/material'
import { Accommodation, Attraction,  MapWindowSize,  PlaceCoordinates} from '../TypesAndInterfaces';
import { useState, useEffect } from 'react';

const API_KEY:string = process.env.REACT_APP_API_KEY as string;

// 49.44428388879221, 32.05884117728714 - Черкаси
// 49.450667076940356, 32.06501776303598 - Долина троянд
// 49.464469193130824, 32.02882401610382 - Сосновий бір
// 49.41699817985301, 32.02273163007198 - Черкаський зоопарк



  
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

  interface myComponentProps{
    props: MapWindowSize
}

export const Map = ({props}:myComponentProps) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        language: 'uk'
      })
    
      const [map, setMap] = React.useState<google.maps.Map | null>(null);
      const [zoom, setZoom] = useState(props.zoom);

    
      const onLoad = React.useCallback(function callback(map: google.maps.Map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(cherkassy);
        map.fitBounds(bounds);
    
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
        setMap(null)
      }, [])

      function getData (url:string, setData: React.Dispatch<React.SetStateAction<any>>) {
        fetch(url)
          .then(response => response.json())
          .then(json => setData(json));
      }

      const [attractions, setAttractions] = useState<Attraction[]>([]);
      
      useEffect(() => {
        fetch('https://cktour.club/api/v1/attractions')
          .then(response => response.json())
          .then(json => setAttractions(json));
      }, []);
      
      const attractionsCoordinatesList: PlaceCoordinates[] = [];

      attractions.forEach((attraction) => {
        const geolocations = attraction.geolocations;
        if (geolocations && geolocations.length > 0) {
          const latitude = geolocations[0].latitude;
          const longitude = geolocations[0].longitude;
          if (latitude && longitude) {
            attractionsCoordinatesList.push({ lat: +latitude, lng: +longitude });
          }
        }
      });

      // const [accommodations, setAccommodations] = useState<Accommodation[]>([]);

      // useEffect(() => {
      //   fetch('https://cktour.club/api/v1/accommodations')
      //     .then(response => response.json())
      //     .then(json => setAccommodations(json.data));
      // }, []);

      // console.log(accommodations)

    const [caterings, setCaterings] = useState([])

    useEffect(() => {
      fetch('https://cktour.club/api/v1/accommodations')
        .then(response => response.json())
        .then(json => setCaterings(json.data));
    }, []);

    console.log(caterings)
    
    return (isLoaded ? (
        <Box sx={{overflow: 'hidden'}}>
          <GoogleMap
            mapContainerStyle={props}
            center={cherkassy}
            zoom={zoom}
            
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultOptions}
          >
            {attractionsCoordinatesList.map(attraction => <AttractionMarker
            key={`${attraction.lat}-${attraction.lng}`}
          position={attraction}
          setZoom={setZoom}
        />)}
              
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
        </Box>
        
    ) : <></>
    )
}