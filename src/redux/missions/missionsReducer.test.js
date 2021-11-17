import React from "react";
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);

import { addMission, removeMission, updateMission, fetchMissionsRequest, fetchMissionsSuccess, fetchMissionsFailure,  } from "./missionActions";


describe("test missionReducer", () => {
  it("addMission action", () => {
    const initialState = {};
    const store = mockStore(initialState);
    const mission = {
      id: "1",
      name: "Mission 1",
      description: "Description 1",
    };
    store.dispatch(addMission(mission));
    
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'ADD_MISSION', payload: mission }]);
  });
  
  it("updateMission action", () => {
    const initialState = {};
    const store = mockStore(initialState);
    const mission = {
      id: "1",
      name: "Mission 1",
      description: "Description 1 updated",
    };
    store.dispatch(updateMission(mission));
    expect(store.getActions()).toEqual([{ type: 'UPDATE_MISSION', payload: mission }]);
  });
  
  it("removeMission action", () => {
    const initialState = {};
    const store = mockStore(initialState);
    const missionId = "1";
    store.dispatch(removeMission(missionId));

    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'REMOVE_MISSION', payload: missionId }]);
  });

  it("fetchMissionsRequest action", () => {
    const initialState = {};
    const store = mockStore(initialState);
    store.dispatch(fetchMissionsRequest());
    expect(store.getActions()).toEqual([{ type: 'FETCH_MISSIONS_REQUEST' }]);
  });

  it("fetchMissionsSuccess action", () => {
    const initialState = {};
    const store = mockStore(initialState);
    const missions = [{
      id: "1",
      name: "Mission 1",
      description: "Description 1",
    }];
    store.dispatch(fetchMissionsSuccess(missions));
    expect(store.getActions()).toEqual([{ type: 'FETCH_MISSIONS_SUCCESS', payload: missions }]);
  });

  it("fetchMissionsFailure action", () => {
    const initialState = {};
    const store = mockStore(initialState);
    const error = "Error";
    store.dispatch(fetchMissionsFailure(error));
    expect(store.getActions()).toEqual([{ type: 'FETCH_MISSIONS_FAILURE', payload: error }]);
  });
});