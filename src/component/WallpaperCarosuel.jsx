import React from "react";
import image from "../asset/background.jpg";
import "./WallpaperCarosuel.css";

const WallpaperCarosuel = () => {
  return (
    <div className="carousel-container">
      <div className="image-container">
        <img src={image} alt="Wallpaper" />
        <div className="image-fade"></div>
      </div>
    </div>
  );
};
export default WallpaperCarosuel;
