import axios from 'axios';
import {
  ADD_MISSION,
  REMOVE_MISSION,
  UPDATE_MISSION,
  FETCH_MISSIONS_REQUEST,
  FETCH_MISSIONS_SUCCESS,
  FETCH_MISSIONS_FAILURE,
} from './missionTypes';

export const addMission = (mission) => ({
  type: ADD_MISSION,
  payload: mission,
});

export const removeMission = (missionId) => ({
  type: REMOVE_MISSION,
  payload: missionId,
});

export const updateMission = (mission) => ({
  type: UPDATE_MISSION,
  payload: mission,
});

export const fetchMissionsRequest = () => ({
  type: FETCH_MISSIONS_REQUEST,
});

export const fetchMissionsSuccess = (missions) => ({
  type: FETCH_MISSIONS_SUCCESS,
  payload: missions,
});

export const fetchMissionsFailure = (error) => ({
  type: FETCH_MISSIONS_FAILURE,
  payload: error,
});

export const fetchMissions = () => (dispatch) => {
  dispatch(fetchMissionsRequest());
  axios.get('https://api.spacexdata.com/v3/missions')
    .then((response) => {
      const mapResponse = response.data.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }));
      dispatch(fetchMissionsSuccess(mapResponse));
    })
    .catch((error) => dispatch(fetchMissionsFailure(error)));
};
