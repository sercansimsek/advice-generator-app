import "./adviceCard.scss";
import seperator from "/src/assets/images/pattern-divider-mobile.svg";
import dice from "/src/assets/images/icon-dice.svg";

export const AdviceCard = () => {
  return (
    <div className="Card">
      <span className="Card-index">Advice #117</span>
      <p className="Card-text">
        “It is easy to sit up and take notice, what's difficult is getting up
        and taking action.”
      </p>
      <img className="Card-seperator" src={seperator} alt="seperator" />
      <button className="Card-btn">
        <img src={dice} alt="dice" />
      </button>
    </div>
  );
};
