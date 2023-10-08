import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import SwiperSlider from "./SwiperSlider";
import { useEffect, useState } from "react";

const Banner = () => {
  const [slides, setSlides] = useState([null]);

  useEffect(() => {
    fetch("./slider.json")
      .then((res) => res.json())
      .then((data) => setSlides(data));
  }, []);
console.log(slides)
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative mx-3 lg:mx-0 overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center h-[60vh]"
              style={{
                backgroundImage: `url('${slide?.image}')`,
              }}
            >
              <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <div className="flex h-full items-center justify-center">
                  <div className="text-white">
                    <h4 className="mb-6 text-base md:text-xl font-medium md:font-semibold italic">{slide?.motto}</h4>
                    <h2 className="mb-4 text-2xl md:text-6xl font-medium md:font-semibold text-center mx-auto w-2/3">{slide?.title}</h2>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlider></SwiperSlider>
      </Swiper>
    </div>
  );
};

export default Banner;
