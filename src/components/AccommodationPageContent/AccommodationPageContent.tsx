import {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import { Container } from "@mui/material";

import { AccommodationHeader } from "./AccommodationHeader";
import { AccommodationSlider } from "./AccommodationSlider";
import { AccommodationDescr } from "./AccommodationDescr";
import { AccommodationRooms } from "./AccommodationRooms";
import { AccommodationComments} from "./AccommodationComments";
import { AccommodationMap } from "./AccommodationMap";

import { AccommodationData } from "../TypesAndInterfaces";

export const AccommodationPageContent = ():JSX.Element => {
  const [accommodation, setAccomodation] = useState<AccommodationData>();
  const {id} = useParams();

  const fetchingAccommodation = async () => {
    const fetching = await fetch(`https://cktour.club/api/v1/accommodations/${id}`,
      {
        method: "GET"
      });
    const json = await  fetching.json();
    return setAccomodation(json.data);
  }

  useEffect(() => {
    fetchingAccommodation()
  }, [])

  return(
    <Container sx={{
      width: '1440',
      marginTop: 2,
      marginBottom: 4
    }}>
      {accommodation ? <AccommodationHeader accommodation={accommodation?.accommodation}/> : null}
      {accommodation ? <AccommodationSlider image_urls={accommodation.image_urls}/> : null}
      {accommodation ? <AccommodationDescr accommodation={accommodation?.accommodation}/> : null}
      {accommodation ? <AccommodationRooms rooms={accommodation?.room}/> : null}
      <AccommodationComments/>
      {accommodation ? <AccommodationMap accommodation={accommodation?.accommodation}/> : null}
    </Container>
  )
}