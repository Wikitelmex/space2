import {
  TOGGLE_RESERVATION,
  FETCH_ROCKETS,
} from './rocketTypes';

const initialState = {
  rockets: [],
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, rockets: action.payload };
    case TOGGLE_RESERVATION:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id === action.payload) return { ...rocket, added: !rocket.added };
          return rocket;
        }),
      };
    default:
      return state;
  }
};

export default rocketsReducer;
