import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMissions } from '../redux';

const MissionsPage = ({ fetchMissions, missionData }) => {

    useEffect(() => {
        fetchMissions();
    }, []);

    return missionData.loading ?
        (
            <div>Loading...</div>
        ) : missionData.error ?
            (
                <div> error {missionData.error}</div>
            ) : (
                <div>
                    <h1>Missions</h1>
                    <ul>
                        {
                            missionData &&
                            missionData.missions &&
                            missionData.missions.map(mission => (
                                <li key={mission.id}>
                                    <h2>{mission.name}</h2>
                                    <p>{mission.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            );





};

const mapStateToProps = state => ({
    missionData: state.missions
});

const mapDispatchToProps = dispatch => ({
    fetchMissions: () => dispatch(fetchMissions())
});

export default connect(mapStateToProps, mapDispatchToProps)(MissionsPage);