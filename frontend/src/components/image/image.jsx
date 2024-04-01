import React from "react";
import "./image.css";
import { Images } from "../../data";

export const Image = () => {
  return (
    <div className="image-container">
     
      <div className="image-wrapper">
        {Images.map(({ img, name }, idx) => (
          <div className="image-sub-wrapper">
            <div className="image-card" key={idx}>
              <img src={img} alt={name} />
            </div>
            <div className="image-name">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
