import {Typography, SvgIcon} from '@mui/material';
import { ReactComponent as ProfileIcon } from '../UserPageIcons/profile.svg'
import { ReactComponent as BookingIcon } from '../UserPageIcons/briefcase.svg'
import { ReactComponent as AdvertismentIcon } from '../UserPageIcons/clipboard-text.svg'
import { ReactComponent as PaymentIcon } from '../UserPageIcons/dollar-circle.svg'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { InfoCard } from '../InfoCard';
import { PartnerInfoCardProps } from 'src/components/TypesAndInterfaces';
import { OrdersCard } from '../OrdersCard';
import { AdvertisementCard } from '../AdvertismentCard';
import { RatesAndPaymentCard } from '../RatesAndPaymentsCard';


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
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export const Sidebar = () => {
  const [value, setValue] = React.useState(0);
  const [ordersTab, setOrdersTab] = React.useState(false)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handlesClickOrdersTab = (event: React.SyntheticEvent) => {
    setOrdersTab(!ordersTab)
  }

  const user:PartnerInfoCardProps = {
    isCompany: true,
    firstName: "Анастасія",
    lastName: "Андрощук",
    phoneNumber: "+38 (097) 00 11 111",
    email: "an.androshchuk@gmail.com",
}

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={ { justifyContent: 'flex-start', marginLeft: '10px', color:'#777777', fontFamily: 'Roboto', 
        '& .MuiTabs-indicator': {
            display: 'none',
          },
        '& .MuiTab-root': {
            justifyContent: 'flex-start',
          },
        }}
      >
        <Tab label={
            <>
                <SvgIcon component={ProfileIcon} color='inherit'/>
                <Typography sx={{ paddingLeft: '20px', fontFamily: 'Roboto', textTransform:'none', fontStyle:'normal', fontWeight: 400, fontSize: '24px'}}>
                    Профіль
                </Typography>
            </>} 
            sx={{ padding: '12px 0px', display: 'flex', flexDirection: 'row', fontFamily: 'Roboto', '&.Mui-selected': {color: '#222222'}}} 
            {...a11yProps(0)} />
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <SvgIcon component={BookingIcon} color='inherit'/>
                    <Typography sx={{ paddingLeft: '20px', fontFamily: 'Roboto', textTransform:'none', fontStyle:'normal', fontWeight: 400, fontSize: '24px'}}>
                        Мої бронювання
                    </Typography>
                </Box>
            
            
            
        <Tab label={
                    <Typography sx={{ paddingLeft: '20px', fontFamily: 'Roboto', textTransform:'none', fontStyle:'normal', fontWeight: 400, fontSize: '24px'}}>
                        Житло
                    </Typography>
            }
            sx={{ padding: '12px 0px', display: 'flex', flexDirection: 'column', fontFamily: 'Roboto', '&.Mui-selected': {color: '#222222'}}} 
            onClick={handlesClickOrdersTab}
            {...a11yProps(1)} />
        <Tab label={
                    <Typography sx={{ paddingLeft: '20px', fontFamily: 'Roboto', textTransform:'none', fontStyle:'normal', fontWeight: 400, fontSize: '24px'}}>
                        Заклади
                    </Typography>
            }
            sx={{ padding: '12px 0px', display: 'flex', flexDirection: 'column', fontFamily: 'Roboto', '&.Mui-selected': {color: '#222222'}}} 
            onClick={handlesClickOrdersTab}
            {...a11yProps(2)} />
        <Tab label={
                    <Typography sx={{ paddingLeft: '20px', fontFamily: 'Roboto', textTransform:'none', fontStyle:'normal', fontWeight: 400, fontSize: '24px'}}>
                    Тури
                    </Typography>
            }
            sx={{ padding: '12px 0px', display: 'flex', flexDirection: 'column', fontFamily: 'Roboto', '&.Mui-selected': {color: '#222222'}}} 
            onClick={handlesClickOrdersTab}
            {...a11yProps(3)} />        
        <Tab label={
            <>
                <SvgIcon component={AdvertismentIcon} color='inherit'/>
                <Typography sx={{ paddingLeft: '20px', fontFamily: 'Roboto', textTransform:'none', fontStyle:'normal', fontWeight: 400, fontSize: '24px'}}>
                    Мої оголошення
                </Typography>
            </>}
            sx={{ padding: '12px 0px', display: 'flex', flexDirection: 'row', fontFamily: 'Roboto', '&.Mui-selected': {color: '#222222'}}} 
            {...a11yProps(4)} />       
        <Tab label={
            <>
                <SvgIcon component={PaymentIcon} color='inherit'/>
                <Typography sx={{ paddingLeft: '20px', fontFamily: 'Roboto', textTransform:'none', fontStyle:'normal', fontWeight: 400, fontSize: '24px'}}>
                    Тарифи і оплата
                </Typography>
            </>}
            sx={{ padding: '12px 0px', display: 'flex', flexDirection: 'row', fontFamily: 'Roboto', '&.Mui-selected': {color: '#222222'}}} 
            {...a11yProps(5)} />      
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box sx={{margin: '0px 80px'}}>
            <InfoCard user={user} />
        </Box>
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
        
      </TabPanel> */}
      <TabPanel value={value} index={2}>
      <Box sx={{padding: '0px 80px', width: '100%', height: '100%'}}>
            <OrdersCard/>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Box sx={{padding: '0px 80px', display: 'block'}}>
            <AdvertisementCard/>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Box sx={{padding: '0px 80px', display: 'block', width: '100%', height: '100%'}}>
                <RatesAndPaymentCard/>
            </Box>
      </TabPanel>
    </Box>
  );
}