import { InfoCard } from "src/components/Map/InfoCard"
import { Map } from "src/components/Map"

const containerStyle = {
    width: '99vw',
    height: '86vh',
  };

  const cherkassy = {
    lat: 49.44428388879221,
    lng: 32.05884117728714,
  }

export const MapPage = () => {
    return(
        <>
            <Map size={containerStyle} center={cherkassy} zoom={9}/>
            <InfoCard/>
        </>
    )
}