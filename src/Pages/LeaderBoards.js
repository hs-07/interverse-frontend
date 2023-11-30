import React, { useState, useEffect } from "react";
import { leaderBoardData } from "../services/Leaderboards.service";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import "../styles/leaderboard.css";
import { useNavigate } from "react-router-dom";

const LeaderBoards = () => {
  const navigate = useNavigate();
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState("panel1");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    leaderBoardData()
      .then((res) => {
        console.log("res:::::::::", res.data);
        setLoader(true);
        setData([...res.data].map((obj) => ({ ...obj, Active: false })));
      })
      .catch((err) => {
        console.log("err::::::", err);
      });
  }, []);

  const onClickDetails = (index) => {
    const arr = [...data];
    arr[index].Active = !arr[index].Active;
    setData([...arr]);
  };

  console.log(window.innerWidth, "window.innerWidth");
  return (
    <div className="custom-container">
      {loader ? (
        <>
          {data?.map((val, index) => {
            return (
              <>
                <div className="row-section ">
                  <div className="row-section-inner1">
                    <div className="row-section-inner2">
                      <div className="row-section-inner3">
                        {index == 0 ? (
                          <img alt="rank-1" src="/goldmedal-1.svg" />
                        ) : index == 1 ? (
                          <img alt="rank-2" src="/goldmedal-2.svg" />
                        ) : index == 2 ? (
                          <img alt="rank-3" src="/goldmedal-3.svg" />
                        ) : (
                          index + 1
                        )}
                      </div>
                    </div>
                    <img
                      style={{
                        position: "relative",
                        borderRadius: "100%",
                        width: "56px",
                        height: "56px",
                        padding: "4px",
                        overflow: "hidden",
                        flexShrink: "0",
                        objectFit: "cover",
                        border:
                          index == 0
                            ? "2px solid #FDBC4B"
                            : index == 1
                            ? "2px solid #A7A7A7"
                            : index == 2
                            ? "2px solid #846836"
                            : "1px solid #baff2a",
                      }}
                      alt=""
                      src={val?.image_url}
                      onClick={() =>
                        navigate("/Profiles", {
                          state: { id: val?.user_id },
                        })
                      }
                    />
                    <div className="user-name-section">
                      <div className="user-name-section1">
                        {val?.first_name} {val?.last_name}
                      </div>
                      <div
                        onClick={() =>
                          navigate("/Predictions", {
                            state: { id: val?.user_id },
                          })
                        }
                        className="prediction-section "
                      >
                        {val.total_predictions} Predictions{" "}
                        <img src="/Moreviewicon.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="prediction-accuracy">
                    <div
                      style={{ color: "#aeaeae" }}
                      className="prediction-accuracy-title"
                    >
                      Prediction Accuracy
                    </div>
                    <div className="prediction-accuracy-title">
                      {Math.floor(val.prediction_accuracy)}%
                    </div>
                  </div>
                  <div className="bankroll-section ">
                    <div className="bankroll-section-title">Points</div>
                    <div className="bankroll-section-value" style={{ color: val.total_user_score * 10 < 0 ? '#e87d7d' : '#baff2a' }}>
                      {/* ${Math.floor(val.bankroll)} */}
                      {/* {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      }).format(val.total_user_score*10)} */}
                      {new Intl.NumberFormat("en-IN", {
                          maximumFractionDigits: 0,
                          minimumFractionDigits: 0
                      }).format(val.total_user_score * 10)}

                    </div>
                  </div>
                  <Button
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "#181818",
                      width: "140px",
                      height: "40px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      fontSize: "12px",
                      color: "#baff2a",
                    }}
                    onClick={() =>
                      navigate("/Profiles", {
                        state: { id: val?.user_id },
                      })
                    }
                  >
                    View Profile
                  </Button>
                  <div
                    onClick={() => {
                      onClickDetails(index);
                    }}
                    style={{ backgroundColor: "#282828" }}
                  >
                    {val.Active ? (
                      <img
                        className="click-icon"
                        alt="plus-icon"
                        src="/vector-1433.svg"
                      />
                    ) : (
                      <img
                        className="click-icon"
                        alt="minus-icon"
                        src="/vector-278.svg"
                      />
                    )}
                  </div>
                </div>
                {/* clickable section start */}
                {val.Active ? (
                  <div className="clickable-section">
                    <div className="collapsable-section">
                      <div className="clickable-section-inner1">
                        <div className="clickable-section-inner2">
                          Area of Accuracy
                        </div>
                        <div className="category-value">
                          {val.top_two_categories}
                        </div>
                      </div>
                    </div>
                    <div className="pending-Predictions-section">
                      <div className="pending-Predictions-title">
                        Pending Predictions
                      </div>
                      <div className="pending-Predictions-value">
                        {val.all_pending_predictions}
                      </div>
                    </div>
                    <div className="settle-section">
                      <div className="settle-section-title">
                        Due to Settle in 2023
                      </div>
                      <div className="settle-section-value">
                        {val.predictions_due_to_settle}
                      </div>
                    </div>
                    <div className="markets-section">
                      <div className="markets-section-title ">
                        Have Open Markets
                      </div>
                      <div className="markets-section-value">
                        {val.open_markets}
                      </div>
                    </div>
                    <div className="streak-section">
                      <div className="streak-section-title">Current Streak</div>
                      <div className="streak-section-value">
                        {val.current_streak}
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* clickable section ends */}
              </>
            );
          })}
        </>
      ) : (
        <div className="loader">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default LeaderBoards;
