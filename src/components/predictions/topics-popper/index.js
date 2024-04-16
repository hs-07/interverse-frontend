import React, { useState } from "react";
import Popper from "../../common/popover";
import "./style.css";

const TopicPopper = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div>
      <Popper
        children={
          <div className="topic-popper">
            <div className="button-grp">
              <button
                className={`economy ${
                  activeButton === "economy" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("economy")}
              >
                Economy
              </button>
              <button
                className={`finance ${
                  activeButton === "finance" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("finance")}
              >
                Finance
              </button>
              <button
                className={`politics ${
                  activeButton === "politics" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("politics")}
              >
                Politics
              </button>
              <button
                className={`sci ${activeButton === "sci" ? "active" : ""}`}
                onClick={() => handleButtonClick("sci")}
              >
                Sci & Tech
              </button>
              <button
                className={`social ${
                  activeButton === "social" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("social")}
              >
                Socail & Health
              </button>
              <button
                className={`others ${
                  activeButton === "others" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("others")}
              >
                Others
              </button>
            </div>
            <div className="apply">
              <button className="apply-btn">Apply</button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default TopicPopper;
