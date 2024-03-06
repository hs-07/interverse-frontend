import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { channelsData } from "../services/channels.service";
import { useNavigate } from "react-router-dom";
import "../styles/mychannels.css";

function MyChannels() {
  const [channelData, setChannelData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();

  const handleSubSection = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
      return;
    }
    setActiveIndex(index);
  };
  useEffect(() => {
    channelsData()
      .then((res) => {
        // console.log("res chaneel:::", res.data);
        setChannelData([...res.data]);
      })
      .catch((err) => {
        console.log("err:::::", err);
      });
  }, []);
  return (
    <div className="myChannel">
      {/* Add Channel div Starts */}
      <div className="addChannel-section">
        <div className="block-1">Add Channel</div>
        <div className="block-2">
          <input placeholder="Enter Channel Url" />
          <Button className="btn" onClick={() => alert("In Progress...")}>
            ADD
          </Button>
        </div>
      </div>
      <div className="channel-header">
        <div>Channel Name</div>
        <div>Summaries</div>
        <div>Predictions</div>
        <div>Prediction Accuracy</div>
        <div>View More</div>
      </div>
      {/* Add Channel div Ends */}
      {/* Row Data Starts */}
      {channelData.map((val, index) => {
        return (
          <>
            <div className="channelData-row">
              <div className="block">
                <img
                  style={{
                    position: "relative",
                    borderRadius: "50%",
                    width: "48px",
                    height: "48px",
                    objectFit: "cover",
                  }}
                  alt=""
                  src={val?.ChannelImageUrl}
                />
                <div className="">{val?.ChannelName.slice(0, 20)}</div>
              </div>
              <div className="block">{val?.Summaries}</div>
              <div className="block">{val?.Predictions}</div>
              <div className="block">{val?.PredictionAccuracy}</div>
              <div className="block" onClick={() => handleSubSection(index)}>
                {activeIndex == index ? (
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
            {/* Hidden Data Starts */}
            {index == activeIndex ? (
              <div
                style={{
                  backgroundColor: "#282828",
                  width: "100%",
                  height: "auto",
                  overflow: "hidden",
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  padding: "15px 22px",
                  boxSizing: "border-box",
                  gap: "17px",
                  fontSize: "24px",
                  color: "white",
                }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      position: "relative",
                      fontSize: "24px",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      width: "290px",
                      height: "68px",
                      flexShrink: "0",
                      // backgroundColor: "red",
                    }}
                  >
                    People
                  </div>
                  <div
                    style={{
                      width: "900px",
                      height: "auto",
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "16px",
                      fontSize: "16px",
                      marginLeft: "10px",

                      // backgroundColor: "pink",
                    }}
                  >
                    {val?.People.map((val, index) => {
                      return (
                        <>
                          <div
                            style={{
                              borderRadius: "10px",
                              border: "1px solid white",
                              boxSizing: "border-box",
                              width: "247px",
                              height: "68px",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              padding: "10px",
                              gap: "17px",
                              flexWrap: "wrap",
                            }}
                            onClick={() =>
                              navigate("/Profiles", {
                                state: { id: val?.user_id },
                              })
                            }
                          >
                            <img
                              style={{
                                position: "relative",
                                borderRadius: "50%",
                                width: "48px",
                                height: "48px",
                                objectFit: "cover",
                              }}
                              alt=""
                              src={val?.image_url}
                            />
                            <div
                              style={{
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                width: "160px",
                                height: "28px",
                                flexShrink: "0",
                              }}
                            >
                              {val?.name}
                            </div>
                          </div>
                        </>
                      );
                    })}

                    <div
                      style={{
                        borderRadius: "10px",
                        width: "290px",
                        height: "68px",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    width: "880px",
                    height: "56px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      width: "290px",
                      height: "28px",
                      flexShrink: "0",
                    }}
                  >
                    Topics
                  </div>
                  <div
                    style={{
                      position: "relative",
                      fontSize: "20px",
                      color: "#aeaeae",
                      display: "flex",
                      alignItems: "center",
                      width: "305px",
                      height: "28px",
                      flexShrink: "0",
                    }}
                  >
                    {val?.Topics?.toString().split(",").join(", ")}
                  </div>
                </div>
                <div
                  style={{
                    width: "1215px",
                    height: "72px",
                    overflow: "hidden",
                    flexShrink: "0",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "10px",
                      width: "290px",
                      height: "50px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        width: "235px",
                        height: "28px",
                        flexShrink: "0",
                      }}
                    >
                      Pending Predictions
                    </div>
                  </div>
                  <div
                    style={{
                      borderRadius: "10px",
                      width: "242px",
                      height: "50px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      color: "#fff",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        fontWeight: "4          00",
                        display: "flex",
                        alignItems: "center",
                        width: "235px",
                        height: "28px",
                        flexShrink: "0",
                      }}
                    >
                      {val?.TotalPendingPredictions}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "1215px",
                    height: "72px",
                    overflow: "hidden",
                    flexShrink: "0",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "10px",
                      width: "290px",
                      height: "50px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        width: "160px",
                        height: "28px",
                        flexShrink: "0",
                      }}
                    >
                      Platforms
                    </div>
                  </div>
                  <div
                    style={{
                      borderRadius: "10px",
                      width: "720px",
                      height: "50px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "25px",
                    }}
                  >
                    {/* <img
                      style={{
                        position: "relative",
                        width: "32px",
                        height: "32px",
                      }}
                      alt=""
                      src="/spottifywhite.svg"
                    />
                    <img
                      style={{
                        position: "relative",
                        width: "36px",
                        height: "36px",
                      }}
                      alt=""
                      src="/applewhite.svg"
                    /> */}
                    <img
                      style={{
                        position: "relative",
                        width: "36px",
                        height: "36px",
                      }}
                      alt=""
                      src="/youtube.svg"
                    />
                    {/* <img
                      style={{
                        position: "relative",
                        width: "25.07px",
                        height: "23.5px",
                      }}
                      alt=""
                      src="/xwhite.svg"
                    /> */}
                  </div>
                  <Button
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "#2d2d2d",
                      border: "1px solid #e72e2e",
                      boxSizing: "border-box",
                      width: "172px",
                      height: "50px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "1px",
                      fontSize: "16px",
                      color: "#e72e2e",
                    }}
                    onClick={() => alert("In Process....")}
                  >
                    Remove Channel
                  </Button>
                </div>
              </div>
            ) : null}
            {/* Hidden Data Ends */}
          </>
        );
      })}
      {/* Row Data Ends */}
    </div>
  );
}

export default MyChannels;
