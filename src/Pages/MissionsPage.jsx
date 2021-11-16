import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMissions } from '../redux';

const MissionsPage = ({ fetchMissions, missionData }) => {
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
            </li>
          ))
        }
      </ul>
    </div>
  );
};

MissionsPage.propTypes = {
  fetchMissions: PropTypes.func.isRequired,
  missionData: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.string,
    missions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
    })),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  missionData: state.missions,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMissions: () => dispatch(fetchMissions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MissionsPage);
