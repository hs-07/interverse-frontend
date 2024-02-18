import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import { Button } from "@mui/material";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "../styles/profiles.css";
import {
  getAllProfiles,
  getProfilesBySubjects,
  getProfilesPredictions,
} from "../services/Profiles.service";
import CircularProgress from "@mui/material/CircularProgress";
import { useLocation } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Profiles() {
  const location = useLocation();

  const [profilesData, setProfilesData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [predictionData, setPredictionData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState("");

  useEffect(() => {
    getAllProfiles()
      .then((res) => {
        // console.log("res:::::::", res.data);
        setProfilesData([...res.data]);
        setProfilesData(
          [...res.data].map((obj) => ({
            ...obj,
            profileActive: false,
          }))
        );
        if (location?.state?.id != undefined) {
          setProfilesData(
            [...res.data].filter((obj) => obj.user_id === location?.state?.id)
          );
        }
      })
      .catch((err) => {
        console.log("err::::", err);
      });
  }, []);

  const handleProfileToggle = (index, id) => {
    const arr = [...profilesData];
    arr[index].profileActive = !arr[index].profileActive;
    setProfilesData([...arr]);
    if (profilesData[index].profileActive == false) {
      return;
    }
    setProfilesData(
      [...profilesData].map((obj, ind) => {
        if (ind == index) {
          return {
            ...obj,
            profileActive: true,
          };
        } else {
          return {
            ...obj,
            profileActive: false,
          };
        }
      })
    );
    setActiveIndex(index);
    setLoading(true);
    Promise.all([getUserSubject(id), getUserPredictions(id)]).then((res) => {
      // console.log("res get data:::::", res);
    });
  };

  const getUserSubject = async (id) => {
    getProfilesBySubjects(id)
      .then((res) => {
        setSubjectData([...res.data]);
        setLoading(false);
        setActiveIndex("");
        console.log("res getProfileSubject::::", res.data);
      })
      .catch((err) => {
        console.log("err::::", err);
      });
  };
  const getUserPredictions = async (id) => {
    getProfilesPredictions(id)
      .then((res) => {
        setPredictionData([...res.data]);
        console.log("res getProfilePredictions::::", res.data);
        setLoading(false);
        setActiveIndex("");
      })
      .catch((err) => {
        console.log("err getProfilePredictions::::", err);
      });
  };
  return (
    <div className="custom-container">
      {/* User Data Row Starts */}
      {profilesData?.map((val, index) => {
        return (
          <>
            <div className="custom-header">
              <div className="custom-box">
                <img className="custom-image" alt="" src={val?.image_url} />
              </div>
              <div className="custom-Sub-container">
                <b className="custom-element">
                  {val?.first_name} {val?.last_name}
                </b>
                <div
                  style={{
                    width: "1015px",
                    height: "48px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "10px",
                    fontSize: "16px",
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
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        width: "116px",
                        height: "20px",
                        flexShrink: "0",
                      }}
                    >
                      #{index + 1}
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
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        width: "116px",
                        height: "20px",
                        flexShrink: "0",
                      }}
                    >
                      {Math.floor(val?.prediction_accuracy)}%
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
                      Accuracy
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
                        fontWeight: "500",
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
                        width: "171px",
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
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        width: "160px",
                        height: "20px",
                        flexShrink: "0",
                      }}
                    >
                      {val?.all_pending_predictions}
                    </div>
                    <div
                      style={{
                        position: "relative",
                        fontSize: "16px",
                        color: "#aeaeae",
                        display: "flex",
                        alignItems: "center",
                        width: "160px",
                        height: "20px",
                        flexShrink: "0",
                      }}
                    >
                      Pending
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
                      fontSize: "16px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        width: "116px",
                        height: "20px",
                        flexShrink: "0",
                        color:
                          val?.total_user_score < 0 ? "#e87d7d" : "inherit",
                      }}
                    >
                      {Math.floor(val?.total_user_score)}
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
                      Points
                    </div>
                  </div>
                  <div
                    style={{
                      width: "262px",
                      height: "47px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "28px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        width: "123px",
                        height: "46px",
                        flexShrink: "0",
                        color: "#AEAEAE",
                      }}
                    >
                      Available on :
                    </div>
                    <img
                      style={{
                        position: "relative",
                        width: "27px",
                        height: "18px",
                      }}
                      alt=""
                      src="/youtube.svg"
                    />
                    <img
                      style={{
                        position: "relative",
                        width: "23px",
                        height: "18px",
                      }}
                      alt=""
                      src="/twitterlogo.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  borderRadius: "8px",
                  height: "70px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "35px 25px",
                  boxSizing: "border-box",
                }}
                onClick={() => handleProfileToggle(index, val?.user_id)}
              >
                {val?.profileActive ? (
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
            {!loading && val?.profileActive ? (
              <>
                {subjectData?.map((val, index) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                        // gap: "16px",
                        // backgroundColor: "pink"
                      }}
                    >
                      {/* Bar Graph Section Starts */}
                      <div
                        style={{
                          display: "flex",
                          // flex: 1,
                          backgroundColor: "#282828",
                          width: "calc(100% - 382px)",
                          flexDirection: "column",
                          color: "#fff",
                        }}
                      >
                        <div
                          style={{
                            borderRadius: "30px",
                            width: "100%",
                            height: "40px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "5px 5px",
                            boxSizing: "border-box",
                            marginBottom: "25px",
                            // gap: "150px",
                            // backgroundColor: "pink",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              // justifyContent: "flex-start",
                              fontWeight: "400",
                              display: "flex",
                              alignItems: "center",
                              width: "50%",
                              height: "24px",
                              flexShrink: "0",
                              paddingLeft: "35px",
                            }}
                          >
                            Predictions by Category
                          </div>
                          <div
                            style={{
                              borderRadius: "4px",
                              // backdropFilter: "blur(30px)",
                              width: "50%",
                              height: "38px",
                              overflow: "hidden",
                              flexShrink: "0",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "11px",
                              textAlign: "center",
                              fontSize: "12px",
                              paddingTop: "10px",
                              // paddingRight: "55px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: "8px",
                                textAlign: "left",
                                fontSize: "16px",
                                fontFamily: "Poppins",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    lineHeight: "24px",
                                    color: "#AEAEAE",
                                    fontFamily: "inter",
                                  }}
                                >
                                  Sort by
                                </div>
                              </div>
                              <div
                                style={{
                                  position: "relative",
                                  borderRadius: "9999px",
                                  backgroundColor: "#e5fa78",
                                  width: "34px",
                                  height: "20px",
                                  overflow: "hidden",
                                  flexShrink: "0",
                                  display: "none",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    height: "80%",
                                    width: "47.06%",
                                    top: "10%",
                                    right: "5.88%",
                                    bottom: "10%",
                                    left: "47.06%",
                                    borderRadius: "9999px",
                                    backgroundColor: "#1f1f21",
                                    overflow: "hidden",
                                  }}
                                />
                              </div>
                            </div>

                            <Button
                              style={{
                                borderRadius: "30px",
                                backgroundColor: "#4B6CC2",
                                width: "60px",
                                height: "28px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "8px",
                                boxSizing: "border-box",
                                position: "relative",
                                letterSpacing: "0.08em",
                                color: "#fff",
                                fontSize: "12px",
                              }}
                            >
                              All
                            </Button>

                            <Button
                              style={{
                                borderRadius: "30px",
                                backgroundColor: "#181818",
                                width: "60px",
                                height: "28px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "8px",
                                boxSizing: "border-box",
                                position: "relative",
                                letterSpacing: "0.08em",
                                color: "#fff",
                                fontSize: "12px",
                              }}
                            >
                              True
                            </Button>
                            <Button
                              style={{
                                borderRadius: "30px",
                                backgroundColor: "#181818",
                                width: "60px",
                                height: "28px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "8px",
                                boxSizing: "border-box",
                                position: "relative",
                                letterSpacing: "0.08em",
                                color: "#fff",
                                fontSize: "12px",
                              }}
                            >
                              False
                            </Button>
                            <Button
                              style={{
                                borderRadius: "30px",
                                backgroundColor: "#181818",
                                width: "85px",
                                height: "28px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "8px",
                                boxSizing: "border-box",
                                position: "relative",
                                letterSpacing: "0.08em",
                                color: "#fff",
                                fontSize: "12px",
                              }}
                            >
                              Pending
                            </Button>
                          </div>
                        </div>
                        {/* Lower Bar CHart Starts */}
                        <div
                          style={{
                            width: "auto",
                            height: "275px",
                            // overflow: "hidden",
                            // flexShrink: "0",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-end",
                            justifyContent: "flex-start",
                            padding: "18px 16px",
                            boxSizing: "border-box",
                            gap: "79px",
                            // marginRight: "2px",
                            textAlign: "center",
                            fontSize: "14px",
                          }}
                        >
                          {/* <div
                          {/* // here */}
                          <Bar
                            style={{ width: "100%" }}
                            plugins={[ChartDataLabels]} // Use the datalabels plugin
                            options={{
                              plugins: {
                                legend: {
                                  display: false,
                                },
                                datalabels: {
                                  font: {
                                    display: false,
                                    size: 0,
                                    weight: "bold",
                                  },
                                  formatter: function (value, context) {
                                    return value;
                                  },
                                },
                              },
                              maintainAspectRatio: false,
                              scales: {
                                x: {
                                  barThickness: 3,
                                  categoryPercentage: 1,
                                  ticks: {
                                    color: "#fff",
                                  },
                                  grid: {
                                    display: false,
                                  },
                                },
                                y: {
                                  beginAtZero: true,
                                  ticks: {
                                    color: "#fff",
                                  },
                                  grid: {
                                    display: false,
                                  },
                                },
                              },
                              elements: {
                                bar: {
                                  borderRadius: 7,
                                  barThickness: 5,
                                  barPercentage: 0.1,
                                },
                              },
                            }}
                            data={{
                              labels: subjectData[0]?.categories?.map(
                                (i) => i.Category
                              ),
                              datasets: [
                                {
                                  label: "",
                                  data: subjectData[0]?.categories?.map(
                                    (i) => i.count
                                  ),
                                  backgroundColor: [
                                    "#FFB085",
                                    "#9467DC",
                                    "#4172D0",
                                    "#3D42C3",
                                    "#316DE3",
                                    "#FF6B7C",
                                    "#2AE6CC",
                                  ],
                                },
                              ],
                            }}
                          />
                        </div>
                        {/* Lower Bar Chart Starts */}
                      </div>
                      {/* Bar Graph Section Starts */}
                      {/* Donught Graph Starts */}
                      <div
                        style={{
                          backgroundColor: "#282828",
                          width: "380px",
                          height: "341px",
                          overflow: "hidden",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "16px 36px",
                          boxSizing: "border-box",
                          gap: "16px",
                          fontWeight: "400",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            top: -10,
                            left: -65,
                          }}
                        >
                          <p style={{ color: "#fff", textAlign: "start" }}>
                            Predictions by Plaform
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            height: "250px",
                            width: "100%",
                            // backgroundColor: "red",
                            justifyContent: "center",
                            // alignItems: "center",
                          }}
                        >
                          <Doughnut
                            data={{
                              labels: subjectData[0]?.source_types.map(
                                (st) => st.source
                              ),
                              datasets: [
                                {
                                  label: "Source Types",
                                  data: subjectData[0]?.source_types.map(
                                    (st) => parseFloat(st.percentage) / 100
                                  ), // Extract all percentages
                                  backgroundColor: [
                                    "#E72E2E", // For YouTube (example)
                                    "#4B6CC2", // For Twitter (example)
                                    "#333FFF", // For Spotify (example)
                                    // ... Add more colors if there are more sources
                                  ],
                                  borderColor: "transparent",
                                },
                              ],
                            }}
                            options={{
                              layout: {
                                padding: {
                                  top: 0, // Adjust this value to create more or less space between the chart and the legend
                                },
                              },
                              plugins: {
                                legend: {
                                  display: true,
                                  position: "bottom",
                                  align: "bottom",
                                  labels: {
                                    boxWidth: 15,
                                    padding: 20,
                                    usePointStyle: true,
                                  },
                                },
                              },
                            }}
                          />
                        </div>
                      </div>
                      {/* Donught Graph Ends */}
                    </div>
                  );
                })}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    // overflowY: "scroll",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "2px",
                    color: "#4B6CC2",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#282828",
                      width: "100%",
                      height: "74px",
                      overflow: "hidden",
                      flexShrink: "0",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "10px 25px",
                      boxSizing: "border-box",
                      gap: "36px",
                      fontSize: "24px",
                      color: "#fff",
                    }}
                  >
                    <b
                      style={{
                        position: "relative",
                        lineHeight: "80px",
                        display: "flex",
                        alignItems: "center",
                        width: "745px",
                        height: "43px",
                        flexShrink: "0",
                        // left: -25,
                      }}
                    >
                      Predictions
                    </b>

                    <div>
                      <input
                        style={{
                          borderRadius: "25px",
                          border: "1px solid #6b7465",
                          boxSizing: "border-box",
                          width: "444px",
                          height: "42px",
                          overflow: "hidden",
                          flexShrink: "0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          padding: "3px 20px",
                          gap: "12px",
                          fontSize: "16px",
                          backgroundColor: "#282828",
                          color: "#fff",
                        }}
                        placeholder="Search"
                      />
                      <img
                        style={{
                          position: "absolute",
                          width: "18.85px",
                          height: "18.85px",
                          top: 27,
                          right: 80,
                        }}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                  {/* hgjhgjhgjhgh */}
                  <div
                    style={{
                      backgroundColor: "#282828",
                      width: "100%",
                      height: "84px",
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
                        backgroundColor: "#282828",
                        width: "130px",
                        height: "84px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        textAlign: "center",
                        color: "#181818",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          fontWeight: "400",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "130px",
                          height: "25px",
                          flexShrink: "0",
                          fontSize: "15px",
                          color: "#4B6CC2",
                          fontFamily: "inter",
                          fontWeight: "500",
                          fontSize: "22px",
                        }}
                      >
                        Status
                      </div>
                    </div>
                    <div
                      style={{
                        width: "168px",
                        height: "40px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "16px",
                      }}
                    >
                      <div
                        style={{
                          width: "158px",
                          height: "40px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          color: "#4B6CC2",
                          fontFamily: "inter",
                          fontWeight: "500",
                          fontSize: "34px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            fontWeight: "400",
                            display: "flex",
                            alignItems: "center",
                            width: "142px",
                            height: "20px",
                            flexShrink: "0",
                            fontSize: "22px",
                          }}
                        >
                          Source
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "142px",
                        height: "84px",
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
                          display: "flex",
                          alignItems: "center",
                          width: "168px",
                          height: "39px",
                          flexShrink: "0",
                          fontSize: "18px",
                          color: "#4B6CC2",
                          fontFamily: "inter",
                          fontWeight: "500",
                          fontSize: "22px",
                        }}
                      >
                        Topic
                      </div>
                    </div>
                    <div
                      style={{
                        width: "360px",
                        height: "84px",
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
                          display: "flex",
                          alignItems: "center",
                          width: "360px",
                          height: "84px",
                          flexShrink: "0",
                          color: "#4B6CC2",
                          fontFamily: "inter",
                          fontWeight: "500",
                          fontSize: "22px",
                        }}
                      >
                        Predictions
                      </div>
                    </div>
                    <div
                      style={{
                        width: "150px",
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
                          width: "240px",
                          height: "20px",
                          flexShrink: "0",
                          color: "#4B6CC2",
                          fontFamily: "inter",
                          fontWeight: "500",
                          fontSize: "22px",
                        }}
                      >
                        Date Made
                      </div>
                    </div>
                    <div
                      style={{
                        width: "150px",
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
                          width: "120px",
                          height: "20px",
                          flexShrink: "0",
                          color: "#4B6CC2",
                          fontFamily: "inter",
                          fontWeight: "500",
                          fontSize: "22px",
                        }}
                      >
                        Settles
                      </div>
                    </div>
                  </div>
                  {/* jjkkjhjkhjkhjkhjkhjkhjk */}
                  {predictionData.map((val, index) => {
                    return (
                      <div
                        style={{
                          backgroundColor: "#282828",
                          width: "100%",
                          height: "84px",
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
                            backgroundColor:
                              val?.prediction_validation === "PENDING"
                                ? "#374C98"
                                : val?.prediction_validation === "TRUE"
                                ? "#23B678"
                                : val?.prediction_validation === "UNDETERMINED"
                                ? "#D29D15"
                                : val?.prediction_validation ===
                                  "PARTIALLY TRUE"
                                ? "#388E3C"
                                : "#E72E2E",
                            width: "130px",
                            height: "84px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            textAlign: "center",
                            color:
                              val?.prediction_validation === "PARTIALLY TRUE"
                                ? "#FFFFFF"
                                : "#fff",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              fontWeight: "400",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "130px",
                              height: "25px",
                              fontSize: "13px",
                              fontWeight: "500",
                            }}
                          >
                            {val?.prediction_validation}
                          </div>
                        </div>
                        <div
                          style={{
                            width: "168px",
                            height: "40px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "16px",
                          }}
                        >
                          {/* <img
                            style={{
                              position: "relative",
                              borderRadius: "25px",
                              width: "40px",
                              height: "40px",
                              overflow: "hidden",
                              flexShrink: "0",
                            }}
                            alt=""
                            src={val?.image_url}
                          /> */}
                          <img
                            style={{
                              position: "relative",
                              width: "27px",
                              height: "18px",
                            }}
                            alt=""
                            src="/youtube.svg"
                          />
                          <div
                            style={{
                              width: "158px",
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
                                fontWeight: "400",
                                display: "flex",
                                alignItems: "center",
                                width: "142px",
                                height: "20px",
                                flexShrink: "0",
                                fontSize: "18px",
                              }}
                            >
                              {val?.source_type}
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "142px",
                            height: "84px",
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
                              display: "flex",
                              alignItems: "center",
                              width: "168px",
                              height: "39px",
                              flexShrink: "0",
                              fontSize: "12px",
                            }}
                          >
                            {val?.category}
                          </div>
                        </div>
                        <div
                          style={{
                            width: "360px",
                            height: "84px",
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
                              display: "flex",
                              alignItems: "center",
                              width: "360px",
                              height: "84px",
                              flexShrink: "0",
                              fontSize: "12px",
                            }}
                          >
                            {val?.prediction.slice(0, 150)}
                          </div>
                        </div>
                        <div
                          style={{
                            width: "150px",
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
                              fontSize: "18px",
                            }}
                          >
                            {val?.publish_date}
                          </div>
                        </div>
                        <div
                          style={{
                            width: "150px",
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
                              width: "120px",
                              height: "20px",
                              flexShrink: "0",
                              fontSize: "18px",
                            }}
                          >
                            {val?.fixed_date}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
      {/* User Data Row Ends */}
    </div>
  );
}

export default Profiles;
