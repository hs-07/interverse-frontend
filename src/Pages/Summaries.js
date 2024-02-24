import React, { useEffect, useState } from "react";
// import "../styles/summaries.css";
// import "../styles/summariesSubSection.css";
import {
  allSummarySources,
  getSummaryPeople,
  getSummaryPrediction,
  getSummarySummaries,
  getFullTranscript,
} from "../services/summaries.services";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const myComponentStyle = {
  fontFamily: "Roboto, sans-serif", // Use the font name specified in Google Fonts
};
function Summaries() {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState([]);
  const [peopleData, setPeopleData] = useState([]);
  const [predictionData, setPredictionData] = useState([]);
  const [summariesData, setSummariesData] = useState([]);
  const [fullTranscriptData, setFullTranscriptData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState("");
  const [subSection, setSubSection] = useState(false);
  const [subSectionIndex, setSubSectionIndex] = useState(false);

  useEffect(() => {
    allSummarySources()
      .then((res) => {
        console.log("res::::", res.data);
        setData([...res.data]);
        setData(
          [...res.data].map((obj) => ({
            ...obj,
            predictionActive: false,
            peopleActive: false,
            summariesActive: false,
            fullTranscriptActive: false,
          }))
        );
      })
      .catch((err) => {
        console.log("err:::::::", err);
      });
  }, []);
  const convertMinsToHrsMins = (minutes) => {
    let h = Math.floor(minutes / 60);
    let m = minutes % 60;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    return `${h}:${m}:00`; // Assumes no seconds part, so it's always '00'
  };

  const onClickPrediction = (index) => {
    const arr = [...data];
    arr[index].predictionActive = !arr[index].predictionActive;
    setData([...arr]);
    if (data[index].predictionActive == false) {
      return;
    }
    setData(
      [...data].map((obj, ind) => {
        if (ind == index) {
          return {
            ...obj,
            predictionActive: true,
            peopleActive: false,
            summariesActive: false,
            fullTranscriptActive: false,
          };
        } else {
          return {
            ...obj,
            predictionActive: false,
            peopleActive: false,
            summariesActive: false,
            fullTranscriptActive: false,
          };
        }
      })
    );
    setActiveIndex(index);
    setLoading(true);
    getSummaryPrediction(data[index].source_id)
      .then((res) => {
        console.log("res setPredictionData:::::::", res.data);
        setPredictionData([...res.data]);
        setActiveIndex("");
        setLoading(false);
      })
      .catch((err) => {
        console.log("err:::::", err);
      });
  };
  const onClickPeople = (index) => {
    const arr = [...data];
    arr[index].peopleActive = !arr[index].peopleActive;
    setData([...arr]);
    if (data[index].peopleActive == false) {
      return;
    }
    setData(
      [...data].map((obj, ind) => {
        if (ind == index) {
          return {
            ...obj,
            predictionActive: false,
            peopleActive: true,
            summariesActive: false,
            fullTranscriptActive: false,
          };
        } else {
          return {
            ...obj,
            predictionActive: false,
            peopleActive: false,
            summariesActive: false,
            fullTranscriptActive: false,
          };
        }
      })
    );
    setActiveIndex(index);
    setLoading(true);
    getSummaryPeople(data[index].source_id)
      .then((res) => {
        console.log("res people:::::::", res.data);
        setPeopleData([...res.data]);
        setActiveIndex("");
        setLoading(false);
      })
      .catch((err) => {
        console.log("err:::::", err);
      });
  };

  const onClickSummaries = (index) => {
    const arr = [...data];
    arr[index].summariesActive = !arr[index].summariesActive;
    setData([...arr]);
    if (data[index].summariesActive == false) {
      return;
    }
    setData(
      [...data].map((obj, ind) => {
        if (ind == index) {
          return {
            ...obj,
            predictionActive: false,
            peopleActive: false,
            summariesActive: true,
            fullTranscriptActive: false,
          };
        } else {
          return {
            ...obj,
            predictionActive: false,
            peopleActive: false,
            summariesActive: false,
            fullTranscriptActive: false,
          };
        }
      })
    );
    setActiveIndex(index);
    setLoading(true);
    getSummarySummaries(data[index].source_id)
      .then((res) => {
        console.log("res setPredictionData:::::::", res.data);
        setSummariesData([...res.data]);
        setActiveIndex("");
        setLoading(false);
      })
      .catch((err) => {
        console.log("err:::::", err);
      });
  };
  const onClickFullTranscript = (index) => {
    const arr = [...data];
    arr[index].fullTranscriptActive = !arr[index].fullTranscriptActive;
    setData([...arr]);
    if (data[index].fullTranscriptActive == false) {
      return;
    }
    setData(
      [...data].map((obj, ind) => {
        if (ind == index) {
          return {
            ...obj,
            predictionActive: false,
            peopleActive: false,
            summariesActive: false,
            fullTranscriptActive: true,
          };
        } else {
          return {
            ...obj,
            predictionActive: false,
            peopleActive: false,
            summariesActive: false,
            fullTranscriptActive: false,
          };
        }
      })
    );
    setActiveIndex(index);
    setLoading(true);
    getFullTranscript(data[index].source_id)
      .then((res) => {
        console.log("res setPredictionData:::::::", res.data);
        setFullTranscriptData([...res.data]);
        // setFullTranscriptData([]);
        setActiveIndex("");
        setLoading(false);
      })
      .catch((err) => {
        console.log("err:::::", err);
      });
  };
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
        fontSize: "14px",
      }}
    >
      {/* Column Starts */}
      {data.map((val, index) => {
        return (
          <>
            <div
              style={{
                backgroundColor: "#282828",
                width: "100%",
                height: "54px",
                overflow: "hidden",
                flexShrink: "0",
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr 1fr",
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
                  width: "315px",
                  height: "40px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  color: "#4B6CC2",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    left: 0,
                    width: "27px",
                    height: "18px",
                    paddingRight: "12px",
                  }}
                  alt=""
                  src="/youtube.svg"
                />
                <div
                  style={{
                    width: "259px",
                    height: "40px",
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
                      width: "259px",
                      height: "20px",
                      flexShrink: "0",
                    }}
                  >
                    {val.source_title.slice(0, 30)}..
                  </div>
                  <div
                    style={{
                      position: "relative",
                      color: "#aeaeae",
                      display: "flex",
                      alignItems: "center",
                      width: "259px",
                      height: "20px",
                      flexShrink: "0",
                    }}
                  >
                    Views: {Math.round(val?.views / 1000000)}M | Length:{" "}
                    {convertMinsToHrsMins(val.duration)}
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  width: "131px",
                  height: "40px",
                  color: "#aeaeae",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "131px",
                    height: "40px",
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
                      width: "131px",
                      height: "20px",
                      flexShrink: "0",
                    }}
                  >
                    # of Predictions
                  </div>
                  <div
                    style={{
                      position: "relative",
                      color: "#4B6CC2",
                      display: "flex",
                      alignItems: "center",
                      width: "131px",
                      height: "20px",
                      flexShrink: "0",
                    }}
                  >
                    {val.number_of_predictions}
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "153px",
                  height: "40px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  color: "#aeaeae",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    width: "120px",
                    height: "20px",
                    flexShrink: "0",
                  }}
                >
                  Publish Date
                </div>
                <div
                  style={{
                    position: "relative",
                    color: "#4B6CC2",
                    display: "flex",
                    alignItems: "center",
                    width: "120px",
                    height: "20px",
                    flexShrink: "0",
                  }}
                >
                  {val.publication_date.toString().slice(0, 10)}
                </div>
              </div>
              <div
                style={{
                  width: "124px",
                  height: "40px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "9px",
                  cursor: "pointer",
                }}
                onClick={() => onClickSummaries(index)}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    width: "86px",
                    height: "20px",
                    flexShrink: "0",
                  }}
                >
                  Summaries
                </div>
                {val?.summariesActive ? (
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
              <div
                style={{
                  width: "109px",
                  height: "40px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "9px",
                  cursor: "pointer",
                }}
                onClick={() => onClickPrediction(index)}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    width: "79px",
                    height: "20px",
                    flexShrink: "0",
                  }}
                >
                  Predictions
                </div>
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
              <div
                style={{
                  width: "109px",
                  height: "40px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "9px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  onClickPeople(index);
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    width: "79px",
                    height: "20px",
                    flexShrink: "0",
                  }}
                >
                  People
                </div>
                {val?.peopleActive ? (
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
              <div
                style={{
                  width: "123px",
                  height: "40px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "9px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  onClickFullTranscript(index);
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    width: "94px",
                    height: "20px",
                    flexShrink: "0",
                  }}
                >
                  Full Transcript
                </div>
                {val?.fullTranscriptActive ? (
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
            {/* Column Ends */}
            {/* Column Description Starts */}
            {!loading && val?.peopleActive ? (
              <>
                {peopleData.map((val, index) => {
                  return (
                    <div
                      style={{
                        backgroundColor: "#181818",
                        width: "100%",
                        height: "112px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "10px 22px",
                        boxSizing: "border-box",
                        gap: "16px",
                        fontSize: "24px",
                        color: "#4B6CC2",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          borderRadius: "8px",
                          width: "87px",
                          height: "86px",
                          overflow: "hidden",
                          flexShrink: "0",
                        }}
                      >
                        <img
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "87px",
                            height: "86px",
                            objectFit: "cover",
                          }}
                          alt=""
                          src={val?.image_url}
                        />
                      </div>
                      <div
                        style={{
                          width: "978px",
                          height: "82px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          gap: "14px",
                        }}
                      >
                        <b
                          style={{
                            position: "relative",
                            lineHeight: "80px",
                            display: "flex",
                            alignItems: "center",
                            width: "1015px",
                            height: "20px",
                            flexShrink: "0",
                            fontSize: "19px",
                          }}
                        >
                          {val?.first_name.startsWith("Unknown")
                            ? "Unknown"
                            : val?.first_name + " " + val?.last_name}
                        </b>
                        <div
                          style={{
                            width: "978px",
                            height: "48px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "60px",
                            fontSize: "17px",
                            color: "#fff",
                          }}
                        >
                          <div
                            style={{
                              width: "116px",
                              height: "40px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                fontWeight: "400",
                                display: "flex",
                                alignItems: "center",
                                width: "116px",
                                height: "20px",
                                flexShrink: "0",
                              }}
                            >
                              #85
                            </div>
                            <div
                              style={{
                                position: "relative",
                                fontSize: "16px",
                                color: "#aeaeae",
                                display: "flex",
                                alignItems: "center",
                                width: "116px",
                                height: "20px",
                                flexShrink: "0",
                              }}
                            >
                              Ranked
                            </div>
                          </div>
                          <div
                            style={{
                              width: "116px",
                              height: "40px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                fontWeight: "400",
                                display: "flex",
                                alignItems: "center",
                                width: "116px",
                                height: "20px",
                                flexShrink: "0",
                              }}
                            >
                              {Math.floor(val?.accuracy_score)}%
                            </div>
                            <div
                              style={{
                                position: "relative",
                                fontSize: "16px",
                                color: "#aeaeae",
                                display: "flex",
                                alignItems: "center",
                                width: "116px",
                                height: "20px",
                                flexShrink: "0",
                              }}
                            >
                              Score
                            </div>
                          </div>
                          <div
                            style={{
                              width: "116px",
                              height: "40px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                fontWeight: "400",
                                display: "flex",
                                alignItems: "center",
                                width: "160px",
                                height: "20px",
                                flexShrink: "0",
                              }}
                            >
                              {val?.total_predictions}
                            </div>
                            <div
                              style={{
                                position: "relative",
                                fontSize: "16px",
                                color: "#aeaeae",
                                display: "flex",
                                alignItems: "center",
                                width: "116px",
                                height: "20px",
                                flexShrink: "0",
                              }}
                            >
                              Predictions
                            </div>
                          </div>
                          <div
                            style={{
                              width: "116px",
                              height: "40px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                fontWeight: "400",
                                display: "flex",
                                alignItems: "center",
                                width: "160px",
                                height: "20px",
                                flexShrink: "0",
                              }}
                            >
                              {val?.pending_predictions}
                            </div>
                            <div
                              style={{
                                position: "relative",
                                fontSize: "16px",
                                color: "#aeaeae",
                                display: "flex",
                                alignItems: "center",
                                width: "116px",
                                height: "20px",
                                flexShrink: "0",
                              }}
                            >
                              Pending
                            </div>
                          </div>
                          <div
                            style={{
                              width: "164px",
                              height: "40px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                fontWeight: "400",
                                display: "flex",
                                alignItems: "center",
                                width: "116px",
                                height: "20px",
                                flexShrink: "0",
                              }}
                            >
                              {val?.episode_predictions}
                            </div>
                            <div
                              style={{
                                position: "relative",
                                fontSize: "16px",
                                color: "#aeaeae",
                                display: "flex",
                                alignItems: "center",
                                width: "164px",
                                height: "20px",
                                flexShrink: "0",
                              }}
                            >{`Episode Predictions `}</div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          borderRadius: "8px",
                          backgroundColor: "#282828",
                          width: "124px",
                          height: "41px",
                          overflow: "hidden",
                          flexShrink: "0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "17px 34px",
                          boxSizing: "border-box",
                          textAlign: "center",
                          fontSize: "14px",
                        }}
                      >
                        <Button
                          style={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "125px",
                            flexShrink: "0",
                            color: "#4B6CC2",
                            backgroundColor: "#282828",
                          }}
                          onClick={() =>
                            navigate("/Profiles", {
                              state: { id: val?.user_id },
                            })
                          }
                        >
                          Full Profile
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : null}

            {!loading && val?.predictionActive ? (
              <div
                style={{
                  backgroundColor: "#181818",
                  width: "100%",
                  height: "332px",
                  overflow: "hidden",
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "18px 22px",
                  boxSizing: "border-box",
                  gap: "26px",
                  fontSize: "16px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "314px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "4px",
                    overflowY: "scroll",
                  }}
                >
                  {predictionData.map((val, index) => {
                    return (
                      <>
                        {" "}
                        <div
                          style={{
                            width: "687px",
                            height: "40px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            padding: "24px 0px",
                            boxSizing: "border-box",
                            cursor: "pointer",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              fontWeight: "500",
                              display: "flex",
                              alignItems: "center",
                              width: "664px",
                              height: "30px",
                              flexShrink: "0",
                            }}
                          >
                            {val?.prediction.slice(0, 40)}...
                          </div>
                          <div
                            onClick={() => {
                              // setSubSection((prev) => !prev);
                              console.log(index);
                              setSubSectionIndex(index);
                            }}
                          >
                            {subSectionIndex === index ? (
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
                        {subSectionIndex === index ? (
                          <div
                            style={{
                              paddingRight: "20px",
                              marginTop: "10px",
                              color: "#AEAEAE",
                              fontFamily: "inter",
                              fontSize: "14px",
                            }}
                          >
                            {val?.prediction}
                            <p style={{ color: "#4B6CC2" }}>
                              Status :
                              <span
                                style={{
                                  color:
                                    val?.prediction_validation == "TRUE"
                                      ? "green"
                                      : val?.prediction_validation == "FALSE"
                                      ? "#E72E2E"
                                      : val?.prediction_validation ==
                                        "PARTIALLY TRUE"
                                      ? "#2DD22A"
                                      : val?.prediction_validation == "PENDING"
                                      ? "#374C98"
                                      : "#D29D15",
                                  fontFamily: "inter",
                                  fontSize: "14px",
                                }}
                              >
                                {" "}
                                {val?.prediction_validation}
                              </span>
                            </p>
                            <p style={{ color: "#4B6CC2" }}>
                              Settled Date :{" "}
                              <span
                                style={{ fontSize: "14px", color: "#AEAEAE" }}
                              >
                                {val?.fixed_date}
                              </span>
                            </p>
                          </div>
                        ) : null}
                      </>
                    );
                  })}
                </div>

                <div
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
                    src={`https://youtube.com/embed/${predictionData[subSectionIndex]?.youtube_id}?start=${predictionData[subSectionIndex]?.youtube_start_time}`}
                  />
                  {console.log(
                    "Video ID:",
                    predictionData[subSectionIndex]?.youtube_id
                  )}
                  {console.log(
                    "Start time:",
                    predictionData[subSectionIndex]?.youtube_start_time
                  )}
                </div>
              </div>
            ) : null}
            {!loading && val?.summariesActive ? (
              <div
                style={{
                  backgroundColor: "#181818",
                  width: "100%",
                  height: "332px",
                  overflow: "hidden",
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "18px 22px",
                  boxSizing: "border-box",
                  gap: "26px",
                  fontSize: "16px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "314px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "4px",
                    overflowY: "scroll",
                  }}
                >
                  {summariesData.map((val, index) => {
                    return (
                      <>
                        <div
                          style={{
                            width: "687px",
                            height: "auto",
                            minHeight: "40px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            padding: "24px 0px",
                            boxSizing: "border-box",
                            cursor: "pointer",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                fontWeight: "500",
                                display: "flex",
                                alignItems: "center",
                                width: "664px",
                                height: "30px",
                                flexShrink: "0",
                                fontSize: "16px",
                                fontFamily: "inter",
                              }}
                            >
                              <span style={{ color: "#6495ED" }}>
                                {"["}
                                {val?.time}
                                {"]"}&nbsp;
                              </span>
                              {val?.summary_title.slice(0, 60)}...
                            </div>
                            <div
                              onClick={() => {
                                // setSubSection((prev) => !prev);
                                setSubSectionIndex(index);
                              }}
                            >
                              {subSectionIndex === index ? (
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
                        {subSectionIndex === index ? (
                          <div
                            style={{
                              paddingRight: "20px",
                              marginTop: "10px",
                              color: "#AEAEAE",
                              fontFamily: "inter",
                              fontSize: "16px",
                            }}
                          >
                            {val?.summary_text}
                          </div>
                        ) : null}
                      </>
                    );
                  })}
                </div>

                <div
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
                    src={`https://youtube.com/embed/${summariesData[subSectionIndex]?.youtube_id}?start=${summariesData[subSectionIndex]?.youtube_start_time}`}
                  />
                  {console.log(
                    "Video ID:",
                    summariesData[subSectionIndex]?.youtube_id
                  )}
                  {console.log(
                    "Start time:",
                    summariesData[subSectionIndex]?.youtube_start_time
                  )}
                </div>
              </div>
            ) : null}
            {!loading && val?.fullTranscriptActive ? (
              <>
                {fullTranscriptData.map((val, index) => {
                  return (
                    <div
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#282828" : "#202020",
                        width: "100%",
                        // Removed overflow: "hidden" to allow the container to grow with the content
                        flexShrink: "0",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center", // This will vertically center the items in the container
                        justifyContent: "flex-start",
                        padding: "15px 15px", // Adjust the top and bottom padding as needed for buffer
                        boxSizing: "border-box", // Makes sure the padding is included in the width
                        gap: "26px",
                        color: "#4B6CC2",
                      }}
                    >
                      <div
                        style={{
                          width: "60px",
                          height: "40px",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: "259px",
                            height: "40px",
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
                              width: "259px",
                              height: "20px",
                              flexShrink: "0",
                            }}
                          >
                            {val?.time_range}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          width: "131px",
                          height: "40px",
                          color: "#aeaeae",
                        }}
                      >
                        <div
                          style={{
                            width: "90%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "16px",
                            color: "#fff",
                          }}
                        >
                          {/* Profile Image with hover-over username */}
                          {val?.image_url ? (
                            <img
                              src={val.image_url}
                              alt={val.user_name}
                              title={
                                val.user_name.startsWith("Unknown")
                                  ? ""
                                  : val.user_name
                              } // Tooltip on hover
                              style={{
                                width: "50px", // Smaller size
                                height: "50px", // Ensure width and height are the same for a circle
                                borderRadius: "50%", // Makes the image circular
                                border: "2px solid #fff", // Thin white border, adjust color and width as needed
                                objectFit: "cover", // Ensures the image covers the area without stretching
                                marginBottom: "10px", // Space below the image
                                cursor: "pointer", // Changes cursor to indicate hover effect
                              }}
                            />
                          ) : null}
                        </div>
                      </div>
                      <div
                        style={{
                          width: "90%",
                          // height: "40px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "left",
                          justifyContent: "center",
                          fontSize: "16px",
                          color: "#fff",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            width: "90%",
                            // height: "41px",
                            flexShrink: "0",
                            flexWrap: "wrap",
                          }}
                        >
                          {val?.labelled_segments}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : null}

            {activeIndex == index && loading ? (
              <div
                style={{
                  display: "flex",

                  // alignContent: "center",
                  // backgroundColor: "red",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <CircularProgress />
              </div>
            ) : null}
          </>
        );
      })}
      {/* Column Description ENds */}
    </div>
  );
}

export default Summaries;
