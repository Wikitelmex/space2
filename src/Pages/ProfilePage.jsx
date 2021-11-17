import React from 'react';
import { useSelector } from 'react-redux';
import MyMissionsComponent from '../Components/MyMissionsComponent';

const ProfilePage = () => {
  const x = 'profile page under construction';
  const rockets = useSelector((state) => state.rockets.rockets);
  const myMyrockets = rockets.filter((rocket) => rocket.added === true);
  return (
    <div>
      <p>{x}</p>
      <div>
        <h2>My Missions</h2>
        <MyMissionsComponent />
      </div>
      <div>
        <h2>My Rockets</h2>
        <ul>
          {myMyrockets.length > 0
          && myMyrockets.map((rocket) => <li key={rocket.id}>{rocket.name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
