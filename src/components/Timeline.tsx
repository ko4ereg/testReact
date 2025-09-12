import { FC, useState } from "react";
import s from "./Timeline.module.scss";

import Circle from "./Circle.tsx";
import BigDates from "./BigDates.tsx";
import PaginationButtons from "./PaginationButtons.tsx";

const Timeline: FC = () => {
  const [active, setActive] = useState(0);
  const points = 6;

  return (
    <div className={s.timeline}>
      <div className={s.backgroundLines}>
        <div className={s.verticalLine}></div>
        <div className={s.horizontalLine}></div>
      </div>
      <div className={s.title}>
        <div className={s.line}></div>
        Исторические даты
      </div>

      <Circle points={points} active={active} onChange={setActive} />

      <BigDates active={active} />

      <PaginationButtons active={active} points={points} onChange={setActive} />
    </div>
  );
};

export default Timeline;
