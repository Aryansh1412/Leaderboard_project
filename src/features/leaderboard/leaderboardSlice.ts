// src/features/leaderboard/leaderboardSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Player {
  name: string;
  score: string;
  timeInMillis: number;
  isNew?: boolean;
}

interface LeaderboardState {
  players: Player[];
}

const initialState: LeaderboardState = {
  players: [
    { name: 'John Doe', score: '10:00:000', timeInMillis: 600000 },
    { name: 'Jane Smith', score: '09:50:000', timeInMillis: 590000 },
    { name: 'Bob Johnson', score: '09:00:000', timeInMillis: 540000 },
    { name: 'Alice Williams', score: '08:48:000', timeInMillis: 528000 },
    { name: 'Tom Davis', score: '08:40:000', timeInMillis: 520000 },
    { name: 'Sarah Lee', score: '08:24:000', timeInMillis: 504000 },
    { name: 'Michael Chen', score: '08:12:000', timeInMillis: 492000 },
    { name: 'Emily Nguyen', score: '08:00:000', timeInMillis: 480000 },
    { name: 'David Kim', score: '07:48:000', timeInMillis: 468000 },
    { name: 'Jessica Patel', score: '07:36:000', timeInMillis: 456000 },
  ],
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<Player>) => {
      const newPlayer = action.payload;
      state.players = [...state.players, newPlayer]
        .sort((a, b) => a.timeInMillis - b.timeInMillis)
        .slice(0, 10);
    },
    deletePlayer: (state, action: PayloadAction<string>) => {
      state.players = state.players.filter(player => player.name !== action.payload);
    },
    resetNewFlag: (state) => {
      state.players = state.players.map(player => ({ ...player, isNew: false }));
    },
  },
});

export const { addPlayer, deletePlayer, resetNewFlag } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;