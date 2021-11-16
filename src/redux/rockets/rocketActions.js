import axios from 'axios';
import {
  TOGGLE_RESERVATION,
  FETCH_ROCKETS,
  FETCH_ROCKETS_FAILURE,
} from './rocketTypes';

export const toggleReservation = (payload) => ({
  type: TOGGLE_RESERVATION,
  payload,
});

const fetchRocketRequest = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

const fetchRocketFailure = () => ({
  type: FETCH_ROCKETS_FAILURE,
});

export const fetchRockets = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');
    const rockets = response.data.map((entry) => {
      const id = entry.rocket_id;
      const name = entry.rocket_name;
      const { description, flickr_images: flickrImages } = entry;
      const added = false;
      const rocket = {
        id, name, description, flickrImages, added,
      };
      return rocket;
    });
    dispatch(fetchRocketRequest(rockets));
  } catch (error) {
    dispatch(fetchRocketFailure());
  }
};
