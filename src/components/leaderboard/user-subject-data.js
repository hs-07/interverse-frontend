import React from "react";
import { Button } from "@mui/material";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut, Bar } from "react-chartjs-2";

const UserSubjectData = ({ subjectData }) => {
  return (
    <div>
      {subjectData?.map((val, index) => {
        return (
          <div className="profile-graph-section">
            {/* Bar Graph Section Starts */}
            <div className="bar-graph-section">
              <div className="bar-header">
                <div>Predictions by Category</div>
                <div className="sub-part-2">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "2px",
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
                        width: "fit-content",
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
                          width: "fit-content",
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
                      width: "fit-content",
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
                      width: "fit-content",
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
                      width: "fit-content",
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
                      width: "fit-content",
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
              <div className="bar">
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
                    labels: subjectData[0]?.categories?.map((i) => i.Category),
                    datasets: [
                      {
                        label: "",
                        data: subjectData[0]?.categories?.map((i) => i.count),
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
            </div>
            {/* Bar Graph Section Starts */}
            {/* Donught Graph Starts */}
            <div className="donught-graph-section">
              <div className="donught-header">
                <p style={{ color: "#fff", textAlign: "start" }}>
                  Predictions by Plaform
                </p>
              </div>
              <div className="donught">
                <Doughnut
                  data={{
                    labels: subjectData[0]?.source_types.map((st) => st.source),
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
    </div>
  );
};

export default UserSubjectData;
