import React, { useState, useEffect } from "react";

import TopPredictorsCard from "../components/top-predictors-card";
import TrendingPredictionCard from "../components/trending-prediction-card";
import FeedRightSection from "../components/feed-right-section";
import ShareModal from "../components/shareModal";
import CircularProgress from "@mui/material/CircularProgress";
import { getFeedDetails } from "../services/Feed.service";

import "../styles/feed.css";
import FeedCard from "../components/feed-card";

const Feed = () => {
  const [openShare, setOpenShare] = useState(false);
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getFeed = async () => {
    setLoading(true);
    try {
      const response = await getFeedDetails();
      setFeedData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);

  if (loading)
    return (
      <div className="loader">
        <CircularProgress />
      </div>
    );
  else
    return (
      <div className="feed-section">
        <div className="feed-container">
          <div className="feed-part1">
            <div className="recent-predictions">
              <div className="rp-heading">
                <label>Recent Predictions</label>
              </div>
              {feedData.map((feed, index) => (
                <div className="" key={index}>
                  <TrendingPredictionCard news={feed.headline} />
                  <div className="rp-cards">
                    {feed.matches.map((card, index) => (
                      <FeedCard
                        category={card.category}
                        user={card.user}
                        madeOn={card.publish_date}
                        resolvedOn={card.fixed_date}
                        imgUrl={card.image_url}
                        predictionId={card.prediction_id}
                        key={index}
                        prediction={card.prediction}
                        setOpenShare={setOpenShare}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="top-predictors">
              <div className="top-predictors-header">
                <label>Top predictors</label>
                <a href="">View All</a>
              </div>
              <div className="tp-cards">
                <TopPredictorsCard />
                <TopPredictorsCard />
              </div>
            </div>
            <div className="trending-predictions">
              <div className="trending-predictions-header">
                <label>Trending predictions</label>
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
          <div className="feed-part2">
            <FeedRightSection />
          </div>
        </div>
        <ShareModal showModal={openShare} setShowModal={setOpenShare} />
      </div>
    );
};

export default Feed;
