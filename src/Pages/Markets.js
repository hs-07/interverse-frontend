import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { getMarket, getMarketGraph } from "../services/Markets.service";
import CircularProgress from "@mui/material/CircularProgress";
import { useLocation } from "react-router-dom";
import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "../styles/markets.css";
import jsondata from "../jsondata/react_test.json";
import newjsondata from "../jsondata/inxy-22dec30.json";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
Chart.register(annotationPlugin);
function Markets() {
  const location = useLocation();

  // Generate a gradient for the background color
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState("");
  const [currentGraph, setCurrentGraph] = useState({});
  const backgroundColor = (context) => {
    const index = context.dataIndex || 0;
    const value = context.dataset.data[index];

    // Use the value to determine the gradient color
    return gradientColors[index];
  };
  const gradientColors = [
    "rgba(186, 255, 42, 0.03)",
    // "rgba(186, 255, 42, 0.05)",
    "rgba(75, 192, 192, 0.00)",
    "rgba(75, 192, 192, 0.00)",
  ];
  // fill: linear-gradient(180deg, rgba(186, 255, 42, 0.13) 0%, rgba(186, 255, 42, 0.00) 100%);
  // stroke-width: 1px;
  // stroke: #BAFF2A;
  useEffect(() => {
    getMarket()
      .then((res) => {
        console.log("res::::", res.data[0]);
        setMarketData([...res.data]);
        setMarketData(
          [...res.data].map((obj) => ({
            ...obj,
            peopleActive: false,
          }))
        );
      })
      .catch((err) => {
        console.log("err::::::::::", err);
      });
  }, []);
  const dateLabels = currentGraph?.labels?.map((timestamp) => {
    const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds
    return `${date.getDate()}-${date.toLocaleString("default", {
      month: "short",
    })}`;
  });

  const data = {
    labels: Array.from(new Set(dateLabels)),
    datasets: [
      {
        label: "Area Chart Example",
        fill: true,
        lineTension: 0.1,
        backgroundColor: backgroundColor, // Use the custom function
        borderColor: "#BAFF2A",
        borderWidth: 1,
        data: currentGraph?.values,
        pointRadius: 0,
      },
    ],
  };
  const onClickToggle = (index) => {
    const arr = [...marketData];
    arr[index].peopleActive = !arr[index].peopleActive;
    setMarketData([...arr]);
    if (marketData[index].peopleActive == false) {
      return;
    }
    setMarketData(
      [...marketData].map((obj, ind) => {
        if (ind == index) {
          return {
            ...obj,
            peopleActive: true,
          };
        } else {
          return {
            ...obj,
            peopleActive: false,
          };
        }
      })
    );
    setActiveIndex(index);
    setLoading(true);
    getMarketGraph(marketData[index]?.metadata?.event_ticker)
      .then((res) => {
        console.log("res graph:::::", res.data);
        setCurrentGraph(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err graph:::::", err);
      });
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "76px",
        left: "237px",
        height: "90vh",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "2px",
        fontSize: "20px",
        color: "#baff2a",
        minWidth: "calc(100% - 240px)",
        marginBottom: "80px",
        overflowStyle: "none",
      }}
    >
      {/* User Info Row Starts */}
      {marketData?.map((val, index) => {
        return (
          <>
            <div className="user-info-row">
              <div className="image-section">
                <img
                  className="user-image"
                  alt="user-image"
                  src={val?.image_url}
                />
              </div>
              <div className="title-section">
                <b className="title-section-text">
                  {val?.metadata.event_title}
                </b>
                <div
                  style={{
                    width: "660px",
                    height: "48px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "10px",
                    fontSize: "18px",
                    color: "#baff2a",
                  }}
                >
                  <div
                    style={{
                      width: "171px",
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
                      {val?.metadata.category}
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
                      Topic
                    </div>
                  </div>
                  <div
                    style={{
                      width: "171px",
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
                      <span style={{ lineBreak: "anywhere", width: "100%" }}>
                        <span>{val?.metadata.settled_price}</span>
                      </span>
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
                      Market Prediction
                    </div>
                  </div>
                  <div
                    style={{
                      width: "auto",
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
                        width: "auto",
                        height: "20px",
                        flexShrink: "0",
                      }}
                    >
                      {val?.metadata.settled_date}
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
                      Close Date
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "234px",
                  height: "108px",
                  overflow: "hidden",
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  padding: "10px",
                  boxSizing: "border-box",
                  color: "#26272c",
                  fontFamily: "Poppins",
                }}
              >
                <div
                  style={{
                    width: "182px",
                    height: "72px",
                    overflow: "hidden",
                    flexShrink: "0",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "2px 0px",
                    boxSizing: "border-box",
                  }}
                >
                  <img
                    style={{
                      position: "relative",
                      borderRadius: "50%",
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                    alt=""
                    src="/image-141@2x.png"
                  />
                  <img
                    style={{
                      position: "relative",
                      borderRadius: "50%",
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                      marginLeft: "-14px",
                    }}
                    alt=""
                    src="/image-141@2x.png"
                  />
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "35px",
                      backgroundColor: "#baff2a",
                      width: "70px",
                      height: "70px",
                      overflow: "hidden",
                      flexShrink: "0",
                      marginLeft: "-14px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "23px",
                        left: "35%",
                        letterSpacing: "0.3px",
                        lineHeight: "150%",
                        display: "flex",
                        alignItems: "center",
                        width: "32px",
                        height: "24px",
                        fontFamily: "inter",
                      }}
                    >
                      5+
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "35px 25px",
                }}
                onClick={() => onClickToggle(index)}
              >
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
            </div>
            {/* Graph Section Starts */}
            {activeIndex == index && val?.peopleActive ? (
              <div
                style={{
                  backgroundColor: "#181818",
                  width: "100%",
                  height: "486px",
                  overflow: "hidden",
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "37px",
                  fontSize: "18px",
                  color: "#baff2a",
                }}
              >
                <Line
                  style={{ width: "100%" }}
                  plugins={[ChartDataLabels]}
                  data={data}
                  options={{
                    maintainAspectRatio: false,
                    legend: { display: false },

                    elements: {
                      line: {
                        tension: 0.4, // Adjust this for your desired line curve smoothness.
                      },
                    },

                    scales: {
                      x: {
                        type: "category",
                        time: {
                          parser: "YYYY-MM-DD",
                          unit: "day",
                          displayFormats: {
                            day: "MMM D",
                          },
                        },
                        // barThickness: 10, // Adjust this value to control the bar width
                        // categoryPercentage: 1,
                        ticks: {
                          autoSkip: true,
                          maxTicksLimit: 5,
                          color: "#fff",
                        },
                        grid: {
                          display: false, // Remove vertical grid lines
                          // color: "#fff",
                        },
                        displayFormats: {
                          day: "MMM D",
                        },
                        // display: false,
                      },
                      y: {
                        // beginAtZero: true,
                        // max: 30,
                        // display: false,
                        position: "right",
                        ticks: {
                          color: "#fff", // Y-axis values label color
                        },
                        displayFormats: {
                          day: "MMM D",
                        },
                        grid: {
                          display: false, // Remove vertical grid lines
                        },
                      },
                    },
                    plugins: {
                      legend: { display: false },
                      elements: {
                        bar: {
                          barThickness: 1,
                          barPercentage: 0.1,
                        },
                      },

                      datalabels: {
                        color: "transparent", // Label color
                        font: {
                          size: 10, // Label font size
                          weight: "bold",
                        },
                        formatter: function (value, context) {
                          return value;
                        },
                      },
                    },
                    annotations: {
                      trendline: {
                        type: "line",
                        yMin:
                          currentGraph?.metadata?.settled_price == "Unsettled"
                            ? ""
                            : currentGraph?.metadata?.settled_price,
                        yMax:
                          currentGraph?.metadata?.settled_price == "Unsettled"
                            ? ""
                            : currentGraph?.metadata?.settled_price,
                        borderColor:
                          currentGraph?.metadata?.settled_price == "Unsettled"
                            ? ""
                            : "red",
                        borderWidth: 2,
                        borderDash: [5, 5], // Dotted line
                        label: {
                          enabled: false,
                        },
                      },
                    },
                  }}
                />
              </div>
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
              ></div>
            ) : null}
            {/* Graph Section Ends */}
          </>
        );
      })}
      {/* User Info Row Ends */}
    </div>
  );
}

export default Markets;
