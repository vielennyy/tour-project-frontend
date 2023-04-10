import { Container } from "@mui/material";

import { TourHeader } from "./TourHeader";
import { TourSlide } from "./TourSlide";
import { TourDescr } from "./TourDescr";
import { TourReservation } from "./TourReservation";
import { TourComments } from "./TourComments";
import { TourMap } from "./TourMap";

export const TourPageContent = ():JSX.Element => {
  return (
    <Container sx={{
      width: '1440',
      marginTop: 2,
      marginBottom: 4
    }}>
      <TourHeader/>
      <TourSlide/>
      <TourDescr/>
      <TourReservation/>
      <TourComments/>
      <TourMap/>
    </Container>
  )
}