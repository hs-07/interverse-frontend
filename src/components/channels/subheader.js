import React, { useState } from "react";
import { TbArrowsUpDown } from "react-icons/tb";
import "../../styles/channels/subheader.css";
import AddChannelModal from "../addChannelModal";

const Subheader = ({ className }) => {
  const [openAddChannel, setOpenAddChannel] = useState(false);

  const subheaderBlocks = [
    { block: <div className="Ch-name">Name</div> },
    {
      block: <div className="Ch-summaries">Summaries</div>,
    },
    {
      block: <div className="Ch-prediction">Predictions</div>,
    },
    {
      block: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
          }}
          className="Ch-accuracy"
        >
          Accuracy
        </div>
      ),
    },
    { block: <div className="Ch-fav">Favourite</div> },
    {
      block: (
        <div onClick={() => setOpenAddChannel(true)} className="addChannelBtn">
          <button>Add Channel</button>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className={`${className} channels-subheader`}>
        {subheaderBlocks.map((item, index) => (
          <div key={index} className="subheader-block">
            {item.block}
          </div>
        ))}
      </div>
      <AddChannelModal
        setShowModal={setOpenAddChannel}
        showModal={openAddChannel}
      />
    </>
  );
};

export default Subheader;
