import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import TripForm from '../components/TripForm';
import UpdateTripCards from '../components/UpdateTripCards';
import { getTrips } from '../helpers/data/TripsData';

function TripPlanner({ user, admin }) {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips().then(setTrips);
  }, []);

  return (
    <Container>
      <div className="form-container">
        <TripForm formTitle="Plan a Trip" user={user} admin={admin} setTrips={setTrips} />
      </div>
      <div className="card-container">
        <div>
          <h2>Your Trips</h2>
        </div>
        <hr></hr>
        {trips?.map((tripInfo) => (
          <UpdateTripCards
            key={tripInfo.firebaseKey}
            trip={tripInfo}
            setTrips={setTrips}
          />
        ))}
      </div>
    </Container>
  );
}

TripPlanner.propTypes = {
  user: PropTypes.any,
  admin: PropTypes.any,
};

export default TripPlanner;
