import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import Routes from '../helpers/Routes';
import NavBar from '../components/NavBar';
import { getTrips } from '../helpers/data/TripsData';
import getResources from '../helpers/data/ResourcesData';

function App() {
  const [admin, setAdmin] = useState(null);
  const [user, setUser] = useState(null);
  const [trips, setTrips] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getTrips().then(setTrips);
    getResources().then(setResources);
  }, []);

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
    <>
      <NavBar admin={admin} user={user} />
      <Routes
      admin={admin}
      user={user}
      trips={trips}
      setTrips={setTrips}
      resources={resources}
      setResources={setResources}
      />
    </>
  );
}

export default App;
