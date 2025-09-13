import { FC, useEffect, useState } from "react";

import s from "./Slider.module.scss";
import Slide from "./Slide.tsx";
import { slides } from "../store/data.ts";
import { useDevice } from "../context/DeviceContext.tsx";
interface SliderProps {
  active: number;
}

const Slider: FC<SliderProps> = ({ active }) => {
  const { isMobile } = useDevice();

  const [displayIndex, setDisplayIndex] = useState(active);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (active === displayIndex) return;

    setFade(false);

    const timeout = setTimeout(() => {
      setDisplayIndex(active);

      setFade(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [active]);

  return (
    <div className={s.slider}>
      <div className={`${s.slideWrapper} ${fade ? s.fadeIn : s.fadeOut}`}>
        {isMobile && fade && (
          <div className={s.category}>{slides[active].category} </div>
        )}
        {isMobile && fade && <div className={s.line}></div>}
        {fade && <Slide slide={slides[active]} />}
      </div>
    </div>
  );
};

export default Slider;
