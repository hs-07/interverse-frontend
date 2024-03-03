import React, { useRef, useEffect, useState } from "react";
import { TabItems } from "../../utils/types";
import "../../styles/tabs.css";

interface TabsProps {
  items?: TabItems[];
}

const Tabs: React.FC<TabsProps> = ({ items }) => {
  const firstBtnRef = useRef(null);

  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    if (firstBtnRef.current) {
      firstBtnRef.current.focus();
    }
  }, []);
  return (
    <div className="tabs-container">
      <div className="tabs-switches">
        {items.map((item, index) => (
          <button
            key={index}
            ref={index === 0 ? firstBtnRef : null}
            onClick={() => setSelectedTab(index)}
            style={{
              backgroundColor: selectedTab === index ? "#4B6CC2" : "",
              color: selectedTab === index ? "#fff" : "#4B6CC2",
            }}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {items.map((item, index) => (
          <div
            className="content"
            style={{
              display: selectedTab === index ? "" : "none",
            }}
            key={index}
          >
            <div className="">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
