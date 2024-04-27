import React, { useState } from "react";
import Popper from "../../common/popover";
import { IoReloadOutline } from "react-icons/io5";
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
            <button
              className={`w-full flex justify-center items-center gap-2 text-white cursor-pointer active:border-2 border-white rounded-lg p-2 ${
                activeButton === " " ? "active" : ""
              }`}
              onClick={() => {
                setActiveButton("");
                fetchSortedCategory("");
              }}
            >
              Reset <IoReloadOutline />
            </button>
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
