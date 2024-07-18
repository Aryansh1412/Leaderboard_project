import React from "react";
import "./ScrollingText.css";

const ScrollingText: React.FC = () => {
  return (
    <div className="scrolling">
      <div className="scrolling-text-container">
        <div className="scrolling-text-track">
          <span>Get your name on the leaderboard</span>
          <br />
          <span>Win exciting prizes</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
