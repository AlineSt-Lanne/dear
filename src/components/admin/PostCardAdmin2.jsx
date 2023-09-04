import React from "react";
import "./styles/PostCardAdmin2.css";
import ButtonLikeDislike from "../post/ButtonLikeDislike";

function PostCardAdmin2() {
  return (
    <div className="postcardadmin2">
      <div className="headercardadmin2">
        <h2>AmazingKiwi19</h2>
        <p>Bien-être sexuel</p>
      </div>
      <div className="contentcardadmin2">
        <p>Les gens, vous avez des idées d'un super bon sextoys pour les pénis. C'est le premier que je voudrais m'offir mais j'hésite. HELP</p>
      </div>
      <div className="footercard">
        <ButtonLikeDislike />
      </div>
    </div>
  );
}

export default PostCardAdmin2;
