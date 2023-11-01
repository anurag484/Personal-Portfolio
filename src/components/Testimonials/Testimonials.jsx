import React from "react";
import "./testimonial.css";
import { testimonial_data } from "../../utils/common-utils";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h1 style={{textAlign:"center"}}>Testimonials</h1>
      <Swiper className="container testimonials_container mySwiper" navigation={true} modules={[Navigation]} >
        {testimonial_data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client_avatar">
              <img src={avatar} alt="client avatar1" />
            </div>
            <h5>{name}</h5>
            <small className="client_review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
