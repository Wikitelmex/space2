import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ProfilePage = ({ missionData }) => {
  if (missionData.missions.length === 0) {
    return <div>No Missions loaded yet...</div>;
  }

  return (
    <div>
      <table className="border col-12">
        {
          missionData
          && missionData.missions
          && missionData.missions
            .filter((mission) => mission.reserved === true)
            .map((mission) => (
              <tr className="border" key={mission.id}>
                <td className="align-middle">
                  <p className="mt-3 ms-2">
                    {mission.name}
                  </p>
                </td>
              </tr>
            ))
        }
      </table>
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
