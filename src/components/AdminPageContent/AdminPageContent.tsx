import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {AdminTab} from "./AdminTab";
import {PartnerTab} from "./PartnerTab";
import {UserTab} from "./UserTab";
import {AttractionsTab} from "./AttractionsTab";
import {GalleryTab} from "./GalleryTab";
import {OffersTabs} from "./OffersTab";
import {CommentsTab} from "./CommentsTab";

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

export const AdminPageContent = ():JSX.Element => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Адміністратори" {...a11yProps(0)} />
          <Tab label="Бізнес користувачі" {...a11yProps(1)} />
          <Tab label="Користувачі" {...a11yProps(2)} />
          <Tab label="Атракції" {...a11yProps(3)} />
          <Tab label="Фотогалерея" {...a11yProps(4)} />
          <Tab label="Пропозиції" {...a11yProps(5)} />
          <Tab label="Коментарі" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AdminTab/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PartnerTab/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <UserTab/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AttractionsTab/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <GalleryTab/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <OffersTabs/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <CommentsTab/>
      </TabPanel>
    </Box>
  );
}