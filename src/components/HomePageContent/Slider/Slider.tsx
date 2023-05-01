import { Link } from 'react-router-dom';

import {Box,
  Typography,
  Container} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay   } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import card from '../../../assets/image/Card.png';
import card1 from '../../../assets/image/Card1.png';
import card2 from '../../../assets/image/Card2.png';
import card3 from '../../../assets/image/Card3.png';
export const Slider = ():JSX.Element => {
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
          // style={{padding: '0 50px'}}
        >
          <SwiperSlide>
            <Box sx={{
              width: 280,
              borderRadius: '10px',
            }}>
              <img src={card} style={{width: '100%'}} alt={card}/>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{
              width: 280,
              borderRadius: '10px',
            }}>
              <img src={card1} style={{width: '100%'}} alt={card}/>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{
              width: 280,
              borderRadius: '10px',
            }}>
              <img src={card2} style={{width: '100%'}} alt={card}/>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{
              width: 280,
              borderRadius: '10px',
            }}>
              <img src={card3} style={{width: '100%'}} alt={card}/>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{
              width: 280,
              borderRadius: '10px',
            }}>
              <img src={card} style={{width: '100%'}} alt={card}/>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{
              width: 280,
              borderRadius: '10px',
            }}>
              <img src={card1} style={{width: '100%'}} alt={card}/>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{
              width: 280,
              borderRadius: '10px',
            }}>
              <img src={card2} style={{width: '100%'}} alt={card}/>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{
              width: 280,
              borderRadius: '10px',
            }}>
              <img src={card3} style={{width: '100%'}} alt={card}/>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Container>
  )
}