import { FC } from "react";
import s from "./PaginationButtons.module.scss";

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
  const handleClickBack = () => {
    if (active === 0) return;
    onChange(active - 1);
  };

  const handleClickForward = () => {
    if (active === points - 1) return;
    onChange(active + 1);
  };

  return (
    <div className={s.pagination}>
      <div className={s.page}>
        0{active + 1} / 0{points}
      </div>
      <div className={s.buttons}>
        <button
          onClick={handleClickBack}
          className={`${s.button} ${active === 0 ? s.disabled : ""}`}
        >
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
        </button>
        <button
          onClick={handleClickForward}
          className={`${s.button} ${active === points - 1 ? s.disabled : ""}`}
        >
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
        </button>
      </div>
    </div>
  );
};

export default PaginationButtons;
