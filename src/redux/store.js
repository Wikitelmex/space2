import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// import reducers here
import rocketsReducer from './rockets/rocketReducer';
import missionsReducer from './missions/missionReducer';

const mixReducer = combineReducers({
  // add reducers here
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = createStore(
  mixReducer,
  applyMiddleware(logger, thunk),
);

export default store;
