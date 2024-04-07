import React, { useState } from "react";
import { TbArrowsUpDown } from "react-icons/tb";
import "../../styles/channels/subheader.css";
import AddChannelModal from "../addChannelModal";

const Subheader = () => {
  const [openAddChannel, setOpenAddChannel] = useState(false);

  const subheaderBlocks = [
    { block: <div>Name</div> },
    {
      block: (
        <div>
          Summaries <TbArrowsUpDown />
        </div>
      ),
    },
    {
      block: (
        <div>
          Predictions <TbArrowsUpDown />
        </div>
      ),
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
        >
          Prediction Accuracy <TbArrowsUpDown />
        </div>
      ),
    },
    { block: <div>Favourite</div> },
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
      <div className="channels-subheader">
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
