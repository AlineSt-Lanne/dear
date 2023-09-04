import React from "react";
import "./styles/PostCardAdmin.css"; 
import iconcomment from "../../assets/icon-comment.png";
import ButtonLikeDislike from "../post/ButtonLikeDislike";

function PostCardAdmin() {
  return (
    <div className="postcardadmin">
      <div className="headercardadmin">
        <h2>PowerAnanas35</h2>
        <p>Amour</p>
      </div>
      <div className="contentcardadmin">
        <p>Je ne sais pas comment parler de sexualité avec mes ami(e)s... Je ne sais pas pourquoi ça me gêne autant...</p>
      </div>
      <div className="footercard">
        <img className="icon-comment" src={iconcomment} alt="icon-comment" />
        <ButtonLikeDislike />
      </div>
    </div>
  );
}

export default PostCardAdmin;
