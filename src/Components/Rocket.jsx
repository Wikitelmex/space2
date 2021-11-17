import PropTypes from 'prop-types';
import ReservationButton from './RocketDependencies/ReservationButton';

const Rocket = ({
  id, name, description, image, added, handleClick,
}) => (
  <div>
    <h3>{id}</h3>
    <h2>{name}</h2>
    <p>{description}</p>
    {added && <p className="badge bg-info">Reserved</p>}
    <ReservationButton
      id={id}
      added={added}
      handleClick={handleClick}
    />
    <img alt="just a rocket" src={image} />
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
