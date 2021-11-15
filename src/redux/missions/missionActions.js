import axios from 'axios';
import {
  ADD_MISSION,
  REMOVE_MISSION,
  UPDATE_MISSION,
  FETCH_MISSIONS_REQUEST,
  FETCH_MISSIONS_SUCCESS,
  FETCH_MISSIONS_FAILURE,
} from './missionTypes';

const { v4: uuidv4 } = require('uuid');

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

const fetchMissionsRequest = () => ({
  type: FETCH_MISSIONS_REQUEST,
});

const fetchMissionsSuccess = (missions) => ({
  type: FETCH_MISSIONS_SUCCESS,
  payload: missions,
});

const fetchMissionsFailure = (error) => ({
  type: FETCH_MISSIONS_FAILURE,
  payload: error,
});

export const fetchMissions = (dispatch) => {
  dispatch(fetchMissionsRequest());
  axios.get('http://localhost:3001/missions')
    .then((response) => dispatch(fetchMissionsSuccess(response.data)))
    .catch((error) => dispatch(fetchMissionsFailure(error)));
};
