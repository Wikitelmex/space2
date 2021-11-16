import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ProfilePage = ({ missionData }) => {
  console.log('missionData', missionData);
  if (missionData.missions.length === 0) {
    return <div>No Missions loaded yet...</div>;
  }

  return (
    <div>
      <ul>
        {
          missionData
          && missionData.missions
          && missionData.missions
            .filter((mission) => mission.reserved === true)
            .map((mission) => (
              <li key={mission.id}>
                <h2>{mission.name}</h2>
              </li>
            ))
        }
      </ul>
    </div>
  );
};

ProfilePage.propTypes = {
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

export default connect(mapStateToProps)(ProfilePage);
