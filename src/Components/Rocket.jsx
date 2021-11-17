import PropTypes from 'prop-types';
import ReservationButton from './RocketDependencies/ReservationButton';

const Rocket = ({
  id, name, description, image, added, handleClick,
}) => (
  <div className=" d-flex flex-row mb-5">
    <div className="col-2 p">
      <img alt="just a rocket" src={image} className="rocket-img px-2" />
    </div>
    <div className="d-flex flex-column col-10 px-2">
      <h3>{name}</h3>
      <p>
        {added && <span className="badge bg-info">Reserved</span>}
        <span>{description}</span>
      </p>
      <ReservationButton
        id={id}
        added={added}
        handleClick={handleClick}
      />
    </div>
  </div>
);

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  added: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

Rocket.defaultProps = {
  added: false,
};

export default Rocket;
