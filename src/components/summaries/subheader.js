import React from "react";
import { TbArrowsUpDown } from "react-icons/tb";
import "../../styles/summaries/subheader.css";

const subheader = () => {
  const subheaderBlocks = [
    { block: <div className="source">Source</div> },
    {
      block: (
        <div className="predictions-block">
          Predictions <TbArrowsUpDown />{" "}
        </div>
      ),
    },
    {
      block: (
        <div className="publish_date">
          Publish date <TbArrowsUpDown />{" "}
        </div>
      ),
    },
  ];
  return (
    <div className="summaries-subheader">
      {subheaderBlocks.map((item, index) => (
        <div key={index} className="block">
          {item.block}
        </div>
      ))}
    </div>
  );
};

export default subheader;
