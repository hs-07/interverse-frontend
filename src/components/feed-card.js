import React from "react";
import { Image } from "react-bootstrap";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import "../styles/feedCard.css";

const FeedCard = ({
  category,
  resolvedOn,
  imgUrl,
  prediction,
  madeOn,
  user,
  predictionId,
  setOpenShare,
}) => {
  return (
    <div className="feed-card">
      <div className="card-header">
        <div
          className=""
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="card-header-img">
            <Image src={imgUrl} alt="profile-image" />
          </div>
          <div className="profile-name">
            <h5>{user}</h5>
            <span>{category}</span>
          </div>
        </div>
        <button className="card-header-btn">Proof</button>
      </div>
      <div className="card-status">
        <Image src="/status.svg" />
        <p>
          Status : <span> {resolvedOn !== null ? "Done" : "Pending"}</span>
        </p>
      </div>
      <div className="card-dates">
        <p>
          Made on : <span>{madeOn}</span>
        </p>
        <p>
          Resolves on : <span>{resolvedOn !== null ? resolvedOn : "Null"}</span>
        </p>
      </div>
      <div className="card-description">
        <p>{prediction}</p>
      </div>
      <div className="card-image">{/* <Image src={card.src} /> */}</div>
      <div className="card-footer">
        <div className="likes">
          <ImArrowUp
            style={{
              cursor: "pointer",
            }}
          />
          <span>30</span>
        </div>
        <div className="dislikes">
          <ImArrowDown
            style={{
              cursor: "pointer",
            }}
          />
          <span>13</span>
        </div>
        <div className="comment">
          <IoChatbubbleEllipses
            style={{
              cursor: "pointer",
            }}
          />
        </div>
        <div className="share">
          <RiSendPlaneFill
            style={{
              cursor: "pointer",
            }}
            onClick={() => setOpenShare(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
