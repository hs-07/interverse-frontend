import { useCallback } from "react";

const MacBookPro1467 = () => {
  const onTabsContainer1Click = useCallback(() => {
    // Please sync "MacBook Pro 14" - 40" to the project
  }, []);

  const onTabsContainer2Click = useCallback(() => {
    // Please sync "MacBook Pro 14" - 44" to the project
  }, []);

  const onTabsContainer3Click = useCallback(() => {
    // Please sync "MacBook Pro 14" - 61" to the project
  }, []);

  const onTabsContainer5Click = useCallback(() => {
    // Please sync "MacBook Pro 14" - 65" to the project
  }, []);

  const onEllipseImage2Click = useCallback(() => {
    // Please sync "MacBook Pro 14" - 65" to the project
  }, []);
  <div className="main-section">
    {/* User Info Row Starts */}
    {marketData.map((val, index) => {
      return (
        <div style={{ padding: "20px" }} className="user-info-row">
          <div className="image-section">
            <img
              className="user-image"
              alt="user-image"
              src="/image-141@2x.png"
            />
          </div>
          <div className="title-section">
            <b className="title-section-text">
              {val?.metadata.event_title.slice(0, 35)}...
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
                    <span>{`6.49 %  `}</span>
                    <span style={{ color: "#fff" }}>
                      {val?.metadata.category}
                    </span>
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
                  width: "160px",
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
                    left: "19px",
                    letterSpacing: "0.3px",
                    lineHeight: "150%",
                    display: "flex",
                    alignItems: "center",
                    width: "32px",
                    height: "24px",
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
          >
            <img
              style={{
                position: "relative",
                width: "21.5px",
                height: "1.5px",
              }}
              alt=""
              src={val?.image_url}
            />
          </div>
        </div>
      );
    })}
    {/* User Info Row Ends */}
    {/* Graph Section Starts */}
    {false ? (
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
            // legend: { display: false },

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
                  color: "#fff", // Y-axis values label color
                },
                grid: {
                  display: false, // Remove vertical grid lines
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
          }}
        />
      </div>
    ) : null}
    {/* Graph Section Ends */}
  </div>;
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#181818",
        width: "100%",
        height: "1301px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "24px",
        color: "#fff",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          backgroundColor: "#282828",
          width: "235px",
          height: "1301px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "18px 19px",
          boxSizing: "border-box",
          gap: "10px",
          fontSize: "16px",
        }}
      >
        <div
          style={{
            width: "180px",
            height: "46px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "2px 0px",
            boxSizing: "border-box",
            textAlign: "center",
            fontSize: "24px",
            color: "#baff2a",
            fontFamily: "'Odibee Sans'",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "0.3px",
              lineHeight: "150%",
              display: "flex",
              alignItems: "center",
              width: "180px",
              height: "35px",
              flexShrink: "0",
            }}
          >
            <span style={{ lineBreak: "anywhere", width: "100%" }}>
              <span>{`LUCKY `}</span>
              <span style={{ color: "#fff" }}>{`OR `}</span>
              <span>GENIUS</span>
            </span>
          </div>
        </div>
        <div
          style={{
            width: "235px",
            height: "46px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "2px 0px",
            boxSizing: "border-box",
            gap: "18px",
            cursor: "pointer",
          }}
          onClick={onTabsContainer1Click}
        >
          <img
            style={{ position: "relative", width: "24px", height: "24px" }}
            alt=""
            src="/vuesaxtwotonepeople.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "0.3px",
              lineHeight: "150%",
              display: "flex",
              alignItems: "center",
              width: "133px",
              flexShrink: "0",
            }}
          >
            Leaderboards
          </div>
        </div>
        <div
          style={{
            width: "235px",
            height: "46px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "2px 0px",
            boxSizing: "border-box",
            gap: "18px",
            cursor: "pointer",
          }}
          onClick={onTabsContainer2Click}
        >
          <img
            style={{ position: "relative", width: "24px", height: "24px" }}
            alt=""
            src="/vuesaxtwotonefirstline.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "0.3px",
              lineHeight: "150%",
              display: "flex",
              alignItems: "center",
              width: "133px",
              flexShrink: "0",
            }}
          >
            Summaries
          </div>
        </div>
        <div
          style={{
            width: "235px",
            height: "46px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "2px 0px",
            boxSizing: "border-box",
            gap: "18px",
            cursor: "pointer",
          }}
          onClick={onTabsContainer3Click}
        >
          <img
            style={{ position: "relative", width: "24px", height: "24px" }}
            alt=""
            src="/vuesaxboldarrow3.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "0.3px",
              lineHeight: "150%",
              display: "flex",
              alignItems: "center",
              width: "133px",
              flexShrink: "0",
            }}
          >
            Predictions
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#baff2a",
            width: "235px",
            height: "46px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "2px 0px",
            boxSizing: "border-box",
            gap: "18px",
            color: "#181818",
          }}
        >
          <img
            style={{ position: "relative", width: "24px", height: "24px" }}
            alt=""
            src="/vuesaxtwotoneactivity.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "0.3px",
              lineHeight: "150%",
              display: "flex",
              alignItems: "center",
              width: "133px",
              flexShrink: "0",
            }}
          >
            Markets
          </div>
        </div>
        <div
          style={{
            width: "235px",
            height: "46px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "2px 0px",
            boxSizing: "border-box",
            gap: "18px",
            cursor: "pointer",
          }}
          onClick={onTabsContainer5Click}
        >
          <img
            style={{ position: "relative", width: "24px", height: "24px" }}
            alt=""
            src="/vuesaxtwotoneprofile.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "0.3px",
              lineHeight: "150%",
              display: "flex",
              alignItems: "center",
              width: "133px",
              flexShrink: "0",
            }}
          >
            Profiles
          </div>
        </div>
        <div
          style={{
            width: "235px",
            height: "46px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "2px 0px",
            boxSizing: "border-box",
            gap: "18px",
          }}
        >
          <img
            style={{ position: "relative", width: "24px", height: "24px" }}
            alt=""
            src="/vuesaxtwotonenotificationcircle.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "0.3px",
              lineHeight: "150%",
              display: "flex",
              alignItems: "center",
              width: "133px",
              flexShrink: "0",
            }}
          >
            My Channels
          </div>
        </div>
        <div
          style={{ position: "relative", width: "206px", height: "505px" }}
        />
        <div
          style={{
            width: "235px",
            height: "46px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "2px 0px",
            boxSizing: "border-box",
            gap: "18px",
          }}
        >
          <img
            style={{ position: "relative", width: "24px", height: "24px" }}
            alt=""
            src="/vuesaxtwotonesetting2.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "0.3px",
              lineHeight: "150%",
              display: "flex",
              alignItems: "center",
              width: "133px",
              flexShrink: "0",
            }}
          >
            Settings
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "237px",
          backgroundColor: "#282828",
          width: "1275px",
          height: "74px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "10px 22px",
          boxSizing: "border-box",
          gap: "40px",
        }}
      >
        <b
          style={{
            position: "relative",
            lineHeight: "80px",
            display: "flex",
            alignItems: "center",
            width: "208px",
            height: "43px",
            flexShrink: "0",
          }}
        >
          Markets
        </b>
        <div
          style={{
            borderRadius: "4px",
            backdropFilter: "blur(30px)",
            width: "229px",
            height: "28px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "11px",
            textAlign: "center",
            fontSize: "12px",
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
              <div style={{ position: "relative", lineHeight: "24px" }}>
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
          <div
            style={{
              borderRadius: "30px",
              backgroundColor: "#baff2a",
              width: "60px",
              height: "28px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px",
              boxSizing: "border-box",
              color: "#181818",
            }}
          >
            <div style={{ position: "relative", letterSpacing: "0.08em" }}>
              All
            </div>
          </div>
          <div
            style={{
              borderRadius: "30px",
              backgroundColor: "#181818",
              width: "80px",
              height: "28px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px",
              boxSizing: "border-box",
            }}
          >
            <div style={{ position: "relative", letterSpacing: "0.08em" }}>
              Pending
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: "25px",
            border: "1px solid #fff",
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
            color: "#a9a9b7",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              width: "370px",
              height: "18px",
              flexShrink: "0",
            }}
          >{`Search `}</div>
          <img
            style={{
              position: "relative",
              width: "18.85px",
              height: "18.85px",
            }}
            alt=""
            src="/vector.svg"
          />
        </div>
        <div
          style={{
            width: "219px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "16px",
            textAlign: "right",
            fontSize: "20px",
          }}
        >
          <img
            style={{ position: "relative", width: "24px", height: "24px" }}
            alt=""
            src="/iconlyboldnotification.svg"
          />
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              width: "101px",
              height: "24px",
              flexShrink: "0",
            }}
          >
            Pat
          </div>
          <img
            style={{
              position: "relative",
              borderRadius: "25px",
              width: "50px",
              height: "50px",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src="/frame-1000001069.svg"
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "76px",
          left: "237px",
          backgroundColor: "#6b7465",
          width: "1275px",
          height: "1225px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "0px 22px",
          boxSizing: "border-box",
          gap: "2px",
        }}
      >
        <div
          style={{
            backgroundColor: "#282828",
            width: "1275px",
            height: "130px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "10px 22px",
            boxSizing: "border-box",
            gap: "16px",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "8px",
              width: "104px",
              height: "108px",
              overflow: "hidden",
              flexShrink: "0",
            }}
          >
            <img
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "104px",
                height: "108px",
                objectFit: "cover",
              }}
              alt=""
              src="/image-141@2x.png"
            />
          </div>
          <div
            style={{
              width: "748px",
              height: "108px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <b
              style={{
                position: "relative",
                lineHeight: "80px",
                display: "flex",
                alignItems: "center",
                width: "763px",
                height: "43px",
                flexShrink: "0",
              }}
            >
              US Annual Inflation 2022
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
                  Economy
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
                    <span>{`6.49 %  `}</span>
                    <span style={{ color: "#fff" }}>Resolved</span>
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
                  width: "160px",
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
                  Jan 11, 2023
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
                src="/ellipse-401@2x.png"
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
                src="/ellipse-402@2x.png"
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
                    left: "19px",
                    letterSpacing: "0.3px",
                    lineHeight: "150%",
                    display: "flex",
                    alignItems: "center",
                    width: "32px",
                    height: "24px",
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
          >
            <img
              style={{ position: "relative", width: "21.5px", height: "1.5px" }}
              alt=""
              src="/vector-1432.svg"
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#181818",
            width: "1275px",
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
          <div
            style={{
              position: "relative",
              backgroundColor: "#181818",
              width: "1124px",
              height: "470px",
              overflow: "hidden",
              flexShrink: "0",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "22px",
                left: "0px",
                width: "600px",
                height: "48px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "0px 22px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: "171px",
                  height: "48px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "171px",
                    height: "20px",
                    flexShrink: "0",
                  }}
                >
                  <span style={{ lineBreak: "anywhere", width: "100%" }}>
                    <span>{`6.49 %  `}</span>
                    <span style={{ color: "#fff" }}>Resolved</span>
                  </span>
                </div>
              </div>
            </div>
            <img
              style={{
                position: "absolute",
                top: "85.19px",
                left: "0px",
                width: "1125px",
                height: "313.31px",
              }}
              alt=""
              src="/vector-1437.svg"
            />
            <div
              style={{
                position: "absolute",
                top: "414px",
                left: "0px",
                width: "1124px",
                height: "42px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "0px 22px",
                boxSizing: "border-box",
                gap: "206px",
                fontSize: "16px",
                color: "#aeaeae",
              }}
            >
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  width: "54px",
                  height: "20px",
                  flexShrink: "0",
                }}
              >
                May 11
              </div>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  width: "54px",
                  height: "20px",
                  flexShrink: "0",
                }}
              >
                July 11
              </div>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  width: "54px",
                  height: "20px",
                  flexShrink: "0",
                }}
              >
                Sep 10
              </div>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  width: "54px",
                  height: "20px",
                  flexShrink: "0",
                }}
              >
                Nov 11
              </div>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  width: "54px",
                  height: "20px",
                  flexShrink: "0",
                }}
              >
                Jan 11
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "89px",
                left: "383px",
                borderRadius: "40px",
                width: "70px",
                height: "70px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "5px 10px 6px",
                boxSizing: "border-box",
                gap: "4px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  width: "68px",
                  height: "68px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                alt=""
                src="/ellipse-4011@2x.png"
                onClick={onEllipseImage2Click}
              />
              <img
                style={{ position: "relative", width: "34px", height: "29px" }}
                alt=""
                src="/polygon-1.svg"
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "129px",
                left: "110px",
                borderRadius: "40px",
                width: "70px",
                height: "70px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "5px 10px 6px",
                boxSizing: "border-box",
                gap: "4px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  width: "68px",
                  height: "68px",
                  objectFit: "cover",
                }}
                alt=""
                src="/ellipse-4012@2x.png"
              />
              <img
                style={{ position: "relative", width: "34px", height: "29px" }}
                alt=""
                src="/polygon-11.svg"
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "235px",
                left: "104px",
                borderRadius: "40px",
                width: "81px",
                height: "105px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "5px 10px 6px",
                boxSizing: "border-box",
                gap: "10px",
              }}
            >
              <img
                style={{ position: "relative", width: "34px", height: "29px" }}
                alt=""
                src="/polygon-12.svg"
              />
              <img
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  width: "68px",
                  height: "68px",
                  objectFit: "cover",
                }}
                alt=""
                src="/ellipse-4013@2x.png"
              />
            </div>
          </div>
          <div
            style={{
              width: "105px",
              height: "470px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0px 22px",
              boxSizing: "border-box",
              gap: "41px",
              fontSize: "16px",
              color: "#aeaeae",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "54px",
                height: "20px",
                flexShrink: "0",
              }}
            >
              8
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "54px",
                height: "20px",
                flexShrink: "0",
              }}
            >
              7.5
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "54px",
                height: "20px",
                flexShrink: "0",
              }}
            >
              7
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "54px",
                height: "20px",
                flexShrink: "0",
              }}
            >
              6.5
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "54px",
                height: "20px",
                flexShrink: "0",
              }}
            >
              6
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#282828",
            width: "1275px",
            height: "130px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "10px 22px",
            boxSizing: "border-box",
            gap: "16px",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "8px",
              width: "104px",
              height: "108px",
              overflow: "hidden",
              flexShrink: "0",
            }}
          >
            <img
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "104px",
                height: "108px",
                objectFit: "cover",
              }}
              alt=""
              src="/image-142@2x.png"
            />
          </div>
          <div
            style={{
              width: "748px",
              height: "108px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <b
              style={{
                position: "relative",
                lineHeight: "80px",
                display: "flex",
                alignItems: "center",
                width: "763px",
                height: "43px",
                flexShrink: "0",
              }}
            >
              US Annual Inflation 2023
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
                  Economy
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
                >{`3.44 % `}</div>
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
                  width: "160px",
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
                  Jan 13, 2024
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
                src="/ellipse-4014@2x.png"
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
                src="/ellipse-4021@2x.png"
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
                    left: "19px",
                    letterSpacing: "0.3px",
                    lineHeight: "150%",
                    display: "flex",
                    alignItems: "center",
                    width: "32px",
                    height: "24px",
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
              height: "70px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "35px 25px",
              boxSizing: "border-box",
            }}
          >
            <img
              style={{
                position: "relative",
                width: "21.5px",
                height: "21.5px",
              }}
              alt=""
              src="/vector-276.svg"
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#282828",
            width: "1275px",
            height: "130px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "10px 22px",
            boxSizing: "border-box",
            gap: "16px",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "8px",
              width: "104px",
              height: "108px",
              overflow: "hidden",
              flexShrink: "0",
            }}
          >
            <img
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "104px",
                height: "108px",
                objectFit: "cover",
              }}
              alt=""
              src="/image-1411@2x.png"
            />
          </div>
          <div
            style={{
              width: "748px",
              height: "108px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <b
              style={{
                position: "relative",
                lineHeight: "80px",
                display: "flex",
                alignItems: "center",
                width: "763px",
                height: "43px",
                flexShrink: "0",
              }}
            >
              Recession 2023
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
                  Economy
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
                  3 %
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
                  width: "160px",
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
                  Jan 25, 2024
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
                src="/ellipse-4015@2x.png"
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
                src="/ellipse-4022@2x.png"
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
                    left: "19px",
                    letterSpacing: "0.3px",
                    lineHeight: "150%",
                    display: "flex",
                    alignItems: "center",
                    width: "32px",
                    height: "24px",
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
              height: "70px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "35px 25px",
              boxSizing: "border-box",
            }}
          >
            <img
              style={{
                position: "relative",
                width: "21.5px",
                height: "21.5px",
              }}
              alt=""
              src="/vector-2761.svg"
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#282828",
            width: "1275px",
            height: "130px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "10px 22px",
            boxSizing: "border-box",
            gap: "16px",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "8px",
              width: "104px",
              height: "108px",
              overflow: "hidden",
              flexShrink: "0",
            }}
          >
            <img
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "104px",
                height: "108px",
                objectFit: "cover",
              }}
              alt=""
              src="/image-1412@2x.png"
            />
          </div>
          <div
            style={{
              width: "748px",
              height: "108px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <b
              style={{
                position: "relative",
                lineHeight: "80px",
                display: "flex",
                alignItems: "center",
                width: "763px",
                height: "43px",
                flexShrink: "0",
              }}
            >
              Recession 2022
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
                  Economy
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
                    <span>{`Yes `}</span>
                    <span style={{ color: "#fff" }}>Resolved</span>
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
                  width: "160px",
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
                  Jul 28, 2022
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
                src="/ellipse-4016@2x.png"
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
                src="/ellipse-4023@2x.png"
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
                    left: "19px",
                    letterSpacing: "0.3px",
                    lineHeight: "150%",
                    display: "flex",
                    alignItems: "center",
                    width: "32px",
                    height: "24px",
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
              height: "70px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "35px 25px",
              boxSizing: "border-box",
            }}
          >
            <img
              style={{
                position: "relative",
                width: "21.5px",
                height: "21.5px",
              }}
              alt=""
              src="/vector-2762.svg"
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#282828",
            width: "1275px",
            height: "130px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "10px 22px",
            boxSizing: "border-box",
            gap: "16px",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "8px",
              width: "104px",
              height: "108px",
              overflow: "hidden",
              flexShrink: "0",
            }}
          >
            <img
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "104px",
                height: "108px",
                objectFit: "cover",
              }}
              alt=""
              src="/image-1413@2x.png"
            />
          </div>
          <div
            style={{
              width: "748px",
              height: "108px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <b
              style={{
                position: "relative",
                lineHeight: "80px",
                display: "flex",
                alignItems: "center",
                width: "763px",
                height: "43px",
                flexShrink: "0",
              }}
            >{`S&P 500 Yearly Close 2022`}</b>
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
                  Economy
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
                    <span>{`3839.50 `}</span>
                    <span style={{ color: "#fff" }}>Resolved</span>
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
                  width: "160px",
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
                  Dec 30, 2022
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
                src="/ellipse-4017@2x.png"
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
                src="/ellipse-4024@2x.png"
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
                    left: "19px",
                    letterSpacing: "0.3px",
                    lineHeight: "150%",
                    display: "flex",
                    alignItems: "center",
                    width: "32px",
                    height: "24px",
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
              height: "70px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "35px 25px",
              boxSizing: "border-box",
            }}
          >
            <img
              style={{
                position: "relative",
                width: "21.5px",
                height: "21.5px",
              }}
              alt=""
              src="/vector-2763.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookPro1467;
