import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/Routes';
import NavBar from '../components/NavBar';

function App() {
  const [admin, setAdmin] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_TAD)) {
        const adminInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          admin: authed.email.split('@')[0],
        };
        setAdmin(adminInfoObj);
        setUser(false);
      } else if (authed && (authed.uid !== process.env.REACT_APP_ADMIN_TAD)) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0],
        };
        setUser(userInfoObj);
        setAdmin(false);
      } else if ((user || user === null) || (admin || admin === null)) {
        setAdmin(false);
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar admin={admin} user={user} />
        <Routes admin={admin} user={user} />
      </Router>
    </div>
  );
}

export default App;
