import React from "react";
import Tabs from "../components/common/tabs";
import Header from "../components/Header";
import Predictors from "../components/favourites/predictors";
import Channels from "../components/favourites/channels";

const Favourites = () => {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div className="pt-4 md:h-[90vh] h-full">
        <Tabs
          className={"px-4"}
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
