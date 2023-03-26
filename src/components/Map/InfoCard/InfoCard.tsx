import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PlaceItem } from './PlaceItem';
import { useState, useEffect } from 'react';
import { MapItemCard } from "../../TypesAndInterfaces"


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
  const [atractionsData, setAtractionsData] = useState<MapItemCard[]>([]);

  useEffect(() => {
    fetch('http://164.92.135.103/api/v1/attractions')
      .then(response => response.json())
      .then(json => setAtractionsData(json));
  }, []);

//   console.log(atractionsData)

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
        {atractionsData.map(attraction => <PlaceItem key={attraction.id} {...attraction}/>)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </Box>
  );
}


