import React from "react";
import { BiLike } from "react-icons/bi";
import { ImageCardType } from "../types";

const ImageCard: React.FC<ImageCardType> = ({ image }) => {
  console.log(image);
  return (
    <article className="image-card">
      <div className="main-image-wrapper">
        <img className="main-image" src={image.urls.small} alt="" />
      </div>
      <div className="user">
        <img src={image.user.profile_image.medium} alt="" />
        <div className="info">
          <span className="name">{image.user.name}</span>
          <span className="username">@{image.user.username}</span>
        </div>
        <div className="like">
          <BiLike />
          <span>{image.user.total_likes}K</span>
        </div>
      </div>
    </article>
  );
};

export default ImageCard;
