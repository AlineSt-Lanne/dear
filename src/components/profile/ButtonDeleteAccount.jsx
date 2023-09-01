import React from "react";
import "./styles/ButtonDeleteAccount.css";

function ButtonDeleteAccount() {
  return (
    <div>
      <button
        type="button"
        className="profile-delete"
        style={{ cursor: "pointer" }}
      >
        Supprimer mon profil
      </button>
    </div>
  );
}
export default ButtonDeleteAccount;
