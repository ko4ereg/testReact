import { FC, useEffect, useRef, useState } from "react";

import s from "./Slider.module.scss";
import Slide from "./Slide.tsx";
import { slides } from "../store/data.ts";
interface SliderProps {
  active: number;
}

const Slider: FC<SliderProps> = ({ active }) => {
  const [displayIndex, setDisplayIndex] = useState(active);
  const [fade, setFade] = useState(true);

  useEffect(() => {
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
        <Slide key={displayIndex} slide={slides[active]} />
      </div>
    </div>
  );
};

export default Slider;
