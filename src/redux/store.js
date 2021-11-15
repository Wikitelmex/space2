import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// import reducers here
import missionsReducer from './missions/missionReducer.js';

const mixReducer = combineReducers({
  // add reducers here
  missions: missionsReducer,
});

const store = createStore(
  mixReducer,
  applyMiddleware(logger, thunk),
);

export default store;
