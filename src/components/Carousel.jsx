// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import styled from 'styled-components';

import {proyectosprincipales} from "../data"

export const Carousel = () => {
  return (
    <CssCarousel>
      <Swiper
        pagination={{
        //   type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"

      >
        {proyectosprincipales.map(({id,img,title})=>
            <SwiperSlide key={id}>
                <img src={img} alt={title}/>
            </SwiperSlide>
        )}
      </Swiper>
    </CssCarousel>
  );
}


const CssCarousel = styled.div`

    height: 640px;

.swiper-button-next{

    background-image: url('/arrow-next.svg');
    color: red;
    position: absolute;

}

.swiper-button-prev{

    position: absolute;
 
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