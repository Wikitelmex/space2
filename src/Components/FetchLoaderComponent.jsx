import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMissions } from '../redux';

const FetchLoaderComponent = ({ fetchMissions }) => {
  useEffect(() => {
    fetchMissions();
  }, []);

  return (
    <div className="d-none">
      data loaded
    </div>
  );
};

FetchLoaderComponent.propTypes = {
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
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchLoaderComponent);
