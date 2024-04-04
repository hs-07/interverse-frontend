import React from "react";
import { TbArrowsUpDown } from "react-icons/tb";
import "../../styles/leaderboard/subheader.css";

const subheader = () => {
  const subheaderBlocks = [
    {
      block: (
        <div>
          Rank <TbArrowsUpDown />
        </div>
      ),
    },
    {
      block: <div>Name</div>,
    },
    {
      block: (
        <div>
          Accuracy <TbArrowsUpDown />
        </div>
      ),
    },
    {
      block: (
        <div>
          Points <TbArrowsUpDown />
        </div>
      ),
    },
    {
      block: (
        <div>
          Bankroll <TbArrowsUpDown />
        </div>
      ),
    },
    {
      block: <div>Favorite</div>,
    },
  ];
  return (
    <div className="leaderboard-subheader">
      {subheaderBlocks.map((item, index) => (
        <div key={index} className="subheader-block">
          {item.block}
        </div>
      ))}
    </div>
  );
};

export default subheader;