<div
  style={{
    backgroundColor: "#181818",
    width: "1275px",
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
  <div
    style={{
      position: "relative",
      backgroundColor: "#181818",
      width: "1124px",
      height: "470px",
      overflow: "hidden",
      flexShrink: "0",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: "22px",
        left: "0px",
        width: "600px",
        height: "48px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0px 22px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "171px",
          height: "48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            width: "171px",
            height: "20px",
            flexShrink: "0",
          }}
        >
          <span style={{ lineBreak: "anywhere", width: "100%" }}>
            <span>{`6.49 %  `}</span>
            <span style={{ color: "#fff" }}>Resolved</span>
          </span>
        </div>
      </div>
    </div>
    <img
      style={{
        position: "absolute",
        top: "85.19px",
        left: "0px",
        width: "1125px",
        height: "313.31px",
      }}
      alt=""
      src="/vector-1437.svg"
    />
    <div
      style={{
        position: "absolute",
        top: "414px",
        left: "0px",
        width: "1124px",
        height: "42px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0px 22px",
        boxSizing: "border-box",
        gap: "206px",
        fontSize: "16px",
        color: "#aeaeae",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "54px",
          height: "20px",
          flexShrink: "0",
        }}
      >
        May 11
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "54px",
          height: "20px",
          flexShrink: "0",
        }}
      >
        July 11
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "54px",
          height: "20px",
          flexShrink: "0",
        }}
      >
        Sep 10
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "54px",
          height: "20px",
          flexShrink: "0",
        }}
      >
        Nov 11
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "54px",
          height: "20px",
          flexShrink: "0",
        }}
      >
        Jan 11
      </div>
    </div>
    <div
      style={{
        position: "absolute",
        top: "89px",
        left: "383px",
        borderRadius: "40px",
        width: "70px",
        height: "70px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "5px 10px 6px",
        boxSizing: "border-box",
        gap: "4px",
      }}
    >
      <img
        style={{
          position: "relative",
          borderRadius: "50%",
          width: "68px",
          height: "68px",
          objectFit: "cover",
          cursor: "pointer",
        }}
        alt=""
        src="/ellipse-4011@2x.png"
      />
      <img
        style={{ position: "relative", width: "34px", height: "29px" }}
        alt=""
        src="/polygon-1.svg"
      />
    </div>
    <div
      style={{
        position: "absolute",
        top: "129px",
        left: "110px",
        borderRadius: "40px",
        width: "70px",
        height: "70px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "5px 10px 6px",
        boxSizing: "border-box",
        gap: "4px",
      }}
    >
      <img
        style={{
          position: "relative",
          borderRadius: "50%",
          width: "68px",
          height: "68px",
          objectFit: "cover",
        }}
        alt=""
        src="/ellipse-4012@2x.png"
      />
      <img
        style={{ position: "relative", width: "34px", height: "29px" }}
        alt=""
        src="/polygon-11.svg"
      />
    </div>
    <div
      style={{
        position: "absolute",
        top: "235px",
        left: "104px",
        borderRadius: "40px",
        width: "81px",
        height: "105px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "5px 10px 6px",
        boxSizing: "border-box",
        gap: "10px",
      }}
    >
      <img
        style={{ position: "relative", width: "34px", height: "29px" }}
        alt=""
        src="/polygon-12.svg"
      />
      <img
        style={{
          position: "relative",
          borderRadius: "50%",
          width: "68px",
          height: "68px",
          objectFit: "cover",
        }}
        alt=""
        src="/ellipse-4013@2x.png"
      />
    </div>
  </div>
  <div
    style={{
      width: "105px",
      height: "470px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: "0px 22px",
      boxSizing: "border-box",
      gap: "41px",
      fontSize: "16px",
      color: "#aeaeae",
    }}
  >
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "54px",
        height: "20px",
        flexShrink: "0",
      }}
    >
      8
    </div>
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "54px",
        height: "20px",
        flexShrink: "0",
      }}
    >
      7.5
    </div>
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "54px",
        height: "20px",
        flexShrink: "0",
      }}
    >
      7
    </div>
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "54px",
        height: "20px",
        flexShrink: "0",
      }}
    >
      6.5
    </div>
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "54px",
        height: "20px",
        flexShrink: "0",
      }}
    >
      6
    </div>
  </div>
</div>;
