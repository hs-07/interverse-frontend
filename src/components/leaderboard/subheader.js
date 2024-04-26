import React, { useState } from "react";
import { TbArrowsUpDown } from "react-icons/tb";
import "../../styles/leaderboard/subheader.css";

const Subheader = ({
  sortLeaderboardByAccuracy,
  sortLeaderboardByScore,
  sortLeaderboardByBankroll,
}) => {
  const [accuracyOrder, setAccuracyOrder] = useState("desc");
  const [scoreOrder, setScoreOrder] = useState("score_desc");
  const [bankrollOrder, setBankrollOrder] = useState("bankroll_desc");

  const handleAccuracySort = () => {
    const newOrder = accuracyOrder === "desc" ? "accuracy_asc" : "desc";
    setAccuracyOrder(newOrder);
    sortLeaderboardByAccuracy(newOrder);
  };
  const handleScoreSort = () => {
    const newOrder = scoreOrder === "score_desc" ? "score_asc" : "score_desc";
    setScoreOrder(newOrder);
    sortLeaderboardByScore(newOrder);
  };
  const handleBankrollSort = () => {
    const newOrder =
      bankrollOrder === "bankroll_desc" ? "bankroll_asc" : "bankroll_desc";
    setBankrollOrder(newOrder);
    sortLeaderboardByBankroll(newOrder);
  };

  const subheaderBlocks = [
    {
      block: <div>Rank</div>,
    },
    {
      block: <div className="leader-name">Name</div>,
    },
    {
      block: (
        <div className="flex items-center gap-2">
          Accuracy{" "}
          <TbArrowsUpDown
            onClick={() => handleAccuracySort()}
            style={{ cursor: "pointer" }}
          />
        </div>
      ),
    },
    {
      block: (
        <div className="points flex items-center gap-2">
          Points
          <TbArrowsUpDown
            onClick={() => handleScoreSort()}
            style={{ cursor: "pointer" }}
          />
        </div>
      ),
    },
    {
      block: (
        <div className="bankroll flex items-center gap-2">
          Bankroll{" "}
          <TbArrowsUpDown
            onClick={() => handleBankrollSort()}
            style={{ cursor: "pointer" }}
          />
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

export default Subheader;
