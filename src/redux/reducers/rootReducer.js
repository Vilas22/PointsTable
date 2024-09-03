import { combineReducers } from '@reduxjs/toolkit';
import tournamentSlice from './tournamentSlice'; 
const rootReducer = combineReducers({
  tournament: tournamentSlice, 
});

export default rootReducer;