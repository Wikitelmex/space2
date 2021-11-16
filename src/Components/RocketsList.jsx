import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketActions';
import Rocket from './Rocket';

const RocketsList = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);

  return (
    <ul>
      {rockets.map((rocket) => (
        <li key={rocket.id}>
          <Rocket id={rocket.id} name={rocket.name} description={rocket.description} />
        </li>
      ))}
    </ul>
  );
};

export default RocketsList;
