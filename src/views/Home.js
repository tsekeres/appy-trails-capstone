import React from 'react';
import PropTypes from 'prop-types';
// import UserInfoCard from '../components/UserInfo';

function Home({ user }) {
  return (
    <div className='user-welcome'>
      <h1>Welcome to </h1>
      <hr></hr>
      {user ? <h2>Come On In</h2> : <h2>Please Log In</h2>}
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any,
};

export default Home;
