import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TripCards from '../components/TripCards';
import { getTrips } from '../helpers/data/TripsData';

function Trips({ user, admin }) {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips().then(setTrips);
  }, []);

  return (
    <>
      <div className="trips-header">
        <h1>Trip Plans</h1>
      </div>
      <div className="card-container trips-view">
        {trips?.map((tripInfo) => (
          <TripCards
            key={tripInfo.firebaseKey}
            trip={tripInfo}
            setTrips={setTrips}
            user={user}
            admin={admin}
          />
        ))}
      </div>
    </>
  );
}

Trips.propTypes = {
  user: PropTypes.any,
  admin: PropTypes.any
};

export default Trips;
