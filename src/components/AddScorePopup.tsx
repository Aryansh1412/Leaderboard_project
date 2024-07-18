import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addScore } from "../reducers";
import "./AddScorePopup.css";

interface AddScorePopupProps {
  show: boolean;
  onClose: () => void;
}

const AddScorePopup: React.FC<AddScorePopupProps> = ({ show, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [isNewScore, setIsNewScore] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && time) {
      dispatch(addScore({ name, time, rank: 0 })); // Rank will be recalculated
      setIsNewScore(true);
      onClose();
    }
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Add Score</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time (format: m:ss.mss)</label>
            <input
              type="text"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit">Add</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddScorePopup;
