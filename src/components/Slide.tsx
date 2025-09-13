import { FC, useRef, useState } from "react";
import s from "./Slider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { SlideGroup } from "../store/data";
import { Navigation } from "swiper/modules";
import Card from "./Card.tsx";

const Slide: FC<{ slide: SlideGroup }> = ({ slide }) => {
  const swiperRef = useRef<any>(null);
  const [active, setActive] = useState(0);

  const slidesPerView = 3;
  const totalSlides = slide.slides.length;

  return (
    <div style={{ cursor: "grab" }}>
      {active !== 0 && (
        <button
          className={`${s.button} ${s.back}`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            style={{ transform: "rotate(180deg)" }}
          >
            <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
          </svg>
        </button>
      )}

      {active < totalSlides - slidesPerView && (
        <button
          className={`${s.button} ${s.forward}`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
          >
            <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
          </svg>
        </button>
      )}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={false}
        modules={[Navigation]}
        className="mySwiper"
        style={{ position: "relative" }}
        initialSlide={0}
        spaceBetween={80}
        slidesPerView={slidesPerView}
        onSlideChange={(swiper) => setActive(swiper.activeIndex)}
      >
        {slide.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Card event={slide.event} year={slide.year} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;
