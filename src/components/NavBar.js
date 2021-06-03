import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';
import hikinglogo from '../assets/hikinglogo.png';

const NavBar = ({ user, admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem>
        <Link className='nav-link' to='/trip-planner'>
          Trip Planner
        </Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar fixed="top" color="light" light expand="md">
        <NavbarBrand href="/home"><img id="navLogo" src={hikinglogo}></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavItem>
            <Link className="nav-link" to="/trips">
              Trips
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/resources">
              Resources
            </Link>
          </NavItem>
          <Nav className="mr-auto" navbar>
            {user && authenticated()}
            {user !== null && (
              <NavItem>
                {user ? (
                  <Button color="danger" onClick={signOutUser}>
                    Sign Out
                  </Button>
                ) : (
                  <Button color="info" onClick={signInUser}>
                    Sign In
                  </Button>
                )}
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any,
};

export default NavBar;
