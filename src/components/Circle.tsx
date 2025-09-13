import { FC, useEffect, useState } from "react";
import s from "./Circle.module.scss";

import getNextTarget from "../utils/getNextTarget.ts";
import { slides } from "../store/data.ts";

interface CircleProps {
  points: number;
  active: number;
  onChange: Function;
}

const Circle: FC<CircleProps> = ({
  points = 6,
  active: externalActive,
  onChange,
}) => {
  const [activeStep, setActiveStep] = useState(externalActive);
  const [hover, setHover] = useState<null | number>(null);
  const [showCategory, setShowCategory] = useState(false);

  useEffect(() => {
    setShowCategory(false); // скрыть категорию во время анимации
  }, [externalActive]);

  const handleSetShow = () => {
    if (activeStep === externalActive) {
      setShowCategory(true);
    }
  };

  useEffect(() => {
    if (externalActive === activeStep) return;

    const interval = setInterval(() => {
      setActiveStep((curr) => {
        if (curr === externalActive) {
          clearInterval(interval);

          return curr;
        }
        const next = getNextTarget(curr, externalActive, points);
        return next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [externalActive, points, activeStep]);

  const radius = 266;
  const angleStep = 360 / points;
  const baseOffset = -60;

  const rotation = baseOffset - angleStep * activeStep;

  return (
    <div className={s.circleWrapper}>
      <div
        className={s.circleInner}
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.5s ease-in-out",
        }}
        onTransitionEnd={handleSetShow}
      >
        {Array.from({ length: points }).map((_, i) => {
          const angle = angleStep * i;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          const isActive = i === externalActive || i === hover;

          return (
            <div
              key={i}
              className={`${s.dot} ${isActive ? s.active : ""}`}
              style={{
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              }}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              onClick={() => onChange(i)}
            >
              {isActive && (
                <div
                  style={{
                    display: "flex",

                    transform: `rotate(${-rotation}deg)`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  {i + 1}
                  {i === externalActive && showCategory && (
                    <div
                      className={s.category}
                      style={{
                        marginLeft: "50px",
                        whiteSpace: "nowrap",
                        opacity: 0,
                      }}
                    >
                      {slides[i].category}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Circle;
