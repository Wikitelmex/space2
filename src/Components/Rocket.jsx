import PropTypes from 'prop-types';

const Rocket = ({
  id, name, description, image,
}) => (
  <div>
    <h3>{id}</h3>
    <h2>{name}</h2>
    <p>{description}</p>
    <img alt="just a rocket" src={image} />
  </div>
);

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
