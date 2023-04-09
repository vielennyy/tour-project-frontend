import Box from "@mui/material/Box";

import { Banner} from "./Banner";
import { TextBanner} from "./TextBanner";
import { Slider } from "./Slider";
import { MapSection } from "./MapSection";

export const HomePageContent = ():JSX.Element => {
  return (
    <Box>
      <Banner/>
      <TextBanner/>
      <Slider/>
      <MapSection/>
    </Box>
  )
}