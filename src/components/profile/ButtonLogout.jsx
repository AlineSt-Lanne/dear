import React from "react";
import "./styles/UserAccount.css";

function ButtonLogout() {
  return (
    <button
      type="submit"
      className="profile-logout"
      style={{ cursor: "pointer" }}
    >
      Me déconnecter
    </button>
  );
}
export default ButtonLogout;
