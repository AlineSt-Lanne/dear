import React from "react";
import "./styles/ButtonContinue.css";

function ButtonContinue({ handleSubmit }) {
  return (
    <button
      type="submit"
      className="buttoncontinue"
      style={{ cursor: "pointer" }}
    >
      <h3>CONTINUE</h3>
    </button>
  );
}

export default ButtonContinue;
