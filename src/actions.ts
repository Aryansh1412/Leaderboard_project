import { LeaderboardEntry } from "./types";

export const SET_LEADERBOARD = "SET_LEADERBOARD";

interface SetLeaderboardAction {
  type: typeof SET_LEADERBOARD;
  payload: LeaderboardEntry[];
}

export type LeaderboardActionTypes = SetLeaderboardAction;

export const setLeaderboard = (
  leaderboard: LeaderboardEntry[]
): LeaderboardActionTypes => ({
  type: SET_LEADERBOARD,
  payload: leaderboard,
});
