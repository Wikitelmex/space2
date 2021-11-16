import PropTypes from 'prop-types';

const ReservationButton = ({ id, added, handleClick }) => {
  const buttonText = added ? 'CANCEL RESERVATION' : 'RESERVE ROCKET';

  return (
    <button id={id} onClick={handleClick} type="submit">{buttonText}</button>
  );
};

ReservationButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  added: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

ReservationButton.defaultProps = {
  added: false,
};

export default ReservationButton;
