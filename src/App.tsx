// src/App.tsx
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLeaderboard } from "./reducers";
import Leaderboard from "./components/Leaderboard";
import AddScorePopup from "../src/components/AddScorePopup";
import { AppDispatch } from "./app/store";
import "./App.css";
import Footer from "./components/Footer";
import ScrollingText from "./components/ScrollingText";
const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const leaderboard = [
      { name: "Salil", time: "1:30.075", rank: 1 },
      { name: "Ankit", time: "1:30.441", rank: 2 },
      { name: "Ankit", time: "1:30.753", rank: 3 },
      { name: "Ankit", time: "1:30.789", rank: 4 },
      { name: "Ankit", time: "1:31.080", rank: 5 },
      { name: "Ankit", time: "1:33.730", rank: 6 },
      { name: "Don", time: "1:34.201", rank: 7 },
      { name: "Sandesh", time: "1:34.437", rank: 8 },
      { name: "Vandit", time: "1:34.872", rank: 9 },
      { name: "Kevin Anderson", time: "1:35.128", rank: 10 },
    ];
    dispatch(setLeaderboard(leaderboard));
  }, [dispatch]);

  return (
    <div className="App">
      <div className="leaderboard-container">
        <Leaderboard />
      </div>
      <button onClick={() => setShowPopup(true)} className="add-score-button">
        Add Score
      </button>
      <AddScorePopup show={showPopup} onClose={() => setShowPopup(false)} />
      <Footer />
      <ScrollingText />
    </div>
  );
};

export default App;
