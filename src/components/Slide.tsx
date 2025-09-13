import { FC, useRef, useState } from "react";
import s from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideGroup } from "../store/data";
import { FreeMode, Navigation } from "swiper/modules";
import Card from "./Card.tsx";
import { useDevice } from "../context/DeviceContext.tsx";

const Slide: FC<{ slide: SlideGroup }> = ({ slide }) => {
  const { isMobile } = useDevice();
  const swiperRef = useRef<any>(null);
  const [active, setActive] = useState(0);

  const slidesPerView = 3;
  const totalSlides = slide.slides.length;

  return (
    <div style={{ cursor: "grab", height: "100%" }}>
      {!isMobile && active !== 0 && (
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

      {!isMobile && active < totalSlides - slidesPerView && (
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
        modules={[Navigation, FreeMode]}
        className="mySwiper"
        style={{ position: "relative" }}
        initialSlide={0}
        spaceBetween={isMobile ? 25 : 80}
        slidesPerView={isMobile ? 2 : slidesPerView}
        onSlideChange={(swiper) => setActive(swiper.activeIndex)}
        watchSlidesProgress={isMobile}
        freeMode={true}
        onProgress={(swiper) => {
          const swiperConst = swiper as any;
          if (!isMobile) return;

          const lastVisibleIndex =
            swiper.slides.length - swiperConst.params.slidesPerView;
          swiper.slides.forEach((slideEl, index) => {
            const slide = slideEl as any;
            let opacity = 1;
            if (swiper.activeIndex < lastVisibleIndex) {
              const progress = slide.progress;

              opacity = Math.max(0.5, 1 - Math.abs(progress) * 0.5);
            }
            slideEl.style.opacity = `${opacity}`;
          });
        }}
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
