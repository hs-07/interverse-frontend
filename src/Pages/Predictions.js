import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import "../styles/predictions.css";
import {
  getPredictions,
  getPredictionSingle,
} from "../services/Predictions.service";
import infoIcon from "../assests/hover_info6.png"; // Replace with the actual path to your icon

const Predictions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const a = location?.state?.id;

  console.log("arr:::", a);
  const [data, setData] = useState([]);
  const [userid, setUserId] = useState(location?.state?.id);
  const [summariesRead, setSummariesRead] = useState("6");
  const [justificationRead, setJustificationRead] = useState("4");

  useEffect(() => {
    // console.log("userId::::::::", userid);
    // console.log("userId::::::::", typeof userid);
    // console.log("userId::::::::", userid);
    if (userid == undefined) {
      getPredictions()
        .then((res) => {
          console.log("res:::00000::::::", res.data);
          setData([...res.data]);
          setData(
            [...res.data].map((obj) => ({
              ...obj,
              predictionActive: false,
            }))
          );
        })
        .catch((err) => {
          console.log("err::::::", err);
        });
    } else {
      getPredictionSingle(location?.state?.id)
        .then((res) => {
          console.log("res:::123456::::::", res.data);
          setData([...res.data]);
          setData(
            [...res.data].map((obj) => ({
              ...obj,
              predictionActive: false,
            }))
          );
        })
        .catch((err) => {
          console.log("err::::::", err);
        });
    }
  }, []);

  const onClickDescription = (index) => {
    const arr = [...data];
    arr[index].predictionActive = !arr[index].predictionActive;
    setData([...arr]);
  };

  const handleSummaries = () => {
    if (summariesRead == "6") {
      setSummariesRead("1000");
    } else {
      setSummariesRead("6");
    }
  };

  const handleJustifications = () => {
    if (justificationRead == "4") {
      setJustificationRead("1000");
    } else {
      setJustificationRead("4");
    }
  };

  const interpolateColor = (score, startColor, endColor) => {
    const proportion = Math.abs(score) / 100;
    const startRGB = parseInt(startColor.substring(1), 16);
    const endRGB = parseInt(endColor.substring(1), 16);

    const r = Math.round(
      (startRGB >> 16) + proportion * ((endRGB >> 16) - (startRGB >> 16))
    );
    const g = Math.round(
      ((startRGB >> 8) & 0x00ff) +
        proportion * (((endRGB >> 8) & 0x00ff) - ((startRGB >> 8) & 0x00ff))
    );
    const b = Math.round(
      (startRGB & 0x0000ff) +
        proportion * ((endRGB & 0x0000ff) - (startRGB & 0x0000ff))
    );

    return `rgb(${r}, ${g}, ${b})`;
  };

  const calculateBackgroundColor = (score) => {
    const neutralColor = "#808080"; // Grey color for neutral score
    if (score >= 0) {
      return interpolateColor(score, neutralColor, "#50D200"); // Interpolate between grey and green
    } else {
      return interpolateColor(score, neutralColor, "#B32A2A"); // Interpolate between grey and red
    }
  };

  return (
    <div className="predictions">
      {/* Header Starts */}
      <div className="sub-header ">
        <div className="column">
          <div>Status</div>
          <img
            style={{
              position: "relative",
              width: "21.5px",
              height: "10.01px",
            }}
            alt=""
            src="/down-arrow.svg"
          />
        </div>
        <div className="column">
          <div>Forecaster</div>
        </div>
        <div className="column">
          <div>Topic</div>
          <img
            style={{
              position: "relative",
              width: "21.5px",
              height: "10.01px",
            }}
            alt=""
            src="/down-arrow.svg"
          />
        </div>
        <div className="column">
          <div>Prediction</div>
        </div>
        <div className="column">
          <div>Market</div>
        </div>
        <div className="column">
          <div>Expand</div>
        </div>
      </div>

      {/* Header ENds */}
      {/* Array Data Starts */}
      {data.map((val, index) => {
        return (
          <>
            <div
              className="prediction-row"
              onClick={() => onClickDescription(index)}
            >
              <div
                className="column-1"
                style={{
                  backgroundColor:
                    val?.prediction_validation === "PENDING"
                      ? "#374C98"
                      : val?.prediction_validation === "TRUE"
                      ? "#23B678"
                      : val?.prediction_validation === "UNDETERMINED"
                      ? "#D29D15"
                      : val?.prediction_validation === "PARTIALLY TRUE"
                      ? "#388E3C"
                      : "#E72E2E",
                  color:
                    val?.prediction_validation === "PARTIALLY TRUE"
                      ? "#FFFFFF"
                      : "#fff",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  {val?.prediction_validation}
                </p>
              </div>
              <div className="column-2">
                <img alt="" src={val?.image_url} />
                {/* </div> */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    fontFamily: "Inter",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {val?.first_name.startsWith("Unknown")
                      ? "Unknown"
                      : val?.first_name + " " + val?.last_name}
                  </div>
                </div>
              </div>
              <div className="column-2">{val?.category}</div>
              <div className="column-2">{val?.prediction}</div>
              <div className="column-3">
                <img alt="" src="/marketgraph.svg" />
              </div>
              <div className="column-3">
                <div>
                  {val?.predictionActive ? (
                    <img
                      style={{
                        position: "relative",
                        width: "21.5px",
                        height: "21.5px",
                      }}
                      alt=""
                      src="/vector-1433.svg"
                    />
                  ) : (
                    <img
                      style={{
                        position: "relative",
                        width: "21.5px",
                        height: "21.5px",
                      }}
                      alt=""
                      src="/vector-278.svg"
                    />
                  )}
                </div>
              </div>
            </div>
            {val?.predictionActive ? (
              <div
                style={{
                  backgroundColor: "",
                  width: "1275px",
                  height: "auto",
                  overflow: "hidden",
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "7px 22px",
                  boxSizing: "border-box",
                  gap: "133px",
                  fontSize: "14px",
                  color: "#aeaeae",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#181818",
                    width: "1275px",
                    height: "auto",
                    overflow: "hidden",
                    flexShrink: "0",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "30px 22px 20px 151px",
                    boxSizing: "border-box",
                    gap: "77px",
                    color: "#4B6CC2",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "10px",
                      width: "465px",
                      height: "auto",
                      overflow: "hidden",
                      flexShrink: "0",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "0px 18px 0px 0px",
                      boxSizing: "border-box",
                      gap: "19px",
                      color: "#aeaeae",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "8px",
                        backgroundColor: "#282828",
                        width: "465px",
                        height: "auto",
                        overflow: "hidden",
                        flexShrink: "0",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "22px",
                        boxSizing: "border-box",
                        gap: "20px",
                      }}
                    >
                      <div
                        style={{
                          width: "182px",
                          height: "59px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            width: "105px",
                            height: "20px",
                            flexShrink: "0",
                          }}
                        >
                          Made on
                        </div>
                        <div
                          style={{
                            position: "relative",
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#4B6CC2",
                            display: "flex",
                            alignItems: "center",
                            width: "182px",
                            height: "20px",
                            flexShrink: "0",
                          }}
                        >
                          {val?.publish_date}
                        </div>
                      </div>
                      <div
                        style={{
                          width: "189px",
                          height: "59px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            width: "105px",
                            height: "20px",
                            flexShrink: "0",
                            // move to the right:
                          }}
                        >
                          Resolves on
                        </div>
                        <div
                          style={{
                            position: "relative",
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#4B6CC2",
                            display: "flex",
                            alignItems: "center",
                            width: "182px",
                            height: "20px",
                            flexShrink: "0",
                          }}
                        >
                          {val?.fixed_date}
                        </div>
                      </div>
                      <div
                        style={{
                          width: "182px",
                          height: "59px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            width: "182px",
                            height: "20px",
                            flexShrink: "0",
                          }}
                        >
                          Past performance
                          <img
                            src={infoIcon}
                            alt="Info"
                            title="Overall prediction accuracy for the forecaster across all predictions."
                            style={{
                              marginLeft: "5px",
                              width: "16px", // Adjust as needed
                              height: "16px", // Adjust as needed
                              cursor: "pointer",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "relative",
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#4B6CC2",
                            display: "flex",
                            alignItems: "center",
                            width: "182px",
                            height: "20px",
                            flexShrink: "0",
                          }}
                        >
                          {val?.prediction_accuracy}%
                        </div>
                      </div>
                      <div
                        style={{
                          width: "189px",
                          height: "59px",
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "0px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            width: "50px",
                            height: "20px",
                            flexShrink: "0",
                          }}
                        >
                          Status
                        </div>
                        <div
                          style={{
                            position: "relative",
                            borderRadius: "50%",
                            backgroundColor: "#50d200",
                            width: "12px",
                            height: "12px",
                          }}
                        />
                        <div
                          style={{
                            position: "relative",
                            fontSize: "21px",
                            fontWeight: "800",
                            color:
                              val?.prediction_validation == "TRUE"
                                ? "#10d200"
                                : val?.prediction_validation ===
                                  "PARTIALLY TRUE"
                                ? "#388E3C"
                                : val?.prediction_validation === "PENDING"
                                ? "#374C98"
                                : "#f70000",
                            display: "flex",
                            alignItems: "center",
                            width: "182px",
                            height: "20px",
                            flexShrink: "0",
                          }}
                          // "#10d200" : "#b32a2a"
                        >
                          {val?.prediction_validation}
                        </div>
                      </div>
                    </div>
                    {/* Below Part starts */}
                    <div
                      style={{
                        width: "465px",
                        height: "126px",
                        overflow: "hidden",
                        flexShrink: "0",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "12px 0px",
                        boxSizing: "border-box",
                        gap: "15px",
                        textAlign: "center",
                        fontSize: "14px",
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "8px",
                          backgroundColor: "#282828",
                          width: "105px",
                          height: "126px",
                          overflow: "hidden",
                          flexShrink: "0",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "105px",
                            height: "53px",
                            flexShrink: "0",
                          }}
                        >
                          Points
                          <img
                            src={infoIcon}
                            alt="Info"
                            title="Point based on prediction accuracy & timeline (max gain +100 | max loss of -100) "
                            style={{
                              marginLeft: "5px",
                              width: "16px", // Adjust as needed
                              height: "16px", // Adjust as needed
                              cursor: "pointer",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            backgroundColor:
                              val?.score < 0 ? "#B32A2A" : "#50D200",
                            width: "105px",
                            height: "73px",
                            overflow: "hidden",
                            flexShrink: "0",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "4px 3px",
                            boxSizing: "border-box",
                            textAlign: "left",
                            fontSize: "20px",
                            color: "#fff",
                          }}
                        >
                          <div
                            style={{ position: "relative", fontWeight: "600" }}
                          >
                            {val?.score && Number(val?.score).toFixed(1)}
                            <span
                              style={{ fontSize: "16px", fontWeight: "500" }}
                            >
                              {" "}
                              Pts
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          borderRadius: "8px",
                          backgroundColor: "#282828",
                          width: "105px",
                          height: "126px",
                          overflow: "hidden",
                          flexShrink: "0",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "105px",
                            height: "53px",
                            flexShrink: "0",
                          }}
                        >
                          Timeline
                          <img
                            src={infoIcon}
                            alt="Info"
                            title="The ammount of days in the future the prediction is made for"
                            style={{
                              marginLeft: "5px",
                              width: "16px", // Adjust as needed
                              height: "16px", // Adjust as needed
                              cursor: "pointer",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            backgroundColor:
                              val?.days_since > 60 ? "#50D200" : "#B32A2A",
                            width: "105px",
                            height: "73px",
                            overflow: "hidden",
                            flexShrink: "0",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "4px 3px",
                            boxSizing: "border-box",
                            textAlign: "left",
                            fontSize: "20px",
                            color: "#fff",
                          }}
                        >
                          <div
                            style={{ position: "relative", fontWeight: "600" }}
                          >
                            {val?.days_since}{" "}
                            <span
                              style={{ fontSize: "16px", fontWeight: "500" }}
                            >
                              Days
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          borderRadius: "8px",
                          backgroundColor: "#282828",
                          width: "105px",
                          height: "126px",
                          overflow: "hidden",
                          flexShrink: "0",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "105px",
                            height: "53px",
                            flexShrink: "0",
                          }}
                        >
                          Error %
                          <img
                            src={infoIcon}
                            alt="Info"
                            title="The error rate of the prediction compared to ground truth (only for continuous predictions)."
                            style={{
                              marginLeft: "5px",
                              width: "16px", // Adjust as needed
                              height: "16px", // Adjust as needed
                              cursor: "pointer",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            backgroundColor: "#fff",
                            width: "105px",
                            height: "73px",
                            overflow: "hidden",
                            flexShrink: "0",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "4px 3px",
                            boxSizing: "border-box",
                            textAlign: "left",
                            fontSize: "20px",
                            color: "#333",
                          }}
                        >
                          <div
                            style={{ position: "relative", fontWeight: "600" }}
                          >
                            {val?.prediction_type === "BINARY"
                              ? "N/A"
                              : val?.error}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #373737",
                          boxSizing: "border-box",
                          width: "105px",
                          height: "126px",
                          overflow: "hidden",
                          flexShrink: "0",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "105px",
                            height: "53px",
                            flexShrink: "0",
                          }}
                        >
                          Type
                          <img
                            src={infoIcon}
                            alt="Info"
                            title="Binary predictions are TRUE or FALSE statements. Continuous predictions are numerical, eg stock prices."
                            style={{
                              marginLeft: "5px",
                              width: "16px", // Adjust as needed
                              height: "16px", // Adjust as needed
                              cursor: "pointer",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            backgroundColor: "#9d43bd",
                            width: "104px",
                            height: "73px",
                            overflow: "hidden",
                            flexShrink: "0",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "4px 3px",
                            boxSizing: "border-box",
                            textAlign: "left",
                            fontSize:
                              val?.prediction_type !== "BINARY"
                                ? "13px"
                                : "18px", // Conditional font size
                            color: "#fff",
                          }}
                        >
                          <div
                            style={{ position: "relative", fontWeight: "600" }}
                          >
                            {val?.prediction_type}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Below Part Ends */}
                  </div>
                  {/* Youtube Video Starts */}
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "14px",
                      backgroundColor: "#141c23",
                      width: "560px",
                      height: "330px",
                      left: "-20px",
                      overflow: "hidden",
                      flexShrink: "0",
                    }}
                  >
                    <img
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "560px",
                        height: "330px",
                        objectFit: "cover",
                      }}
                      alt=""
                      src="/image-140@2x.png"
                    />
                    <div>
                      <iframe
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          width: "570px",
                          height: "330px",
                          // objectFit: "cover",
                        }}
                        alt=""
                        src={`https://www.youtube.com/embed/${val?.youtube_id}?start=${val?.youtube_start_time}`}
                      />
                    </div>
                  </div>
                  {/* YouTube Video Ends */}
                  <div
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "#282828",
                      width: "1083px",
                      height: "auto",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "22px",
                      boxSizing: "border-box",
                      gap: "16px",
                      fontSize: "20px",
                      // move the whole box up:
                      marginTop: "-50px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        width: "457px",
                        height: "23px",
                        flexShrink: "0",
                      }}
                    >
                      Justification
                      <img
                        src={infoIcon}
                        alt="Info"
                        title="The reasoning behind what kind of prediction is made, as well as justification for the prediction result."
                        style={{
                          marginLeft: "5px",
                          width: "16px", // Adjust as needed
                          height: "16px", // Adjust as needed
                          cursor: "pointer",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        fontSize: "inherit",
                        fontFamily: "inherit",
                        color: "#fff",
                        display: "-webkit-inline-box",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        webkitLineClamp: justificationRead,
                        webkitBoxOrient: "vertical",
                        width: "1043px",
                      }}
                    >
                      <ul style={{ margin: "0", paddingLeft: "21px" }}>
                        <li style={{ marginBottom: "0px" }}>
                          {val?.justification}
                        </li>
                      </ul>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        fontSize: "16px",
                        textAlign: "right",
                        display: "flex",
                        alignItems: "center",
                        width: "1043px",
                        height: "20px",
                        flexShrink: "0",
                        justifyContent: "flex-end",
                      }}
                      onClick={handleJustifications}
                    >
                      {justificationRead == "4" ? "Read more" : "Read Less"}
                    </div>
                  </div>
                  <div
                    style={{
                      borderRadius: "8px",
                      border: "1.2px solid #282828",
                      boxSizing: "border-box",
                      width: "1083px",
                      height: "auto",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "22px",
                      gap: "16px",
                      fontSize: "20px",
                      // backgroundColor: "red",
                      marginTop: "-50px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        width: "457px",
                        height: "23px",
                        flexShrink: "0",
                      }}
                    >
                      Summaries
                      <img
                        src={infoIcon}
                        alt="Info"
                        title="Evidential summary of the most relevant articles from the best ranked sources, determined by our AI."
                        style={{
                          marginLeft: "5px",
                          width: "16px", // Adjust as needed
                          height: "16px", // Adjust as needed
                          cursor: "pointer",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        fontSize: "inherit",
                        fontFamily: "inherit",
                        color: "#fff",
                        display: "-webkit-inline-box",
                        alignItems: "center",
                        overflow: "hidden",
                        textOverflow: "inherit",
                        webkitLineClamp: summariesRead,
                        webkitBoxOrient: "vertical",
                        width: "1043px",
                      }}
                    >
                      <ul style={{ margin: "0", paddingLeft: "21px" }}>
                        <li style={{ marginBottom: "0px" }}>
                          {val?.summaries}
                        </li>
                      </ul>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        fontSize: "16px",
                        textAlign: "right",
                        display: "flex",
                        alignItems: "center",
                        width: "1043px",
                        height: "20px",
                        flexShrink: "0",
                        justifyContent: "flex-end",
                      }}
                      onClick={handleSummaries}
                    >
                      {summariesRead == "6" ? "Read more" : "Read Less"}
                    </div>
                  </div>
                  <div
                    style={{
                      width: "1083px",
                      height: "auto",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "8px",
                      fontSize: "14px",
                      color: "#1664da",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#4B6CC2",
                        display: "flex",
                        alignItems: "center",
                        width: "1083px",
                        height: "23px",
                        flexShrink: "0",
                        marginTop: "-50px",
                      }}
                    >
                      Sources
                    </div>

                    {val?.sources.map((val, index) => {
                      return (
                        <div
                          style={{
                            borderRadius: "8px",
                            width: "1083px",
                            height: "19px",
                            overflow: "hidden",
                            flexShrink: "0",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            padding: "17px 34px 17px 0px",
                            boxSizing: "border-box",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              display: "flex",
                              alignItems: "center",
                              width: "896px",
                              height: "36px",
                              flexShrink: "0",
                            }}
                          >
                            {val}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "#282828",
                      width: "1083px",
                      height: "60px",
                      overflow: "hidden",
                      flexShrink: "0",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "10px 10px 10px 22px",
                      boxSizing: "border-box",
                      gap: "352px",
                      textAlign: "center",
                      color: "#fff",
                      marginTop: "-40px",
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      Did we get it wrong? Add context and evidence if you think
                      you see an error.
                    </div>
                    <Button
                      style={{
                        borderRadius: "8px",
                        backgroundColor: "#4B6CC2",
                        width: "122px",
                        height: "43px",
                        overflow: "hidden",
                        flexShrink: "0",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "17px 34px",
                        boxSizing: "border-box",
                        fontSize: "14px",
                        color: "#282828",
                        // move to the right:
                        marginLeft: "65px",
                      }}
                    >
                      Feedback
                    </Button>
                  </div>
                </div>
                {/* <div
                  style={{
                    position: "relative",
                    borderRadius: "14px",
                    backgroundColor: "#141c23",
                    width: "492px",
                    height: "262px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      width: "492px",
                      height: "262px",
                      objectFit: "cover",
                    }}
                    alt=""
                    src="/image-140@2x.png"
                  />
                  <div>
                    <iframe
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "493px",
                        height: "262px",
                        objectFit: "cover",
                      }}
                      alt=""
                      src={`https://www.youtube.com/embed/${val?.youtube_id}?start=${val?.youtube_start_time}`}
                    />
                  </div>
                </div> */}
              </div>
            ) : null}
          </>
        );
      })}
      {/* Array Data Ends */}
    </div>
  );
};

export default Predictions;
