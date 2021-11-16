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
    <nav className="nav-bar">
      <div className="navbar-container">
        <span className="brand-name">Space Travel</span>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} activeClassName="active-link" exact>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
