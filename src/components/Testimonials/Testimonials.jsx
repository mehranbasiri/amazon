import React from "react";
import "./Testimonials.css";
import Hero from "../../assets/testimonialHero.png";

import { TestimonialsData } from "../../data/testimonials";
import { SwiperSlide, Swiper } from "swiper/react";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="wrapper">
        <div className="testimonail-container">
          <span>Top Rated</span>
          <span>
            seedily say has suitable disposal and boy.Exercise joy man children
            rejoiced
          </span>
        </div>
        <div>
          <img src={Hero} alt="" />
        </div>

        <div className="testimonail-container">
          <span>100k</span>
          <span>Happy Customers with us</span>
        </div>
      </div>
      <div className="reviews">Reviews</div>
      <div className="testimonail-carousal">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className="tcarousal"
          breakpoints={{
            856: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {TestimonialsData.map((testimonail, i) => (
            <SwiperSlide>
              <div className="testimonial">
                <img src={testimonail.image} alt="" />
                <span>{testimonail.comment}</span>
                <hr />
                <span>{testimonail.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
