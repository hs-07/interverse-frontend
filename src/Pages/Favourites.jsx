import React from "react";
import Tabs from "../components/common/tabs";
import Header from "../components/Header";
import Predictors from "../components/favourites/predictors";
import Channels from "../components/favourites/channels";

const Favourites = () => {
  return (
    <div>
      <Header />
      <div className="pt-4">
        <Tabs
          className={"px-6"}
          items={[
            { id: 1, title: "Predictors", content: <Predictors /> },
            { id: 2, title: "Channels", content: <Channels /> },
          ]}
        />
      </div>
    </div>
  );
};

export default Favourites;
