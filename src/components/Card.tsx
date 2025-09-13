import { FC } from "react";
import s from "./Card.module.scss";
import { SlideItem } from "../store/data";

const Card: FC<SlideItem> = ({ year, event }) => {
  return (
    <div className={s.card}>
      <div className={s.title}>{year}</div>
      <div className={s.event}>{event}</div>
    </div>
  );
};

export default Card;
