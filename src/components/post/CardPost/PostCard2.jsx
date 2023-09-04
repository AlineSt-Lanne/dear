import React from "react";
import "./styles/PostCard2.css";
import ButtonLikeDislike from "../ButtonLikeDislike";

function PostCard2() {
  return (
    <div className="postcard2">
      <div className="headercard2">
        <h2>AmazingKiwi19</h2>
        <p>Bien-être sexuel</p>
      </div>
      <div className="contentcard2">
        <p>Les gens, vous avez des idées d'un super bon sextoys pour les pénis. C'est le premier que je voudrais m'offir mais j'hésite. HELP</p>
      </div>
      <div className="footercard">
        <ButtonLikeDislike />
      </div>
    </div>
  );
}

export default PostCard2;
