import {
  ADD_MISSION,
  REMOVE_MISSION,
  UPDATE_MISSION,
  FETCH_MISSIONS_REQUEST,
  FETCH_MISSIONS_SUCCESS,
  FETCH_MISSIONS_FAILURE,
} from './missionTypes';

const initialState = {
  missions: [],
  loading: false,
  error: null,
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return {
        ...state,
        missions: [action.payload, ...state.missions],
      };
    case REMOVE_MISSION:
      return {
        ...state,
        missions: state.missions.filter((mission) => mission.id !== action.payload),
      };
    case UPDATE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => (mission.id === action.payload.id ? action.payload : mission)),
      };
    case FETCH_MISSIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MISSIONS_SUCCESS:
      return {
        ...state,
        missions: action.payload,
        loading: false,
      };
    case FETCH_MISSIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default missionReducer;
