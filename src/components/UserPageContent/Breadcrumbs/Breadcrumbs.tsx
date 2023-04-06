import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
// onClick={handleClick} 
export default function CustomSeparator() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="text.primary" fontSize='18' fontWeight={400} href="/" >
      Головна
    </Link>,
    
    <Typography key="3" color="text.primary" fontSize='18' fontWeight={400}>
      Особистий кабінет 
    </Typography>,
  ];

  return (
    <Stack margin={'20px 0'} spacing={2}>
      <Breadcrumbs separator={<Typography sx={{ color: '#EF5151' }}>•</Typography>}  aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}