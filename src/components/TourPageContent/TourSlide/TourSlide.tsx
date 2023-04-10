import React from "react";

import {Box} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay   } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import slide1 from "../../../assets/image/accommodations/slide1.png";
import slide2 from "../../../assets/image/accommodations/slide2.png";
import slide3 from "../../../assets/image/accommodations/slide3.png";
import slide4 from "../../../assets/image/accommodations/slide4.png";
import slide5 from "../../../assets/image/accommodations/slide5.png";

export const TourSlide = ():JSX.Element => {
  return(
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '30px',
      marginTop: 4
    }}>
      <Box sx={{
        maxHeight: 450,
        maxWidth: 600
      }}>
        <Swiper
          modules={[Navigation, A11y, Autoplay ]}
          slidesPerView={1}
          navigation
          autoplay={{delay: 4000}}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <img src={slide1} alt={slide1} style={{height: '100%', width: '100%'}}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt={slide2} style={{height: '100%', width: '100%'}}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt={slide3} style={{height: '100%', width: '100%'}}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt={slide4} style={{height: '100%', width: '100%'}}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt={slide5} style={{height: '100%', width: '100%'}}/>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        columnGap: '30px',
        rowGap: '24px',
        maxHeight: 400
      }}>

        <img src={slide2} alt={slide2} style={{height: '100%', width: '100%'}}/>
        <img src={slide3} alt={slide3} style={{height: '100%', width: '100%'}}/>
        <img src={slide4} alt={slide4} style={{height: '100%', width: '100%'}}/>
        <img src={slide5} alt={slide5} style={{height: '100%', width: '100%'}}/>
      </Box>
    </Box>
  )
}