import React from "react";
import "./styles/PostCard.css"; 
import iconcomment from "../../../assets/icon-comment.png";
import ButtonLikeDislike from "../ButtonLikeDislike";

function PostCard() {
  return (
    <div className="postcard">
      <div className="headercard">
        <h2>PowerAnanas35</h2>
        <p>Amour</p>
      </div>
      <div className="contentcard">
        <p>Je ne sais pas comment parler de sexualité avec mes ami(e)s... Je ne sais pas pourquoi ça me gêne autant...</p>
      </div>
      <div className="footercard">
        <img className="icon-comment" src={iconcomment} alt="icon-comment" />
        <ButtonLikeDislike />
      </div>
    </div>
  );
}

export default PostCard;
