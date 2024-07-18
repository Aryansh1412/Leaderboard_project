import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import "./Leaderboard.css";

const Leaderboard: React.FC = () => {
  const leaderboard = useSelector(
    (state: RootState) => state.leaderboard.leaderboard
  );

  return (
    <div className="leaderboard upward-shift">
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry) => (
            <tr className="keys" key={entry.rank}>
              <td className="ranking">
                <div className="rank-container">{entry.rank}</div>
              </td>
              <td>{entry.name}</td>
              <td>{entry.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
