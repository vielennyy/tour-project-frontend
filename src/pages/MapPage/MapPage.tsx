import { InfoCard } from "src/components/Map/InfoCard"
import { Map } from "src/components/Map"

const containerStyle = {
    width: '99vw',
    height: '86vh',
    zoom: -2,
  };

export const MapPage = () => {
    return(
        <>
            <Map props={containerStyle}/>
            <InfoCard/>
        </>
    )
}