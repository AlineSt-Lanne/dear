import React from "react";
import "./styles/PostCard3.css";
import ButtonLikeDislike from "../ButtonLikeDislike";

function PostCard3() {
  return (
    <div className="postcard3">
      <div className="headercard3">
        <h2>GreatPepper5</h2>
        <p>Témoignages</p>
      </div>
      <div className="contentcard3">
        <p>Ça fait tellement du bien de voir que de plus en plus de personne utilisent "lel"! Vous pouvez pas savoir le bien que ça fait! Merci!!</p>
      </div>
      <div className="footercard">
        <ButtonLikeDislike />
      </div>
    </div>
  );
}

export default PostCard3;
