import React from "react";
import { Image } from "react-bootstrap";

import "../styles/trending-prediction-card.css";

const trendingPredictionCard = ({ news }) => {
  return (
    <div className="trending-card">
      {/* <div className="trending-card-header">
        <p>Business Insider</p>
        <span>Economy</span>
        <span>Made on 24 Oct 2024</span>
      </div> */}
      <div className="trending-card-body">
        <a href="">
          <h5>{news}</h5>
        </a>
        {/* <Image src="/elon-md.svg" /> */}
      </div>
    </div>
  );
};

export default trendingPredictionCard;
