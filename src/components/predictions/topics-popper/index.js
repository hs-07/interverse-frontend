import React, { useState } from "react";
import { IoReloadOutline } from "react-icons/io5";
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
                className={`SciTech ${
                  activeButton === "Sci %26 Tech" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("Sci %26 Tech")}
              >
                Sci & Tech
              </button>
              <button
                className={`Social ${
                  activeButton === "Social %26 Health" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("Social %26 Health")}
              >
                Social & Health
              </button>
              <button
                className={`Other ${activeButton === "Other" ? "active" : ""}`}
                onClick={() => handleButtonClick("Other")}
              >
                Others
              </button>
            </div>
            <button
              className={`w-full flex justify-center items-center gap-2 text-white cursor-pointer active:border-2 border-white rounded-lg p-2 ${
                activeButton === " " ? "active" : ""
              }`}
              onClick={() => {
                setActiveButton("");
                fetchSortedPrediction("");
              }}
            >
              Reset <IoReloadOutline />
            </button>
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
