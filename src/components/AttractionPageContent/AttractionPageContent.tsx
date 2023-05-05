import {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import { Container } from "@mui/material";

import { AttractionHeader } from "./AttractionHeader";
import { AttractionDescr } from "./AttractionDescr";
import { AttractionTours } from "./AttractionTours";
import { AttractionHotels } from "./AttractionHotels";
import { AttractionSlider } from "./AttractionSlider";

import { Attraction } from "../TypesAndInterfaces";

export const AttractionPageContent = ():JSX.Element => {
  const [attraction, setAttraction] = useState<Attraction>();
  const { id } = useParams();

  const fetchingAttraction = async () => {
    const fetching = await fetch(`https://cktour.club/api/v1/attractions/${id}`,
      {
        method: "GET"
      });
    const json = await fetching.json();
    return setAttraction(json);
  }

  useEffect(() => {
    fetchingAttraction()
  }, [])

  return(
    <Container sx={{
      width: '1440',
      marginTop: 2,
      marginBottom: 4
    }}>
      {attraction ? <AttractionHeader attraction={attraction}/> : null}
      {attraction ? <AttractionDescr attraction={attraction}/> : null}
      <AttractionTours/>
      <AttractionHotels/>
      <AttractionSlider/>
    </Container>
  )
}