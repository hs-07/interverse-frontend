import React from "react";
import { Image } from "react-bootstrap";

import "../styles/trending-prediction-card.css";

const trendingPredictionCard = ({ news, imgUrl, category, source, date }) => {
  return (
    <div className="trending-card">
      <div className="trending-card-header">
        <p>{source}</p>
        <span>{category}</span>
        <span>Made on : {date}</span>
      </div>
      <div className="trending-card-body">
        <h5>{news}</h5>
        <Image src={imgUrl} />
      </div>
    </div>
  );
};

export default trendingPredictionCard;
