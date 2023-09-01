import React from "react";
import "./styles/PostCardAdmin.css";
import ButtonLikeDislike from "../post/ButtonLikeDislike";

function PostCardAdmin() {
  return (
    <div className="postcard">
      <div className="headercard">
        <h2>
          <span className="dateText">date</span>
          name
        </h2>
        <p>category</p>
      </div>
      <div className="contentcard">
        <p>publication</p>
      </div>
      <div className="footercard">
        <ButtonLikeDislike />
      </div>
    </div>
  );
}
export default PostCardAdmin;
