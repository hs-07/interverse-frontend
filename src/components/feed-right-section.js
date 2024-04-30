import React from "react";

import FeedRightSectionColumns from "./feed-right-section-columns";

const feedrightSection = ({ topPredictorsData }) => {
  return (
    <div
      className="right-section"
      style={{
        width: "30%",
        overflowY: "auto",
        height: "100%",
        width: "100%",
        borderRadius: "10px",
        padding: "0 16px 0 0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="right-heading"
        style={{
          padding: "16px 0px ",
          top: "0",
        }}
      >
        <h4>Top Predictors</h4>
      </div>
      <div className="bg-[#282828] flex flex-col rounded-lg">
        {topPredictorsData.map((predictor, index) => (
          <FeedRightSectionColumns
            key={index}
            rank={index + 1}
            name={`${predictor.first_name}  ${" "}  ${predictor.last_name}`}
            accuracy={predictor.prediction_accuracy}
            imgUrl={predictor.image_url}
            userId={predictor.user_id}
          />
        ))}
      </div>
    </div>
  );
};

export default feedrightSection;
