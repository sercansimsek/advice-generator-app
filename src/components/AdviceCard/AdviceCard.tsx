import "./adviceCard.scss";
import seperator from "/src/assets/images/pattern-divider-mobile.svg";
import dice from "/src/assets/images/icon-dice.svg";
import type { Advice } from "../../App";

type Props = {
  advice: Advice;
  onRefresh: () => void;
};

export const AdviceCard = ({ advice, onRefresh }: Props) => {
  return (
    <div className="Card">
      <span className="Card-index">{`Advice #${advice.id}`}</span>
      <p className="Card-text">{advice.advice}</p>
      <img className="Card-separator" src={seperator} alt="seperator" />
      <button
        className="Card-btn"
        onClick={onRefresh}
        aria-label="Get new advice"
      >
        <img src={dice} alt="" />
      </button>
    </div>
  );
};
