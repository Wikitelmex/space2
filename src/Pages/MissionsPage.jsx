import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMissions, updateMission } from '../redux';

const MissionsPage = ({ fetchMissions, updateMission, missionData }) => {
  useEffect(() => {
    fetchMissions();
  }, []);

  if (missionData.loading) {
    return <div>Loading...</div>;
  }

  if (missionData.error) {
    return (
      <div>
        Error!
        {missionData.error}
      </div>
    );
  }

  return (
    <div>
      <h1>Missions</h1>
      <ul>
        {
          missionData
          && missionData.missions
          && missionData.missions.map((mission) => (
            <li key={mission.id}>
              <h2>{mission.name}</h2>
              <p>{mission.description}</p>
              <p
                className={mission.reserved ? 'badge bg-info text-dark' : 'badge bg-secondary'}
              >
                {mission.reserved ? 'Active member' : 'NOT A member'}
              </p>
              <button
                className={mission.reserved ? 'btn btn-outline-danger' : 'btn btn-outline-secondary'}
                type="button"
                onClick={() => updateMission(
                  { ...mission, reserved: !mission.reserved },
                )}
              >
                {mission.reserved ? 'Leave Mission' : 'Join Mission'}
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

MissionsPage.propTypes = {
  fetchMissions: PropTypes.func.isRequired,
  updateMission: PropTypes.func.isRequired,
  missionData: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.string,
    missions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      reserved: PropTypes.bool,
    })),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  missionData: state.missions,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMissions: () => dispatch(fetchMissions()),
  updateMission: (mission) => dispatch(updateMission(mission)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MissionsPage);
