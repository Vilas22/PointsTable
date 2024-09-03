import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  players: [],
  matches: [],
  pointsTable: [],
  selectedPlayerId: null
};

const tournamentSlice = createSlice({
  name: 'tournament',
  initialState,
  reducers: {
    loadTournamentData: (state, action) => {
      state.players = action.payload.players;
      state.matches = action.payload.matches;
      state.pointsTable = action.payload.pointsTable;
    },
    selectPlayer: (state, action) => {
      state.selectedPlayerId = action.payload;
    },
  },
});

export const { loadTournamentData, selectPlayer } = tournamentSlice.actions;

export default tournamentSlice.reducer;
export { tournamentSlice };