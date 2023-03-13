import React, {useState} from 'react';

import {Box,
  Typography,
  DialogTitle,
  DialogActions,
  Dialog,
  Button,
  Tab,
  Tabs} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

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

export const RegistrationPopup = ():JSX.Element =>  {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} sx={{
        color: '#000000',
        padding: 0,
        textDecoration: 'underline',
        textTransform: 'capitalize'
      }}>
        Реєстрація
      </Button>
      <Dialog open={open}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 2
        }}>
          <DialogTitle sx={{padding: 1}}>Реєстрація</DialogTitle>
          <Button onClick={handleClose} sx={{padding: 0, minWidth: 20, color: "inherit"}}>
            <CloseIcon/>
          </Button>
        </Box>
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
        <DialogActions sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Button onClick={handleClose} sx={{
            background: '#c1bfbf',
            width: 200,
            height: 40
          }}>Реєстрація</Button>
        </DialogActions>
        <Box onClick={handleClose} sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 1
        }}>
          <Typography sx={{
            fontSize: 14,
            cursor: 'pointer'
          }}>
            Вже маєш акаунт? Вхід
          </Typography>
        </Box>
      </Dialog>
    </div>
  );
}