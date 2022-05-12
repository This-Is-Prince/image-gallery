import React from "react";
import { ImageCardProps } from "../../types";
import { BiLike } from "react-icons/bi";

const ImageCardPopUp: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <section className="popup-window">
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
    </section>
  );
};

export default ImageCardPopUp;
