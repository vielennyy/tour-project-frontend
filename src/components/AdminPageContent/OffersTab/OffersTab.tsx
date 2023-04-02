import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { AccommodationsTab } from "./AccommodationsTab";
import { FoodsTab } from "./FoodsTab";
import { ToursTab } from "./ToursTab";
import {UserToken} from "../../TypesAndInterfaces";

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

export const OffersTabs = ({token}:UserToken):JSX.Element => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Житло" {...a11yProps(0)} />
          <Tab label="Харчування" {...a11yProps(1)} />
          <Tab label="Подорожі" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AccommodationsTab token={token}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FoodsTab/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ToursTab token={token}/>
      </TabPanel>
    </Box>
  );
}