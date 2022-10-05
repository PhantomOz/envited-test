import React from "react";
import "./Card.css";
const Card = ({ icon, title, sub }) => {
  return (
    <div className="card">
      <div className="card_icon">
        <img src={icon} alt="calendar" />
      </div>
      <div className="card_info">
        <p className="card_info_title">{title}</p>
        <p className="card_info_sub">{sub}</p>
      </div>
    </div>
  );
};

export default Card;
