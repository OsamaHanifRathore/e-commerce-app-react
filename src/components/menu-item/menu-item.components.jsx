import React from "react";
import "./menu-item.styles.scss";

export const MenuItem = ({ title, imgUrl, size }) => {
  return (
    <div
      className={`${size} menu-item`}>
      <div style={{
        backgroundImage: `url(${imgUrl})`
      }}
        className='background-image'
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="sub-title">shop now</span>
      </div>
    </div>
  );
};
