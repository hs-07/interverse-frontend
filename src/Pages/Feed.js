import React from "react";
import { Image } from "react-bootstrap";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";

import TopPredictorsCard from "../components/top-predictors-card";
import TrendingPredictionCard from "../components/trending-prediction-card";

import "../styles/feed.css";

const Feed = () => {
  const cards = [
    { name: "Ray Dailo", src: "/elon_musk.svg" },
    { name: "Ray Dailo", src: "/elon_musk.svg" },
    { name: "Ray Dailo" },
    { name: "Ray Dailo", src: "/elon_musk.svg" },
    { name: "Ray Dailo", src: "/elon_musk.svg" },
  ];
  return (
    <div
      className="custom-customer font-white"
      style={{
        position: "fixed",
        top: "76px",
        left: "237px",
        height: "90vh",
        overflowY: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "2px",
        fontSize: "20px",
        minWidth: "calc(100% - 240px)",
      }}
    >
      <div
        className=""
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className=""
          style={{
            width: "70%",
            padding: "0px 10px 0px 22px",
            gap: "10px",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            height: "100%",
          }}
        >
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px ",
              height: "100%",
            }}
          >
            <label>Recent Predictions</label>
            <a href="">View All</a>
          </div>
          {cards.map((card, index) => (
            <div className="feed-card" key={index}>
              <div className="card-header">
                <div
                  className=""
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="card-img"
                    style={{
                      borderRadius: "50%",
                      border: "1px solid #4B6CC2",
                      padding: "2px",
                      height: "fit-content",
                      width: "fit-content",
                    }}
                  >
                    <Image src="/feed-profile.svg" alt="profile-image" />
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
                    <h5>{card.name}</h5>
                    <span>Economy</span>
                  </div>
                </div>
                <button
                  style={{
                    backgroundColor: "#4B6CC2",
                    border: "none",
                    borderRadius: "25px",
                    fontSize: "16px",
                    padding: "12px 36px",
                    color: "#fff",
                  }}
                >
                  Proof
                </button>
              </div>
              <div className="card-status">
                <Image src="/status.svg" />
                <p>
                  Status : <span> Pending</span>
                </p>
              </div>
              <div className="card-dates">
                <p>
                  Made on : <span>2023/2/4</span>
                </p>
                <p>
                  Resolves on : <span>2023/2/4</span>
                </p>
              </div>
              <div className="card-description">
                <p>
                  Elon Musk predicts that Tesla will solve self-driving and
                  surpass the average person's accident probability by
                  2023dvksnjs k <a href="">Read More</a>
                </p>
              </div>
              <div className="card-image">
                <Image src={card.src} />
              </div>
              <div className="card-footer">
                <div className="likes">
                  <ImArrowUp
                    style={{
                      cursor: "pointer",
                    }}
                  />
                  <span>30</span>
                </div>
                <div className="dislikes">
                  <ImArrowDown
                    style={{
                      cursor: "pointer",
                    }}
                  />
                  <span>13</span>
                </div>
                <div className="comment">
                  <IoChatbubbleEllipses
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="share">
                  <RiSendPlaneFill
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="top-predictors">
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <label>Top predictors</label>
              <a href="">View All</a>
            </div>
            <div
              className="tp-cards"
              style={{
                display: "flex",
                gap: "12px",
              }}
            >
              <TopPredictorsCard />
              <TopPredictorsCard />
            </div>
          </div>
          <div className="trending-predictions">
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <label>Trending predictions</label>
              <a href="">View All</a>
            </div>
            <div
              className="trending-cards"
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              <TrendingPredictionCard />
              <TrendingPredictionCard />
              <TrendingPredictionCard />
              <TrendingPredictionCard />
              <TrendingPredictionCard />
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            width: "30%",
            backgroundColor: "blue",
            overflowY: "auto",
            padding: "0px 12px",
            height: "100%",
          }}
        >
          column2
        </div>
      </div>
    </div>
  );
};

export default Feed;
