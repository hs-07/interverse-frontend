import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import ProofModal from "./feed/proof-modal";
import { getSinglePrediction } from "../services/Predictions.service";
import "../styles/feedCard.css";
import { useNavigate } from "react-router-dom";

const FeedCard = ({
  category,
  resolvedOn,
  imgUrl,
  prediction,
  madeOn,
  user,
  status,
  userId,
  predictionId,
  setOpenShare,
}) => {
  const navigate = useNavigate();

  const [openProof, setOpenProof] = useState(false);
  const [val, setVal] = useState({});
  const [loading, setLoading] = useState(false);
  const handleProof = async () => {
    setLoading(true);
    try {
      const response = await getSinglePrediction(predictionId);
      setVal(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

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
            <Image
              src={imgUrl}
              alt="N/A"
              className="cursor-pointer"
              onClick={() =>
                navigate("/Leaderboards", {
                  state: { id: userId },
                })
              }
            />
          </div>
          <div className="profile-name">
            <h5
              className={"cursor-pointer text-[#4b6cc2] font-semibold"}
              onClick={() =>
                navigate("/Leaderboards", {
                  state: { id: userId },
                })
              }
            >
              {user}
            </h5>
            <span>{category}</span>
          </div>
        </div>
        <button
          className="card-header-btn"
          onClick={() => {
            handleProof();
            setOpenProof(true);
          }}
        >
          Proof
        </button>
      </div>
      <div className="card-status">
        <div
          style={{
            width: "14px",
            height: "14px",
            backgroundColor:
              status === "PENDING"
                ? "#c2964b"
                : status === "TRUE"
                ? "#23B678"
                : "#E72E2E",
            borderRadius: "50%",
          }}
        />
        <p>
          Status :{" "}
          <span
            style={
              status === "PENDING"
                ? { color: "#c2964b" }
                : status === "TRUE"
                ? { color: "#23B678" }
                : { color: "#E72E2E" }
            }
          >
            {" "}
            {status}
          </span>
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
              color: "gray",
            }}
          />
        </div>
        <div className="dislikes">
          <ImArrowDown
            style={{
              cursor: "pointer",
              color: "gray",
            }}
          />
        </div>
        <div className="comment">
          <IoChatbubbleEllipses
            style={{
              cursor: "pointer",
              color: "gray",
            }}
          />
        </div>
        <div className="share">
          <RiSendPlaneFill
            style={{
              cursor: "pointer",
              color: "gray",
            }}
            onClick={() => setOpenShare(true)}
          />
        </div>
      </div>
      <ProofModal
        setShowModal={setOpenProof}
        showModal={openProof}
        val={val}
        loading={loading}
      />
    </div>
  );
};

export default FeedCard;
