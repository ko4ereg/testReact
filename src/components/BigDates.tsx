import { FC, useEffect, useRef, useState } from "react";
import s from "./BigDates.module.scss";
import { dates } from "../store/data.ts";
import getNextTarget from "../utils/getNextTarget.ts";

interface BigDatesProps {
  active: number;
}

const BigDates: FC<BigDatesProps> = ({ active }) => {
  const [step, setStep] = useState(active);
  const points = dates.length;

 
  const [displayStart, setDisplayStart] = useState(dates[active].start);
  const [displayEnd, setDisplayEnd] = useState(dates[active].end);

 
  const stepIntervalRef = useRef<number | null>(null);
  const yearsIntervalRef = useRef<number | null>(null);

 
  useEffect(() => {
    if (active === step) return;

 
    if (stepIntervalRef.current) {
      clearInterval(stepIntervalRef.current);
      stepIntervalRef.current = null;
    }

    stepIntervalRef.current = window.setInterval(() => {
      setStep((curr) => {
        if (curr === active) {
          if (stepIntervalRef.current) {
            clearInterval(stepIntervalRef.current);
            stepIntervalRef.current = null;
          }
          return curr;
        }
        const next = getNextTarget(curr, active, points);
        return next;
      });
    }, 200);

    return () => {
      if (stepIntervalRef.current) {
        clearInterval(stepIntervalRef.current);
        stepIntervalRef.current = null;
      }
    };
  }, [active, points, step]);

 
  useEffect(() => {
    const targetStart = dates[step].start;
    const targetEnd = dates[step].end;

   
    if (displayStart === targetStart && displayEnd === targetEnd) return;
 
    if (yearsIntervalRef.current) {
      clearInterval(yearsIntervalRef.current);
      yearsIntervalRef.current = null;
    }

 
    const maxSteps = Math.max(
      Math.abs(targetStart - displayStart),
      Math.abs(targetEnd - displayEnd),
      1
    );

    
    const totalDuration = 700;
    
    const tick = Math.max(20, Math.floor(totalDuration / maxSteps));

    yearsIntervalRef.current = window.setInterval(() => {
      setDisplayStart((curr) => {
        if (curr === targetStart) return curr;
        return curr + Math.sign(targetStart - curr);
      });
      setDisplayEnd((curr) => {
        if (curr === targetEnd) return curr;
        return curr + Math.sign(targetEnd - curr);
      });
    }, tick);

    return () => {
      if (yearsIntervalRef.current) {
        clearInterval(yearsIntervalRef.current);
        yearsIntervalRef.current = null;
      }
    };
  
  }, [step]);

 
  useEffect(() => {
    const targetStart = dates[step].start;
    const targetEnd = dates[step].end;

    if (displayStart === targetStart && displayEnd === targetEnd) {
      if (yearsIntervalRef.current) {
        clearInterval(yearsIntervalRef.current);
        yearsIntervalRef.current = null;
      }
    }
  }, [displayStart, displayEnd, step]);

 
  useEffect(() => {
    return () => {
      if (stepIntervalRef.current) clearInterval(stepIntervalRef.current);
      if (yearsIntervalRef.current) clearInterval(yearsIntervalRef.current);
    };
  }, []);

  return (
    <div className={s.dates}>
      <div className={s.startDate}>{displayStart}</div>
      <div className={s.endDate}>{displayEnd}</div>
    </div>
  );
};

export default BigDates;
