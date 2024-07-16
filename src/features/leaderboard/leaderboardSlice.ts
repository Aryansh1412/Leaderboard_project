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
    { name: 'Anjum', score: '10:56:23', timeInMillis: 600000 },
    { name: 'Pragati Azad', score: '00:56:23', timeInMillis: 590000 },
    { name: 'Pragati Azad', score: '00:56:23', timeInMillis: 540000 },
    { name: 'Hannibal Hector', score: '00:56:23', timeInMillis: 528000 },
    { name: 'Razzi', score: '00:56:23', timeInMillis: 520000 },
    { name: 'McRamble', score: '00:56:23', timeInMillis: 504000 },
    { name: 'Razzi', score: '00:56:23', timeInMillis: 492000 },
    { name: 'McRamble', score: '00:56:23', timeInMillis: 480000 },
    { name: 'Muhammed Anjum Kunnummao', score: '00:56:23', timeInMillis: 468000 },
    { name: 'Sahil Arora', score: '00:56:23', timeInMillis: 456000 },
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