"use client"

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Mousewheel, Pagination } from 'swiper/modules';

SwiperCore.use([Mousewheel, Pagination]);

const swiperOptions = {
  direction: 'vertical',
  slidesPerView: 1,
  mousewheel: {
    sensitivity: 1,
    releaseOnEdges: true,
  },
  speed: 1000,
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
    type: 'bullets',
  },
  className: "h-screen",
};

const SwiperComponent = ({ children }) => {
  return (
    <Swiper {...swiperOptions}>
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
      {/* <div className="swiper-pagination"></div> */}
    </Swiper>
  );
};



export default SwiperComponent;
export { SwiperSlide };