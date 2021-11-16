import {
  ADD_ROCKET,
  REMOVE_ROCKET,
  FETCH_ROCKETS,
} from './rocketTypes';

const initialState = {
  rockets: [],
}

const rocketsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    case REMOVE_ROCKET:
      return state.map((mission) => {
        if(mission.id === action.payload.id){
          return {...mission, added: false}
        }
        return mission
      });
    case ADD_ROCKET:
      return state.map((mission) => {
        if(mission.id === action.payload.id){
          return {...mission, added: true}
        }
        return mission
      });
    default:
      return state;  
  }
}

export default rocketsReducer;
