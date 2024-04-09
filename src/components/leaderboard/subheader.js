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
      block: <div className="name">Name</div>,
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
        <div className="points">
          Points <TbArrowsUpDown />
        </div>
      ),
    },
    {
      block: (
        <div className="bankroll">
          Bankroll <TbArrowsUpDown />
        </div>
      ),
    },
    {
      block: <div className="fav">Favorite</div>,
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
