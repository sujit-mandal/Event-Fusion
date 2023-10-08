import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useSwiper } from "swiper/react";
const TestimonialSlider = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-center gap-2 mt-3  ">
      <button
        className="bg-[#FD60A2] text-white text-xl rounded-full cursor-pointer px-3 py-3 "
        onClick={() => swiper.slidePrev()}
      >
        <RiArrowLeftSLine></RiArrowLeftSLine>
      </button>
      <button
        className="bg-[#FD60A2] text-white text-xl rounded-full cursor-pointer px-3 py-3  "
        onClick={() => swiper.slideNext()}
      >
        <RiArrowRightSLine></RiArrowRightSLine>
      </button>
    </div>
  );
};

export default TestimonialSlider;
