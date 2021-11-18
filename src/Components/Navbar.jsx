import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Profile',
    },
    {
      id: 2,
      path: '/rockets',
      text: 'Rockets',
    },
    {
      id: 3,
      path: '/missions',
      text: 'Missions',
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom shadow">
      <div className="container-fluid ms-5">
        <NavLink className="navbar-brand h1" to="/">
          <h3 className="fw-bold mt-1">
            <img className="me-2" src="SpaceLogo.png" alt="Girl in a jacket" width="40" height="40" />
            Space Travelers&apos; Hub
          </h3>
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse mb-2 me-auto" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto text-light me-3">
            {links.map((link) => (
              <li className="nav-link me-3" key={link.id}>
                <NavLink to={link.path} activeClassName="active-link" exact>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </nav>
  );
};
export default Navbar;
