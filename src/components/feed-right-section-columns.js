import React from "react";
import { Image } from "react-bootstrap";

const feedRightSectionColumns = ({ rank, name, accuracy, imgUrl }) => {
  return (
    <div
      className="right-columns"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 0px",
        borderBottom: "1px solid #AEAEAE",
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
          }}
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
        <h5>
          <span>#{rank}</span> {name}
        </h5>
        <h6>
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

export default feedRightSectionColumns;
