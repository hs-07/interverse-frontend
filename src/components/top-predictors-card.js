import React from "react";
import { Image } from "react-bootstrap";

import "../styles/top-predictors-card.css";

const topPredictorsCard = () => {
  return (
    <div className="tp-card">
      <div className="tp-card-image">
        <Image
          src="/elon_big.svg"
          style={{
            borderRadius: "10px",
          }}
        />
      </div>
      <div className="tp-card-header">
        <h4>Elon Musk</h4>
        <h6>29 Predictions</h6>
      </div>
      <div className="tp-card-footer">
        <p>
          <span>#1</span> Ranked
        </p>
        <button
          style={{
            backgroundColor: "#4B6CC2",
            border: "none",
            borderRadius: "25px",
            fontSize: "12px",
            padding: "10px 24px",
            color: "#fff",
          }}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default topPredictorsCard;
