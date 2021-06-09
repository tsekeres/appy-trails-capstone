import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
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
    <Container className="planner-container d-flex flex-row">
      <div className="form-container">
        <TripForm
          className="planner-form"
          formTitle="Plan a Trip"
          user={user}
          admin={admin}
          setTrips={setTrips}
        />
      </div>
      <div>
        <div>
          <h2>Your Trips</h2>
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
                    setTrips={setTrips}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </Container>
  );
}

TripPlanner.propTypes = {
  user: PropTypes.any,
  admin: PropTypes.any,
};

export default TripPlanner;
