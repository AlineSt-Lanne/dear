import React from "react";
import ScrollButton from "../home/ScrollButton";
import PostCardAdmin from "../admin/PostCardAdmin";
import PostCardAdmin2 from "../admin/PostCardAdmin2";
import PostCardAdmin3 from "../admin/PostCardAdmin3";
import "./styles/FilActu.css";

function FilActu() {
  return (
    <div className="contain-filactu">
      <div className="title-filactu">
        <h1 className="title-fil-actu">Le fil d'actualités</h1>
      </div>
      <div className="filactu-posts">
        <PostCardAdmin />
        <PostCardAdmin2 />
        <PostCardAdmin3 />
        <ScrollButton />
      </div>
    </div>
  );
}

export default FilActu;
