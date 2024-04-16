import React, { useState } from "react";
import { TbArrowsUpDown } from "react-icons/tb";

import "../../styles/summaries/subheader.css";

const Subheader = ({ sortByPublicationDate, sortByNumberOfPredictions }) => {
  const [orderDate, setOrderDate] = useState("asc");
  const [orderPrediction, setOrderPrediction] = useState("asc");

  const handlePublicationDate = () => {
    const newOrder = orderDate === "asc" ? "desc" : "asc";
    setOrderDate(newOrder);
    sortByPublicationDate(orderDate);
  };

  const handlePredictionSort = () => {
    const newOrder = orderPrediction === "asc" ? "desc" : "asc";
    setOrderPrediction(newOrder);
    sortByNumberOfPredictions(newOrder);
  };
  const subheaderBlocks = [
    { block: <div className="source">Source</div> },
    {
      block: (
        <div className="predictions-block">
          Predictions{" "}
          <TbArrowsUpDown
            className="predictions-icon"
            onClick={() => handlePredictionSort()}
          />{" "}
        </div>
      ),
    },
    {
      block: (
        <div className="publish_date">
          Publish date{" "}
          <TbArrowsUpDown
            onClick={() => handlePublicationDate()}
            className="publish-date-icon"
          />{" "}
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

export default Subheader;
