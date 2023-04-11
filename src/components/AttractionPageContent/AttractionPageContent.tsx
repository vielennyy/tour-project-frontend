import { Container } from "@mui/material";

import { AttractionHeader } from "./AttractionHeader";
import { AttractionDescr } from "./AttractionDescr";
import { AttractionTours } from "./AttractionTours";
import { AttractionHotels } from "./AttractionHotels";
import { AttractionSlider } from "./AttractionSlider";

export const AttractionPageContent = ():JSX.Element => {
  return(
    <Container sx={{
      width: '1440',
      marginTop: 2,
      marginBottom: 4
    }}>
      <AttractionHeader/>
      <AttractionDescr/>
      <AttractionTours/>
      <AttractionHotels/>
      <AttractionSlider/>
    </Container>
  )
}