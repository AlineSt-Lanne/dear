import React from "react";
import "./styles/PostCardAdmin3.css";
import ButtonLikeDislike from "../post/ButtonLikeDislike";

function PostCardAdmin3() {
  return (
    <div className="postcardadmin3">
      <div className="headercardadmin3">
        <h2>GreatPepper5</h2>
        <p>Témoignages</p>
      </div>
      <div className="contentcardadmin3">
        <p>Ça fait tellement du bien de voir que de plus en plus de personne utilisent "lel"! Vous pouvez pas savoir le bien que ça fait! Merci!!</p>
      </div>
      <div className="footercard">
        <ButtonLikeDislike />
      </div>
    </div>
  );
}

export default PostCardAdmin3;
