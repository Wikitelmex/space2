import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleReservation } from '../redux/rockets/rocketActions';

const Rocket = ({
  id, name, description, image, added,
}) => {
  const dispatch = useDispatch();
  const buttonText = added ? 'CANCEL RESERVATION' : 'RESERVE ROCKET';
  const buttonClass = added ? 'btn btn-secondary btn-cancel' : 'btn btn-primary btn-reserve';

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(toggleReservation(e.target.id));
  };

  return (
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
        <button id={id} onClick={handleClick} type="submit" className={buttonClass}>{buttonText}</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  added: PropTypes.bool,
};

Rocket.defaultProps = {
  added: false,
};

export default Rocket;
