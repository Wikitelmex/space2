import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMissions, updateMission } from '../redux';

const MissionsPage = ({ updateMission, fetchMissions, missionData }) => {
  useEffect(() => {
    if (missionData.missions.length === 0) {
      fetchMissions();
    }
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
      <table className="table table-striped">
        <thead>
          <tr className="border">
            <th className="col-1 border">Mission</th>
            <th className="col-8 border">Description</th>
            <th className="col-1 border">Status</th>
            <th className="col-2 border" aria-label="empty column"> </th>
          </tr>
        </thead>
        <tbody>
          {
            missionData
            && missionData.missions
            && missionData.missions.map((mission) => (
              <tr key={mission.id}>
                <td className="border fw-bold">{mission.name}</td>
                <td className="border">{mission.description}</td>
                <td className="border align-middle">
                  <span
                    className={mission.reserved ? 'badge bg-info text-dark' : 'badge bg-secondary'}
                  >
                    {mission.reserved ? 'Active member' : 'NOT A member'}
                  </span>
                </td>
                <td className="border align-middle">
                  <button
                    className={mission.reserved ? 'btn btn-outline-danger' : 'btn btn-outline-secondary'}
                    type="button"
                    onClick={() => updateMission(
                      { ...mission, reserved: !mission.reserved },
                    )}
                  >
                    {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

MissionsPage.propTypes = {
  updateMission: PropTypes.func.isRequired,
  fetchMissions: PropTypes.func.isRequired,
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
