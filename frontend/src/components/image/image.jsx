import React from "react";
import "./image.css";
import { Images } from "../../data";

export const Image = () => {
  return (
    <div className="image-container">
      <div className="heading">Images of Events</div>
      <div className="image-wrapper">
         

        {Images.map((img, idx) => (
          <div className="image-card" key={idx} >
          <img src={img} />
        </div>
        ))}


        {/*
        <div className="image-card">
          <img src="/images/image1.jpg" />
        </div>
        <div className="image-card">
          <img src="/images/image3.jpg" />
        </div>
        <div className="image-card">
          <img src="/images/image2.jpg" />
        </div>
      */}
      </div>
    </div>
  );
};
