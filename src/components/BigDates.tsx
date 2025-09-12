import { FC } from "react";
import s from "./BigDates.module.scss";
import { dates } from "../store/data.ts";
import { useEffect, useState } from "react";
import getNextTarget from "../utils/getNextTarget.ts";

interface BigDatesProps {
  active: number;
}

const BigDates: FC<BigDatesProps> = ({ active }) => {
  const [step, setStep] = useState(active);
  const points = dates.length;

  useEffect(() => {
    if (active === step) return;

    const interval = setInterval(() => {
      setStep((curr) => {
        if (curr === active) {
          clearInterval(interval);
          return curr;
        }
        const next = getNextTarget(curr, active, points);
        return next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [active, points, step]);

  return (
    <div className={s.dates}>
      <div className={s.startDate}>{dates[step].start}</div>
      <div className={s.endDate}>{dates[step].end}</div>
    </div>
  );
};

export default BigDates;
