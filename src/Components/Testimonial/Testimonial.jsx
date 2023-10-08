import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonial.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div className="m-10">
      <h1 className="text-center text-5xl font-semibold pt-2 pb-4">
        Testimonials
      </h1>
      <p className="text-xs font-medium uppercase text-center font-mono pb-8">
        Happy client about us
      </p>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={true}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
        <TestimonialSlider></TestimonialSlider>
      </Swiper>
    </div>
  );
};

export default Testimonial;
