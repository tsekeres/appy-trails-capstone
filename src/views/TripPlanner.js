import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TripForm from '../components/TripForm';
import UpdateTripCards from '../components/UpdateTripCards';
import { getTrips, getUserTrips } from '../helpers/data/TripsData';

function TripPlanner({ user, admin }) {
  const [trips, setTrips] = useState([]);
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    getTrips().then(setTrips);
    getUserTrips(user.userId).then(setUserTrips);
  }, []);

  return (
    <div className="planner-container d-flex flex-row">
      <div className="form-container">
        <TripForm
          className="planner-form"
          formTitle="Plan a Trip"
          user={user}
          admin={admin}
          setTrips={setTrips}
          setUserTrips={setUserTrips}
        />
      </div>
      <div className="card-planner-container">
        <div className="trips-header">
          <h1>Your Trips</h1>
        </div>
        {admin !== null && (
          <div>
            {admin ? (
              <div className="card-container-a">
                {trips?.map((tripInfo) => (
                  <UpdateTripCards
                    key={tripInfo.firebaseKey}
                    user={user}
                    admin={admin}
                    trip={tripInfo}
                    setTrips={setTrips}
                  />
                ))}
              </div>
            ) : (
              <div className="card-container-a">
                {userTrips?.map((tripInfo) => (
                  <UpdateTripCards
                    key={tripInfo.firebaseKey}
                    user={user}
                    trip={tripInfo}
                    setUserTrips={setUserTrips}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

TripPlanner.propTypes = {
  user: PropTypes.any,
  admin: PropTypes.any,
};

export default TripPlanner;
