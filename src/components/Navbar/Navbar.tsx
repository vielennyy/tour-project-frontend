import React, {useState, useEffect} from "react";

import Box from '@mui/material/Box';

import { DefaultNavBar} from "./DefaultNavBar";
import {AdminNavBar} from "./AdminNavBar";

export const NavBar = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {

  }, [path])
  return (
    <Box>
      {path === '/admin' ? <AdminNavBar/> : <DefaultNavBar/>}
    </Box>
  )
}