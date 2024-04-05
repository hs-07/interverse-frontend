import React from "react";
import "../../styles/predictions/subheader.css";

const subheader = () => {
  const subheaderBlocks = [
    {
      block: (
        <div className="item">
          <span className="">Status</span>
          <img src={"/Filter.png"} alt="fliter" height={100} width={100} />
        </div>
      ),
    },
    {
      block: (
        <div>
          <span className="">Forecaster</span>
        </div>
      ),
    },
    {
      block: (
        <div className="item">
          <span className="">Topic</span>
          <img src={"/Filter.png"} alt="fliter" height={100} width={100} />
        </div>
      ),
    },
    {
      block: (
        <div>
          <span className="">Prediction</span>
        </div>
      ),
    },
    {
      block: (
        <div>
          <span className="">Market</span>
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
