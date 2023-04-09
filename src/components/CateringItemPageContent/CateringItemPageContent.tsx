import { Container } from "@mui/material";

import { CateringItemHeader } from "./CateringItemHeader";
import { CateringItemSlider } from "./CateringItemSlider";
import { CateringItemDescr } from "./CateringItemDescr";
import { CateringItemComments } from "./CateringItemComments";
import { CateringItemMap } from "./CateringItemMap";

export const CateringItemPageContent = ():JSX.Element => {
  return(
    <Container sx={{
      width: '1440',
      marginTop: 2,
      marginBottom: 4
    }}>
      <CateringItemHeader/>
      <CateringItemSlider/>
      <CateringItemDescr/>
      <CateringItemComments/>
      <CateringItemMap/>
    </Container>
  )
}