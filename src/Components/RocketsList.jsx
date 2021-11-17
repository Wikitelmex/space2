import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, toggleReservation } from '../redux/rockets/rocketActions';
import Rocket from './Rocket';

const RocketsList = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);

  const handleClick = ((e) => {
    e.preventDefault();
    dispatch(toggleReservation(e.target.id));
  });

  return (
    <ul className="p-5">
      {rockets.map((rocket) => (
        <li key={rocket.id}>
          <Rocket
            id={rocket.id}
            name={rocket.name}
            description={rocket.description}
            image={rocket.flickrImages[0]}
            handleClick={handleClick}
            added={rocket.added}
          />
        </li>
      ))}
    </ul>
  );
};

export default RocketsList;
