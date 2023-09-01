import React from "react";
import "./styles/PostCard.css";
import ButtonLikeDislike from "../ButtonLikeDislike";

function PostCard() {
  return (
    <div className="postcard">
      <div className="headercard">
        <h2>Name</h2>
        <p>Category</p>
      </div>
      <div className="contentcard">
        <p>Publication</p>
      </div>
      <div className="footercard">
        <ButtonLikeDislike />
      </div>
    </div>
  );
}

export default PostCard;
