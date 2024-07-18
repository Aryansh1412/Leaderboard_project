import { configureStore } from "@reduxjs/toolkit";
import { leaderboardReducer } from "../reducers";

const store = configureStore({
  reducer: {
    leaderboard: leaderboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
