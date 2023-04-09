import { Container } from "@mui/material";

import { AccommodationHeader } from "./AccommodationHeader";
import { AccommodationSlider } from "./AccommodationSlider";
import { AccommodationDescr } from "./AccommodationDescr";
import { AccommodationRooms } from "./AccommodationRooms";
import { AccommodationComments} from "./AccommodationComments";
import { AccommodationMap } from "./AccommodationMap";

export const AccommodationPageContent = ():JSX.Element => {
  return(
    <Container sx={{
      width: '1440',
      marginTop: 2,
      marginBottom: 4
    }}>
      <AccommodationHeader/>
      <AccommodationSlider/>
      <AccommodationDescr/>
      <AccommodationRooms/>
      <AccommodationComments/>
      <AccommodationMap/>
    </Container>
  )
}