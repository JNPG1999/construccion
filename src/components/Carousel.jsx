// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import styled from 'styled-components';

import { proyectosprincipales } from "../data"

export const Carousel = () => {
  return (
    <CssCarousel>
      <Swiper
        pagination={ {
          //   type: 'progressbar',
        } }
        navigation={ true }
        modules={ [ Pagination, Navigation ] }
        className="mySwiper"

      >
        { proyectosprincipales.map( ( { id, img, title } ) =>
          <SwiperSlide key={ id }>
            <img src={ img } alt={ title } />
          </SwiperSlide>
        ) }
      </Swiper>
    </CssCarousel>
  );
}


const CssCarousel = styled.div`

    height: 640px;

.swiper-button-next{

    right: 25px;
    top: 50%;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    text-align: center;

    
    z-index: 10;
    &::before {
      content: '';
      position: absolute;
      background-image: url('/arrow-next.svg');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      /* right: 15%; */
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      /* transform: ; */
      /* top: -5px; */
      width: 1.8rem;
      height: 2rem;
      border-radius: 50%;
      
    }

    &:after {
      display: none;
    }

}

.swiper-button-prev{

   
    /* height: 1rem; */
    left: 25px;
    top: 50%;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    text-align: center;

    
    z-index: 10;
    &::before {
      content: '';
      position: absolute;
      /* background-color: red; */
      background-image: url('/arrow-prev.svg');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      /* right: 15%; */
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      /* top: -5px; */
      width: 1.8rem;
      height: 2rem;
      border-radius: 50%;
      z-index: 2;
      
    }

    &:after {
      display: none;
    }
 
}
    
.swiper {
  width: 100%;
  height: 100%;
  position:relative;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

`