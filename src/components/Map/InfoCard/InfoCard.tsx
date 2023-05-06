import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AttractionPlaceItem, AccommodationPlaceItem, CateringPlaceItem } from './PlaceItem';
import { useState, useEffect } from 'react';
import { Accommodation, Attraction, Catering } from "../../TypesAndInterfaces"


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const InfoCard = () => {
  const [value, setValue] = React.useState(0);
  const [attractionsData, setAttractionsData] = useState<Attraction[]>([]);
  const [accommodationsData, setAccommodationsData] = useState<Accommodation[]>()
  const [cateringsData, setCateringsData] = useState<Catering[]>()

  // useEffect(() => {
    fetch('https://cktour.club/api/v1/attractions')
      .then(response => response.json())
      .then(json => setAttractionsData(json));
    fetch('https://cktour.club/api/v1/accommodations')
      .then(response => response.json())
      .then(json => setAccommodationsData(json.data));
    fetch('https://cktour.club/api/v1/caterings')
      .then(response => response.json())
      .then(json => setCateringsData(json.data));
  // }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const style = {
    position: 'absolute',
    top: '20vh', 
    left: '8vw', 
    width: '25vw', 
    height: '70vh', 
    backgroundColor: 'white',
    borderRadius: '5%',
    zIndex: 1,
    overflowY: 'scroll'
}

  return (
    <Box sx={style}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Атракції" {...a11yProps(0)} />
          <Tab label="Житло" {...a11yProps(1)} />
          <Tab label="Заклади" {...a11yProps(2)} />
          <Tab label="Тури" {...a11yProps(3)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {attractionsData.map(attraction => <AttractionPlaceItem key={attraction.id} {...attraction}/>) }
      </TabPanel>
      <TabPanel value={value} index={1}>
      {accommodationsData !== undefined ? accommodationsData.map(accommodation => <AccommodationPlaceItem key={accommodation.id} {...accommodation}/>):<></> }
      </TabPanel>
      <TabPanel value={value} index={2}>
      {cateringsData !== undefined ? cateringsData.map(catering => <CateringPlaceItem key={catering.id} {...catering}/>) : <></>}
      </TabPanel>
      <TabPanel value={value} index={3}>
      </TabPanel>
      <TabPanel value={value} index={4}>
        {/* Item Five */}
      </TabPanel>
    </Box>
  );
}


