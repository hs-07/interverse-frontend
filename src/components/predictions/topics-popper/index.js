import React, { useState } from "react";
import Popper from "../../common/popover";
import "./style.css";

const StatusPopper = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div>
      <Popper
        children={
          <div className="Topic-popper">
            <div className="button-grp">
              <button
                className={`true ${activeButton === "true" ? "active" : ""}`}
                onClick={() => handleButtonClick("true")}
              >
                True
              </button>
              <button
                className={`false ${activeButton === "false" ? "active" : ""}`}
                onClick={() => handleButtonClick("false")}
              >
                False
              </button>
              <button
                className={`p-true ${
                  activeButton === "p-true" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("p-true")}
              >
                Partially True
              </button>
              <button
                className={`pending ${
                  activeButton === "pending" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("pending")}
              >
                Pending
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

export default StatusPopper;
