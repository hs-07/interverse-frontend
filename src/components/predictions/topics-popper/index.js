import React, { useState } from "react";
import Popper from "../../common/popover";
import "./style.css";

const TopicPopper = ({ fetchSortedPrediction }) => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleApply = () => {
    fetchSortedPrediction(activeButton);
  };

  return (
    <div>
      <Popper
        children={
          <div className="topic-popper">
            <div className="button-grp">
              <button
                className={`Economy ${
                  activeButton === "Economy" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("Economy")}
              >
                Economy
              </button>
              <button
                className={`Finance ${
                  activeButton === "Finance" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("Finance")}
              >
                Finance
              </button>
              <button
                className={`Politics ${
                  activeButton === "Politics" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("Politics")}
              >
                Politics
              </button>
              <button
                className={`Sci ${activeButton === "Sci" ? "active" : ""}`}
                onClick={() => handleButtonClick("Sci")}
              >
                Sci & Tech
              </button>
              <button
                className={`Social ${
                  activeButton === "Social" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("Social")}
              >
                Social & Health
              </button>
              <button
                className={`Others ${
                  activeButton === "Others" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("Others")}
              >
                Others
              </button>
            </div>
            <div className="apply" onClick={() => handleApply()}>
              <button className="apply-btn">Apply</button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default TopicPopper;
