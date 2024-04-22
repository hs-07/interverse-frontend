import React, { useState } from "react";
import Popper from "../../common/popover";
import "./style.css";

const StatusPopper = ({ fetchSortedCategory }) => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleApply = () => {
    fetchSortedCategory(activeButton);
  };

  return (
    <div>
      <Popper
        children={
          <div className="status-popper">
            <div className="button-grp">
              <button
                className={`True ${activeButton === "True" ? "active" : ""}`}
                onClick={() => handleButtonClick("True")}
              >
                True
              </button>
              <button
                className={`False ${activeButton === "False" ? "active" : ""}`}
                onClick={() => handleButtonClick("False")}
              >
                False
              </button>
              <button
                className={`ParticallyTrue ${
                  activeButton === "PARTIALLY TRUE" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("PARTIALLY TRUE")}
              >
                Part True
              </button>
              <button
                className={`Pending ${
                  activeButton === "Pending" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("Pending")}
              >
                Pending
              </button>
            </div>
            <div className="apply">
              <button className="apply-btn" onClick={() => handleApply()}>
                Apply
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default StatusPopper;
