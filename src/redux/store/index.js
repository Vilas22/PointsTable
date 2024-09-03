

import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer'; 


const loggerMiddleware = createLogger({
  
  stateTransformer: (state) => {
    return {
      ...state,
      tournament: {
        ...state.tournament,
        matches: state.tournament.matches.map(match => ({ ...match })), 
        players: state.tournament.players.map(player => ({ ...player })), 
        pointsTable: state.tournament.pointsTable.map(entry => ({ ...entry })) 
      }
    };
  },
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
