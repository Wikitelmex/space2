import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// import reducers here
import missionsReducer from './missions/missionReducer.js';
import rocketsReducer from './rockets/rocketReducer';

const mixReducer = combineReducers({
  // add reducers here
  missionsReducer,
  rockets: rocketsReducer,
});

const store = createStore(
  mixReducer,
  applyMiddleware(logger, thunk),
);

export default store;
