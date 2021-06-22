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
import Logo from '../assets/Logo.png';

const NavBar = ({ user, admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <Link className='nav-link' style={{ color: '#d3910e' }} to='/trip-planner'>
      Trip Planner
    </Link>
  );

  return (
    <div>
      <Navbar fixed='top' color='dark' light expand='md'>
        <NavbarBrand href='/home'>
          <img className='navLogo' src={Logo}></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <Link
                className='nav-link trip-color'
                style={{ color: '#d3910e' }}
                to='/trips'
              >
                Trips
              </Link>
            </NavItem>
            <NavItem>{(user || admin) && authenticated()}</NavItem>
            <NavItem>
              <Link
                className='nav-link'
                style={{ color: '#d3910e' }}
                to='/resources'
              >
                Resources
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
        {user !== null && (
          <NavItem className='nav-id-info'>
            {user || admin ? (
              <div className='user-info'>
                <div>
                  <img
                    className='profilePic'
                    src={user.profileImage || admin.profileImage}
                  ></img>
                </div>
                <div className='userInfo'>
                  <div>{user.fullName || admin.fullName}</div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </NavItem>
        )}
        {(user || admin) !== null && (
          <NavItem>
            {user || admin ? (
              <Button color='danger' onClick={signOutUser}>
                Sign Out
              </Button>
            ) : (
              <Button color='info' onClick={signInUser}>
                Sign In
              </Button>
            )}
          </NavItem>
        )}
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any,
  admin: PropTypes.any
};

export default NavBar;
