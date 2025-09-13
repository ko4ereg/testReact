import { FC } from "react";
import s from "./PaginationButtons.module.scss";
import { useDevice } from "../context/DeviceContext.tsx";

interface PaginationButtonsProps {
  active: number;
  points: number;
  onChange: Function;
}

const PaginationButtons: FC<PaginationButtonsProps> = ({
  active,
  points,
  onChange,
}) => {
  const { isMobile } = useDevice();

  const handleClickBack = () => {
    if (active === 0) return;
    onChange(active - 1);
  };

  const handleClickForward = () => {
    if (active === points - 1) return;
    onChange(active + 1);
  };

  return (
    <div className={s.paginationWrapper}>
      <div className={s.pagination}>
        <div className={s.page}>
          0{active + 1} / 0{points}
        </div>
        <div className={s.buttons}>
          <button
            onClick={handleClickBack}
            className={`${s.button} ${active === 0 ? s.disabled : ""}`}
          >
            {isMobile ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="8"
                viewBox="0 0 6 8"
                fill="none"
              >
                <path
                  d="M4.7489 1.04178L1.6239 4.16678L4.7489 7.29178"
                  stroke="#42567A"
                  stroke-width="2"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="14"
                viewBox="0 0 10 14"
                fill="none"
              >
                <path
                  d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
                  stroke="#42567A"
                  stroke-width="2"
                />
              </svg>
            )}
          </button>
          <button
            onClick={handleClickForward}
            className={`${s.button} ${active === points - 1 ? s.disabled : ""}`}
          >
            {isMobile ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="8"
                viewBox="0 0 7 8"
                fill="none"
              >
                <path
                  d="M1.58386 1.04178L4.70886 4.16678L1.58386 7.29178"
                  stroke="#42567A"
                  stroke-width="2"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="14"
                viewBox="0 0 10 14"
                fill="none"
              >
                <path
                  d="M1.50012 0.750001L7.75012 7L1.50012 13.25"
                  stroke="#42567A"
                  stroke-width="2"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={s.dots}>
        {Array.from({ length: points }).map((_, index) => (
          <div
            onClick={() => onChange(index)}
            key={index}
            className={`${s.dot} ${index === active ? s.active : ""}`}
          >
            {" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaginationButtons;
