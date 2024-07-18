import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LeaderboardEntry } from "./types";

interface LeaderboardState {
  leaderboard: LeaderboardEntry[];
}

const initialState: LeaderboardState = {
  leaderboard: [],
};

const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    setLeaderboard(state, action: PayloadAction<LeaderboardEntry[]>) {
      state.leaderboard = action.payload;
    },
    addScore(state, action: PayloadAction<LeaderboardEntry>) {
      const newLeaderboard = [...state.leaderboard, action.payload].sort(
        (a, b) => {
          const [minA, secA] = a.time.split(":");
          const [minB, secB] = b.time.split(":");
          return (
            parseFloat(minA) * 60 +
            parseFloat(secA) -
            (parseFloat(minB) * 60 + parseFloat(secB))
          );
        }
      );
      newLeaderboard.forEach((entry, index) => (entry.rank = index + 1));
      state.leaderboard = newLeaderboard.slice(0, 10);
    },
  },
});

export const { setLeaderboard, addScore } = leaderboardSlice.actions;
export const leaderboardReducer = leaderboardSlice.reducer;
