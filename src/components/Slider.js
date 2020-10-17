import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

const Slider = (Props) => {

  return (<>
     <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        { Props.data != null ?
                Props.data.map((val,i,arr) => {
                return <SwiperSlide key={i} ><div  >
                    <img className="img-fluid" src={val.img} />
                </div></SwiperSlide>
                })
        : <p>No SLider </p>}
    </Swiper>

  </>)
};
export default Slider;