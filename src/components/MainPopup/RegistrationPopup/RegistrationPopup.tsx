import React, {useState} from 'react';

import {Box,
  Typography,
  Button,
  Tab,
  Tabs} from "@mui/material";

import {RegistrationBusinessPopup} from "./RegistrationBusinessPopup";
import {RegistrationTouristPopup} from "./RegistrationTouristPopup";

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
        <Box>
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

export const RegistrationPopup = ():JSX.Element =>  {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <Box sx={{
      padding: 2,
      paddingBottom: 0
    }}>
      <Typography>Реєстрація</Typography>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Я створюю акаунт туриста" {...a11yProps(0)} />
            <Tab label="Я створюю бізнес акаунт" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <RegistrationTouristPopup/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RegistrationBusinessPopup/>
        </TabPanel>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 2
      }}>
        <Button sx={{
          background: '#c1bfbf',
          width: 200,
          height: 40,
          margin: "0 auto"
        }}>Реєстрація</Button>
      </Box>
    </Box>
  );
}