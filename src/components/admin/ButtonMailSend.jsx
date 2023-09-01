import React from "react";
import "./styles/ButtonMailSend.css";

function ButtonMailSend() {
  return (
    <div className="containbuttonmailsend">
      <button
        type="submit"
        className="buttonmailsend"
        value="submit"
        style={{ cursor: "pointer" }}
      >
        <h3>Envoyer</h3>
      </button>
    </div>
  );
}
export default ButtonMailSend;
