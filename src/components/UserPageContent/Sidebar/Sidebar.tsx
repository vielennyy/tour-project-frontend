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
import { PartnerInfoCardProps, User } from 'src/components/TypesAndInterfaces';
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
  const [adverticementsTab, setAdverticementsTab] = React.useState(false)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handlesClickOrdersTab = (event: React.SyntheticEvent) => {
    setOrdersTab(!ordersTab)
  }
  const handlesClickAdverticementsTab = (event: React.SyntheticEvent) => {
    setAdverticementsTab(!adverticementsTab)
  }

  return (
    <Box
      sx={{flexGrow: 1, bgcolor: 'background.paper', display: 'flex', minHeight: 700 }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={ { width: '250px', justifyContent: 'flex-start', margin: '0px 80px 0px 10px', color:'#777777', fontFamily: 'Roboto', 
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
            sx={{ padding: '8px 0px', display: 'flex', flexDirection: 'row', fontFamily: 'Roboto', '&.Mui-selected': {color: '#222222'}}} 
            {...a11yProps(0)} />
        
        <Box onClick={handlesClickOrdersTab}
            sx={{ padding: '8px 0px', display: 'flex', alignItems: 'center', flexDirection: 'row', fontFamily: 'Roboto', cursor: 'pointer'}}>
                <SvgIcon component={BookingIcon} color='inherit'/>
                <Typography sx={{ paddingLeft: '20px', fontFamily: 'Roboto', textTransform:'none', fontStyle:'normal', fontWeight: 400, fontSize: '24px'}}>
                Мої бронювання
                </Typography>
        </Box>
            
        {ordersTab ? 
            <Tab label={
                <Typography sx={{ paddingLeft: '20px', fontFamily: 'Roboto', textTransform:'none', fontStyle:'normal', fontWeight: 400, fontSize: '24px'}}>
                    Житло
                </Typography>
            }
            sx={{ padding: '8px 0px', display: 'flex', flexDirection: 'column', fontFamily: 'Roboto', '&.Mui-selected': {color: '#222222'}}} 
            {...a11yProps(1)} />
            :
            <></>
        }  
        {ordersTab ? 
            <Tab label={
                <Typography sx={{ paddingLeft: '20px', fontFamily: 'Roboto', textTransform:'none', fontStyle:'normal', fontWeight: 400, fontSize: '24px'}}>
                    Заклади
                </Typography>
            }
            sx={{ padding: '8px 0px', display: 'flex', flexDirection: 'column', fontFamily: 'Roboto', '&.Mui-selected': {color: '#222222'}}} 
            {...a11yProps(2)} />
            :
            <></>
        }  
        {ordersTab ? 
            <Tab label={
                <Typography sx={{ paddingLeft: '20px', fontFamily: 'Roboto', textTransform:'none', fontStyle:'normal', fontWeight: 400, fontSize: '24px'}}>
                    Тури
                </Typography>
            }
            sx={{ padding: '8px 0px', display: 'flex', flexDirection: 'column', fontFamily: 'Roboto', '&.Mui-selected': {color: '#222222'}}} 
            {...a11yProps(3)} />
            :
            <></>
        }
               
        
            <Box 
                onClick={handlesClickAdverticementsTab}
                sx={{ padding: '8px 0px', display: 'flex', alignItems: 'center', flexDirection: 'row', fontFamily: 'Roboto', cursor: 'pointer'}}
            >
                <SvgIcon component={AdvertismentIcon} color='inherit'/>
                <Typography sx={{ paddingLeft: '20px', fontFamily: 'Roboto', textTransform:'none', fontStyle:'normal', fontWeight: 400, fontSize: '24px'}}>
                    Мої оголошення
                </Typography>
            </Box>
            
        {adverticementsTab ? 
            <Tab label={
                <Typography sx={{ paddingLeft: '20px', fontFamily: 'Roboto', textTransform:'none', fontStyle:'normal', fontWeight: 400, fontSize: '24px'}}>
                    На перевірці
                </Typography>
            }
            sx={{ padding: '8px 0px', display: 'flex', flexDirection: 'column', fontFamily: 'Roboto', '&.Mui-selected': {color: '#222222'}}} 
            {...a11yProps(4)} />
            :
            <></>
        }

        {adverticementsTab ? 
            <Tab label={
                <Typography sx={{ paddingLeft: '20px', fontFamily: 'Roboto', textTransform:'none', fontStyle:'normal', fontWeight: 400, fontSize: '24px'}}>
                    Активні
                </Typography>
            }
            sx={{ padding: '8px 0px', display: 'flex', flexDirection: 'column', fontFamily: 'Roboto', '&.Mui-selected': {color: '#222222'}}} 
            {...a11yProps(5)} />
            :
            <></>
        }   
        <Tab label={
            <>
                <SvgIcon component={PaymentIcon} color='inherit'/>
                <Typography sx={{ paddingLeft: '20px', fontFamily: 'Roboto', textTransform:'none', fontStyle:'normal', fontWeight: 400, fontSize: '24px'}}>
                    Тарифи і оплата
                </Typography>
            </>}
            sx={{ padding: '8px 0px', display: 'flex', flexDirection: 'row', fontFamily: 'Roboto', '&.Mui-selected': {color: '#222222'}}} 
            {...a11yProps(6)} />      
      </Tabs>
      <TabPanel value={value} index={0}>
            <InfoCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <OrdersCard/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OrdersCard/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h1>Caterings</h1>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h1>Tours</h1>
      </TabPanel>
      <TabPanel value={value} index={5}>
            {/* <AdvertisementCard/> */}
      </TabPanel>
      <TabPanel value={value} index={6}>
        <AdvertisementCard isActive={false}/>
      </TabPanel> 
    <TabPanel value={value} index={7}>
        <AdvertisementCard isActive={true}/>
    </TabPanel>
      <TabPanel value={value} index={8}>
          <RatesAndPaymentCard></RatesAndPaymentCard>
      </TabPanel>
    </Box>
  );
}
