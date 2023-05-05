import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { AttractionMarker, AccommodationMarker } from './LocationMarker';
import { defaultTheme } from './Theme';
import { Box } from '@mui/material'
import { Accommodation, Attraction,  Geolocations,  MapWindowSize,  PlaceCoordinates} from '../TypesAndInterfaces';
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
    minZoom:10,
    maxZoom: 20,
    styles: defaultTheme,
  }

  interface myComponentProps{
    size: MapWindowSize
    center: PlaceCoordinates,
    zoom: number,
}

export const Map = (props:myComponentProps) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        language: 'uk'
      })
      const center = props.center
      const [map, setMap] = React.useState<google.maps.Map | null>(null);
      const [zoom, setZoom] = useState(props.zoom);

    
      const onLoad = React.useCallback(function callback(map: google.maps.Map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        // const bounds = new window.google.maps.LatLngBounds();
        // bounds.extend(new window.google.maps.LatLng(49.95010347463873, 32.14496496924874))
        // bounds.extend(new window.google.maps.LatLng(50.070137508481, 31.44687743946905))
        // bounds.extend(new window.google.maps.LatLng(49.258652627349306, 30.977594527194963))
        // bounds.extend(new window.google.maps.LatLng(48.95142650603749, 30.963586068944238))
        // bounds.extend(new window.google.maps.LatLng(49.075462869908115, 32.67962063211506))
        // map.fitBounds(bounds);
    
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

      // const [attractions, setAttractions] = useState<Attraction[]>([]);
      
      // useEffect(() => {
      //   fetch('https://cktour.club/api/v1/attractions')
      //     .then(response => response.json())
      //     .then(json => setAttractions(json));
      // }, []);

      // console.log(attractions)
      
      // const attractionsCoordinatesList: PlaceCoordinates[] = [];

      // attractions.forEach((attraction) => {
      //   const geolocations = attraction.geolocations;
      //   console.log(geolocations)
      //   if (geolocations && geolocations.length > 0) {
      //     const latitude = geolocations[0].latitude;
      //     const longitude = geolocations[0].longitude;
      //     if (latitude && longitude) {
      //       attractionsCoordinatesList.push({ lat: +latitude, lng: +longitude });
      //       console.log(attractionsCoordinatesList)
      //     }
      //   }
      // });


    const [geolocations, setGeolocations] = useState<Geolocations[]>([]);
      
      useEffect(() => {
        fetch('https://cktour.club/api/v1/geolocations')
          .then(response => response.json())
          .then(json => setGeolocations(json));
      }, []);

      console.log(geolocations)
      
      const attractionsCoordinatesList: PlaceCoordinates[] = [];
      const accommodationsCoordinatesList: PlaceCoordinates[] = [];
      const cateringsCoordinatesList: PlaceCoordinates[] = [];


      geolocations.forEach((geolocation) => {
          const latitude = +geolocation.latitude;
          const longitude = +geolocation.longitude;
          const type = geolocation.geolocationable_type;
          switch(type) {
            case 'Accommodation':
              accommodationsCoordinatesList.push({ lat: latitude, lng: longitude });
              break;
            case 'Attraction':
              attractionsCoordinatesList.push({ lat: latitude, lng: longitude });
              break;
            case 'Catering':
              cateringsCoordinatesList.push({ lat: latitude, lng: longitude }); 
              break;
          }
        }
      );
      // const [accommodations, setAccommodations] = useState<Accommodation[]>([]);

      // useEffect(() => {
      //   fetch('https://cktour.club/api/v1/accommodations')
      //     .then(response => response.json())
      //     .then(json => setAccommodations(json.data));
      // }, []);

      // console.log(accommodations)

    // const [caterings, setCaterings] = useState([])

    // useEffect(() => {
    //   fetch('https://cktour.club/api/v1/accommodations')
    //     .then(response => response.json())
    //     .then(json => setCaterings(json.data));
    // }, []);

    // console.log(caterings)
    
    return (isLoaded ? (
        <Box sx={{overflow: 'hidden'}}>
          <GoogleMap
            mapContainerStyle={props.size}
            center={center}
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
            {accommodationsCoordinatesList.map(accommodation => <AccommodationMarker
            key={`${accommodation.lat}-${accommodation.lng}`}
            position={accommodation}
            setZoom={setZoom}
            />)}  
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
        </Box>
        
    ) : <></>
    )
}