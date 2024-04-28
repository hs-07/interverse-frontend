import React from "react";

const Video = ({ val }) => {
  return (
    <iframe
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      alt=""
      src={`https://www.youtube.com/embed/${val?.youtube_id}?start=${val?.youtube_start_time}`}
    />
  );
};

export default Video;
