import Box from "@mui/material/Box";

import {Banner} from "../../components/Banner";
import {TextBanner} from "../../components/TextBanner";
import {Slider} from "../../components/Slider";
import {MapSection} from "../../components/MapSection";

export const HomePage = () => {
  return(
    <Box>
      <Banner/>
      <TextBanner/>
      <Slider/>
      <MapSection/>
    </Box>
  )
  }