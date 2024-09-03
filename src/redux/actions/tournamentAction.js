

import playersData from '../../mocData/players.json';
import matchesData from '../../mocData/matches.json';
import { calculatePoints } from '../../utils/calculatePoints';
import { tournamentSlice } from '../reducers/tournamentSlice'; 

export const loadTournamentData = () => {
  return (dispatch) => {
    try {
      const pointsTable = calculatePoints(playersData, matchesData);
      dispatch(tournamentSlice.actions.loadTournamentData({
        players: playersData,
        matches: matchesData,
        pointsTable
      }));
    } catch (error) {
      console.error('Error loading tournament data:', error);
      
    }
  };
};



export const selectPlayer = (playerId) => (dispatch) => {
  dispatch(tournamentSlice.actions.selectPlayer(playerId));
};
