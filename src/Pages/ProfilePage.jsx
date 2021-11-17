import React from 'react';
import MyMissionsComponent from '../Components/MyMissionsComponent';
import MyRockets from '../Components/MyRockets';

const ProfilePage = () => {
  const PageName = <h1>Profile Page</h1>;

  return (
    <div>
      {PageName}
      <div className="d-flex flex-row col-12">
        <div className="col-6 p-3">
          <h2>My Missions</h2>
          <MyMissionsComponent />
        </div>
        <div className="col-6 p-3">
          <h2>My Rockets</h2>
          <MyRockets />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
