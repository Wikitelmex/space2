import React from 'react';
import MyMissionsComponent from '../Components/MyMissionsComponent';

const ProfilePage = () => {
  const PageName = <h1>Profile Page</h1>;
  return (
    <div>
      {PageName}
      <div>
        <h2>My Missions</h2>
        <MyMissionsComponent />
      </div>
    </div>
  );
};

export default ProfilePage;
