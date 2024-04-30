import React from "react";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FeedRightSectionColumns = ({ rank, name, accuracy, imgUrl, userId }) => {
  const navigate = useNavigate();

  return (
    <div
      className="right-columns"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 16px",
        borderBottom: "3px solid #181818",
      }}
    >
      <div
        className="card-img"
        style={{
          borderRadius: "50%",
          border: "1px solid #4B6CC2",
          padding: "2px",
          height: "48px",
          width: "48px",
        }}
      >
        <Image
          src={imgUrl}
          alt="N/A"
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            cursor: "pointer",
          }}
          onClick={() =>
            navigate("/Leaderboards", {
              state: { id: userId },
            })
          }
        />
      </div>
      <div
        className="profile-name"
        style={{
          paddingLeft: "10px",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h5
          className="cursor-pointer text-[#4b6cc2] font-semibold text-base"
          onClick={() =>
            navigate("/Leaderboards", {
              state: { id: userId },
            })
          }
        >
          <span>#{rank}</span> {name}
        </h5>
        <h6 className="text-xs">
          Accuracy{" "}
          <span
            style={{
              color: accuracy > 35 ? "#388E3C" : "#FF0000",
            }}
          >
            {Math.floor(accuracy)}%
          </span>
        </h6>
      </div>
    </div>
  );
};

export default FeedRightSectionColumns;
