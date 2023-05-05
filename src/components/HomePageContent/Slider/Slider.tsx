import {useEffect, useState} from "react";
import moment from "moment";

import {Link} from 'react-router-dom';

import {Box,
  Typography,
  Container} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay   } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Attraction } from "../../TypesAndInterfaces";

export const Slider = ():JSX.Element => {
  const [attractions, setAttractions] = useState<[]>([]);
  moment.locale('uk');

  const fetchingAttractions = async () => {
    const fetching = await fetch('https://cktour.club/api/v1/attractions',
      {
        method: "GET"
      });
    const json = await fetching.json();
    return setAttractions(json);
  }

  useEffect(() => {
    fetchingAttractions()
  }, [])

  return(
    <Container sx={{
      width: '1440',
      marginTop: 10
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Typography sx={{
        }} variant="h2">Цікаві місця Черкащини</Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 2
        }}>
          <Link to={'/attractions'}>
            <Typography variant="body2">
              Переглянути все
            </Typography>
          </Link>
          <ArrowForwardIcon color={"primary"}/>
        </Box>
      </Box>
      <Box sx={{
        marginTop: 2
      }}>
        <Swiper
          modules={[Navigation, A11y, Autoplay ]}
          spaceBetween={10}
          slidesPerView={4}
          navigation
          autoplay={{delay: 4000}}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {
            attractions.map((attraction:Attraction) =>
              <SwiperSlide>
                <Link to={`/attractions/${attraction.id}`} key={attraction.id}>
                  <Box sx={{
                    width: 280,
                    height: 335,
                    borderRadius: '15px',
                    position: 'relative'
                  }}>
                    <img src={attraction.image_url} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px'}} alt='Slider-item'/>
                    <Typography variant='body1' sx={{
                      position: 'absolute',
                      bottom: 15,
                      left: 15,
                      color: '#FFFFFF'
                    }}>
                      {attraction.title}
                    </Typography>
                  </Box>
                </Link>
              </SwiperSlide>)
          }
        </Swiper>
      </Box>
    </Container>
  )
}