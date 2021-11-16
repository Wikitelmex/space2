import axios from 'axios';
import {
  ADD_ROCKET,
  REMOVE_ROCKET,
  UPDATE_ROCKET,
  FETCH_ROCKETS_REQUEST,
  FETCH_ROCKETS_SUCCESS,
  FETCH_ROCKETS_FAILURE,
} from './rocketTypes';

const { v4: uuidv4 } = require('uuid');

export const addMission = (rocket) => ({
  type: ADD_ROCKET,
  payload: rocket,
});

export const removeMission = (rocketId) => ({
  type: REMOVE_ROCKET,
  payload: rocketId,
});

export const updateMission = (rocket) => ({
  type: UPDATE_ROCKET,
  payload: rocket,
});

const fetchMissionsRequest = () => ({
  type: FETCH_ROCKETS_REQUEST,
});

const fetchMissionsSuccess = (rockets) => ({
  type: FETCH_ROCKETS_SUCCESS,
  payload: rockets,
});

const fetchMissionsFailure = (error) => ({
  type: FETCH_ROCKETS_FAILURE,
  payload: error,
});

export const fetchMissions = (dispatch) => {
  dispatch(fetchMissionsRequest());
  axios.get('http://localhost:3001/rockets')
    .then((response) => dispatch(fetchMissionsSuccess(response.data)))
    .catch((error) => dispatch(fetchMissionsFailure(error)));
};