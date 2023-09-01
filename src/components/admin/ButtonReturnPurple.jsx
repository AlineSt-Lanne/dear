import "./styles/ButtonReturnPurple.css";
import arrow from "../../assets/arrow-return-white.png";

export default function ButtonReturnPurple() {

  return (
    <div className="returnbuttonpurple">
      <button
        className="button-return-purple"
        type="button"
        style={{ cursor: "pointer" }}
      >
        <img
          className="arrow-return-purple"
          src={arrow}
          alt="arrow-return-white"
        />
      </button>
    </div>
  );
}