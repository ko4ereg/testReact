import { FC, useState } from "react";
import s from "./Timeline.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import Circle from "./Circle.tsx";
import BigDates from "./BigDates.tsx";
import PaginationButtons from "./PaginationButtons.tsx";
import Slider from "./Slider.tsx";
import { useDevice } from "../context/DeviceContext.tsx";

const Timeline: FC = () => {
  const [active, setActive] = useState(0);
  const { isMobile } = useDevice();
  const points = 6;

  return (
    <div className={s.timeline}>
      {!isMobile && (
        <div className={s.backgroundLines}>
          <div className={s.verticalLine}></div>
          <div className={s.horizontalLine}></div>
        </div>
      )}
      <div className={s.title}>
        <div className={s.line}></div>
        Исторические даты
      </div>

      {!isMobile && (
        <Circle points={points} active={active} onChange={setActive} />
      )}

      <BigDates active={active} />

      <PaginationButtons active={active} points={points} onChange={setActive} />
      <Slider active={active}></Slider>
    </div>
  );
};

export default Timeline;
