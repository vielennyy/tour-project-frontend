import React from "react";

import {Box} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay   } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export const AccommodationSlider = ({image_urls}:any):JSX.Element => {
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
          {image_urls.map((img:string, index: any) =>
            <SwiperSlide key={index}>
              <img src={img} alt='Accommodation' style={{height: 400, width: 600, borderRadius: '15px', objectFit: 'cover'}}/>
            </SwiperSlide>
          )}
        </Swiper>
      </Box>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        columnGap: '30px',
        rowGap: '24px',
        maxHeight: 400
      }}>

        {image_urls.slice(0, 4).map((img:string) =>
            <img src={img} alt='Accommodation' style={{height: 187, width: 247, borderRadius: '15px', objectFit: 'cover'}}/>
        )}
      </Box>
    </Box>
  )
}