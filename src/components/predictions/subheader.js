import React from "react";
import "../../styles/predictions/subheader.css";
import StatusPopper from "./status-popper/index";
import TopicPopper from "./topics-popper/index";

const subheader = () => {
  const subheaderBlocks = [
    {
      block: (
        <div className="prediction-status">
          <span className="">Status</span>
          <StatusPopper />
        </div>
      ),
    },
    {
      block: (
        <div className="prediction-forecater">
          <span className="">Forecaster</span>
        </div>
      ),
    },
    {
      block: (
        <div className="prediction-topic">
          <span className="">Topic</span>
          <TopicPopper />
        </div>
      ),
    },
    {
      block: (
        <div>
          <span className="prediction-span">Prediction</span>
        </div>
      ),
    },
    {
      block: (
        <div>
          <span className="prediction-market">Market</span>
        </div>
      ),
    },
  ];
  return (
    <div className="predictions-subheader">
      {subheaderBlocks.map((item, index) => {
        return (
          <div key={index} className="subheader-block">
            {item.block}
          </div>
        );
      })}
    </div>
  );
};

export default subheader;
