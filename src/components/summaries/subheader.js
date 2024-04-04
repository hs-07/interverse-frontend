import React from "react";
import { TbArrowsUpDown } from "react-icons/tb";
import "../../styles/summaries/subheader.css";

const subheader = () => {
  const subheaderBlocks = [
    { block: <div>Source</div> },
    {
      block: (
        <div>
          Predictions <TbArrowsUpDown />{" "}
        </div>
      ),
    },
    {
      block: (
        <div>
          Publish date <TbArrowsUpDown />{" "}
        </div>
      ),
    },
  ];
  return (
    <div className="summaries-subheader">
      {subheaderBlocks.map((item, index) => (
        <div key={index} className="subheader-block">
          {item.block}
        </div>
      ))}
    </div>
  );
};

export default subheader;
