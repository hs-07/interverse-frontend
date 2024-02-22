import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { channelsData } from "../services/channels.service";
import { useNavigate } from "react-router-dom";

function MyChannels() {
  const [channelData, setChannelData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();

  const handleSubSection = (index) => {
    if (index == activeIndex) {
      setActiveIndex(-1);
      return;
    }
    setActiveIndex(index);
  };
  useEffect(() => {
    channelsData()
      .then((res) => {
        console.log("res chaneel:::", res.data);
        setChannelData([...res.data]);
      })
      .catch((err) => {
        console.log("err:::::", err);
      });
  }, []);
  return (
    <div
      style={{
        position: "relative",
        height: "90vh",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "2px",
        fontSize: "20px",
        color: "#4B6CC2",
        marginBottom: "80px",
        overflowStyle: "none",
      }}
    >
      {/* Add Channel div Starts */}
      <div
        style={{
          backgroundColor: "#282828",
          width: "100%",
          height: "103px",
          overflow: "hidden",
          flexShrink: "0",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "7px 22px",
          boxSizing: "border-box",
          gap: "26px",
          fontSize: "20px",
        }}
      >
        <div
          style={{
            width: "354px",
            height: "40px",
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
              width: "200px",
              height: "20px",
              flexShrink: "0",
            }}
          >
            Add Channel
          </div>
        </div>
        <div
          style={{
            borderRadius: "10px",
            backgroundColor: "#181818",
            backdropFilter: "blur(40px)",
            border: "1px solid rgba(174, 174, 174, 0.5)",
            boxSizing: "border-box",
            width: "834px",
            height: "60px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "2px 7px 2px 20px",
            gap: "32px",
            fontFamily: "Lato",
          }}
        >
          <input
            style={{
              position: "relative",
              lineHeight: "40px",
              display: "flex",
              alignItems: "center",
              width: "607px",
              height: "38px",
              backgroundColor: "#181818",
              backdropFilter: "blur(40px)",
              border: 0,
              color: "#fff",
              fontFamily: "inter",
            }}
            placeholder="Enter Channel Url"
          />
          <Button
            style={{
              borderRadius: "10px",
              backgroundColor: "#282828",
              width: "170px",
              height: "50px",
              overflow: "hidden",
              flexShrink: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              // padding: "28px 25px",
              boxSizing: "border-box",
              position: "relative",
              textAlign: "center",
              color: "#4B6CC2",
              // margin: "2px",
            }}
            onClick={() => alert("In Progress...")}
          >
            ADD
          </Button>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          // overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          color: "#4B6CC2",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "#282828",
            width: "100%",
            height: "54px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "7px 22px",
            boxSizing: "border-box",
            gap: "26px",
          }}
        >
          <div
            style={{
              width: "354px",
              height: "40px",
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
                width: "200px",
                height: "20px",
                flexShrink: "0",
              }}
            >
              Channel Name
            </div>
          </div>
          <div
            style={{
              width: "200px",
              height: "40px",
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
                width: "200px",
                height: "39px",
                flexShrink: "0",
              }}
            >
              Summaries
            </div>
          </div>
          <div
            style={{
              width: "201px",
              height: "40px",
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
                width: "117px",
                height: "20px",
                flexShrink: "0",
              }}
            >
              Predictions
            </div>
          </div>
          <div
            style={{
              width: "212px",
              height: "40px",
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
                width: "212px",
                height: "20px",
                flexShrink: "0",
              }}
            >
              Prediction Accuracy
            </div>
          </div>
          <div
            style={{
              width: "152px",
              height: "40px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              textAlign: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "125px",
                height: "39px",
                flexShrink: "0",
              }}
            >
              View More
            </div>
          </div>
        </div>
      </div>
      {/* Add Channel div Ends */}
      {/* Row Data Starts */}
      {channelData.map((val, index) => {
        return (
          <>
            <div
              style={{
                backgroundColor: "#282828",
                width: "100%",
                height: "71px",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "7px 22px",
                boxSizing: "border-box",
                gap: "26px",
              }}
            >
              <div
                style={{
                  width: "354px",
                  height: "54px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                  fontSize: "20px",
                  color: "#4B6CC2",
                }}
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
                  src={val?.ChannelImageUrl}
                />
                <div
                  style={{
                    position: "relative",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    width: "290px",
                    height: "27px",
                    flexShrink: "0",
                    flexWrap: "wrap",
                  }}
                >
                  {val?.ChannelName.slice(0, 20)}
                </div>
              </div>
              <div
                style={{
                  width: "200px",
                  height: "68px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    fontWeight: "400",
                    display: "flex",
                    alignItems: "center",
                    width: "200px",
                    height: "39px",
                    flexShrink: "0",
                    color: "#fff",
                  }}
                >
                  {val?.Summaries}
                </div>
              </div>
              <div
                style={{
                  width: "200px",
                  height: "68px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    fontWeight: "400",
                    display: "flex",
                    alignItems: "center",
                    width: "200px",
                    height: "39px",
                    flexShrink: "0",
                    color: "#fff",
                  }}
                >
                  {val?.Predictions}
                </div>
              </div>
              <div
                style={{
                  width: "200px",
                  height: "68px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    fontWeight: "400",
                    display: "flex",
                    alignItems: "center",
                    width: "200px",
                    height: "39px",
                    flexShrink: "0",
                    color: "#fff",
                  }}
                >
                  {val?.PredictionAccuracy}
                </div>
              </div>
              <div
                style={{
                  width: "115px",
                  height: "58px",
                  overflow: "hidden",
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  padding: "21px 1px",
                  boxSizing: "border-box",
                }}
                onClick={() => handleSubSection(index)}
              >
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
